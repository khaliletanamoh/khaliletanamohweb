import { createInterface } from "node:readline";
import { connect as tlsConnect, TLSSocket } from "node:tls";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

async function sendWithSmtp({
  host,
  port,
  username,
  password,
  from,
  to,
  replyTo,
  subject,
  text,
}: {
  host: string;
  port: number;
  username: string;
  password: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  const socket: TLSSocket = tlsConnect({
    host,
    port,
    servername: host,
  });
  socket.setTimeout(15000, () => {
    socket.destroy(new Error("SMTP connection timed out."));
  });

  await new Promise<void>((resolve, reject) => {
    socket.once("secureConnect", resolve);
    socket.once("error", reject);
  });

  const lines = createInterface({ input: socket });
  const iterator = lines[Symbol.asyncIterator]();

  const readResponse = async () => {
    let response = "";
    let statusCode = 0;

    while (true) {
      const next = await iterator.next();
      if (next.done) throw new Error("SMTP connection closed unexpectedly.");

      const line = next.value;
      response += `${line}\n`;
      const match = line.match(/^(\d{3})([ -])/);
      if (!match) continue;

      statusCode = Number(match[1]);
      if (match[2] === " ") break;
    }

    return { statusCode, response };
  };

  const expect = async (allowed: number[]) => {
    const response = await readResponse();
    if (!allowed.includes(response.statusCode)) {
      throw new Error(`SMTP error ${response.statusCode}: ${response.response}`);
    }
    return response;
  };

  const command = async (value: string, allowed: number[]) => {
    socket.write(`${value}\r\n`);
    return expect(allowed);
  };

  try {
    await expect([220]);
    await command("EHLO khaliletanamoh.com", [250]);
    await command("AUTH LOGIN", [334]);
    await command(Buffer.from(username).toString("base64"), [334]);
    await command(Buffer.from(password).toString("base64"), [235]);
    await command(`MAIL FROM:<${from}>`, [250]);
    await command(`RCPT TO:<${to}>`, [250, 251]);
    await command("DATA", [354]);

    const encodedSubject = `=?UTF-8?B?${Buffer.from(subject, "utf8").toString("base64")}?=`;
    const message = [
      `From: ${from}`,
      `To: ${to}`,
      `Reply-To: ${replyTo}`,
      `Subject: ${encodedSubject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      text,
    ]
      .join("\r\n")
      .replace(/(^|\r\n)\./g, "$1..");

    socket.write(`${message}\r\n.\r\n`);
    await expect([250]);
    await command("QUIT", [221]);
  } finally {
    lines.close();
    socket.end();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const honeypot = typeof body.website === "string" ? body.website : "";

    if (honeypot) return NextResponse.json({ success: true });

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin");
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;
    if (origin && allowedOrigin) {
      if (new URL(origin).origin !== new URL(allowedOrigin).origin) {
        return NextResponse.json(
          { error: "Invalid request origin." },
          { status: 403 }
        );
      }
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "465");
    const secure = process.env.SMTP_SECURE !== "false";
    const username = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!host || !Number.isInteger(port) || !username || !password || !toEmail) {
      return NextResponse.json(
        { error: "The email contact service is not configured yet." },
        { status: 503 }
      );
    }

    // This route uses implicit TLS (Zoho's port 465). Do not use it with a
    // plaintext SMTP port; configure a TLS connection before sending secrets.
    if (!secure) {
      return NextResponse.json(
        { error: "SMTP must use a secure TLS connection." },
        { status: 503 }
      );
    }

    // Reject CR/LF in values used in SMTP headers to prevent header injection.
    const safeAddress = (value: string) => /^[^\s<>\r\n]+@[^\s<>\r\n]+$/.test(value);
    if (!safeAddress(username) || !safeAddress(toEmail) || !safeAddress(email)) {
      return NextResponse.json(
        { error: "Please enter valid email addresses." },
        { status: 400 }
      );
    }

    const safeSubject = subject.replace(/[\r\n]+/g, " ");
    const safeName = name.replace(/[\r\n]+/g, " ");

    await sendWithSmtp({
      host,
      port,
      username,
      password,
      from: username,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio message: ${safeSubject}`,
      text: [`Name: ${safeName}`, `Email: ${email}`, "", "Message:", message].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 502 }
    );
  }
}
