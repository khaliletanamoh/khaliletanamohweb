# Gmail contact form email setup

The contact form sends messages through the Gmail API. It does not use a Gmail password or app password; configure OAuth credentials and keep them private on the server.

## Required environment variables

Add these to `.env.local` for local development and to your hosting provider's production environment:

- `GMAIL_CLIENT_ID` = Google OAuth client ID
- `GMAIL_CLIENT_SECRET` = Google OAuth client secret
- `GMAIL_REFRESH_TOKEN` = refresh token for the Gmail account that sends mail
- `CONTACT_TO_EMAIL` = `khaliletana641@gmail.com`
- `NEXT_PUBLIC_SITE_URL` = `https://khaliletanamoh.com`

## Google setup

1. Create or select a Google Cloud project.
2. Enable the Gmail API.
3. Configure the OAuth consent screen.
4. Create OAuth credentials and keep the client ID and client secret private.
5. Generate a refresh token with the Gmail send scope (`https://www.googleapis.com/auth/gmail.send`).
6. Restart the app or redeploy after saving these values.

The values above are already set for your live site domain and recipient email.
