import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function base64UrlEncode(value: string) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const subject =
      typeof body.subject === "string"
        ? body.subject.trim()
        : "Portfolio contact message";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    const honeypot =
      typeof body.website === "string" ? body.website : "";

    // Silently accept automated bot submissions without sending email.
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

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
      const requestOrigin = new URL(origin).origin;
      const expectedOrigin = new URL(allowedOrigin).origin;

      if (requestOrigin !== expectedOrigin) {
        return NextResponse.json(
          { error: "Invalid request origin." },
          { status: 403 }
        );
      }
    }

    const clientId = process.env.GMAIL_CLIENT_ID;
    const clientSecret = process.env.GMAIL_CLIENT_SECRET;
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!clientId || !clientSecret || !refreshToken || !toEmail) {
      return NextResponse.json(
        { error: "The Gmail contact service is not configured yet." },
        { status: 503 }
      );
    }

    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
      cache: "no-store",
    });

    if (!tokenResponse.ok) {
      console.error("Google OAuth token refresh failed:", tokenResponse.status);
      return NextResponse.json(
        { error: "Unable to connect to Gmail. Please try again later." },
        { status: 502 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token as string | undefined;

    if (!accessToken) {
      console.error("Google OAuth response did not contain an access token.");
      return NextResponse.json(
        { error: "Unable to connect to Gmail. Please try again later." },
        { status: 502 }
      );
    }

    // Prevent header injection while preserving the original values in the body.
    const safeSubject = subject.replace(/[\r\n]+/g, " ");
    const rawEmail = [
      `To: ${toEmail}`,
      `Reply-To: ${email.replace(/[\r\n]+/g, "")}`,
      `Subject: Portfolio message: ${safeSubject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\r\n");

    const gmailResponse = await fetch(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ raw: base64UrlEncode(rawEmail) }),
        cache: "no-store",
      }
    );

    if (!gmailResponse.ok) {
      console.error("Gmail API send failed:", gmailResponse.status);
      return NextResponse.json(
        { error: "Unable to send your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
