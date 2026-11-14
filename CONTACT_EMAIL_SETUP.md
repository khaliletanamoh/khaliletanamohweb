# Zoho SMTP contact form setup

The contact form delivers messages through Zoho's SMTP service over implicit TLS on port 465. The SMTP username is used as the sender, and submissions are delivered to `CONTACT_TO_EMAIL`. The visitor's email is set as `Reply-To`.

Configure these values in your local `.env.local` and in the server-side environment settings for your hosting provider:

- `SMTP_HOST=smtp.zoho.com`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER` = your Zoho Mail account address
- `SMTP_PASSWORD` = your Zoho app-specific password (use an app password if multi-factor authentication is enabled)
- `CONTACT_TO_EMAIL` = the inbox that should receive messages
- `NEXT_PUBLIC_SITE_URL=https://khaliletanamoh.com`

Never commit `.env.local` or publish the SMTP password in frontend code or a `NEXT_PUBLIC_` variable. If an SMTP password has been shared in chat, rotate/revoke it in Zoho Mail immediately and use a newly generated password only in your private deployment settings. Restart or redeploy the app after configuring the variables.
