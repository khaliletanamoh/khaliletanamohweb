# Gmail contact form email setup

The contact form sends messages through the Gmail API. It does not use a Gmail password or an app password; configure OAuth credentials and keep them private on the server.

## Configure Google OAuth

1. In Google Cloud Console, create/select a project and enable the **Gmail API**.
2. Configure the OAuth consent screen for your account and add the Gmail account that will send messages as a test user if the app remains in testing mode.
3. Create an OAuth client ID (Web application or Desktop app) and note its client ID and client secret.
4. Generate a refresh token for the sending Gmail account with the `https://www.googleapis.com/auth/gmail.send` scope. Keep it secret. The Google OAuth Playground can generate one when configured to use your OAuth client credentials; ensure offline access is requested.
5. Add these environment variables to `.env.local` locally and to your hosting provider's server-side production environment:

   - `GMAIL_CLIENT_ID`: OAuth client ID
   - `GMAIL_CLIENT_SECRET`: OAuth client secret
   - `GMAIL_REFRESH_TOKEN`: refresh token for the Gmail account that sends mail
   - `CONTACT_TO_EMAIL`: inbox receiving contact submissions (currently `khaliletana641@gmail.com`)
   - `NEXT_PUBLIC_SITE_URL`: canonical site origin, such as `https://yourdomain.com`

6. Restart local development or redeploy after setting production variables, then send a test through the contact form.

The refresh token and client secret must never be committed or exposed through `NEXT_PUBLIC_` variables. The visitor's email is set as `Reply-To`, so replies go back to them. Until all required environment variables are configured, the API responds that the contact service is unavailable.
