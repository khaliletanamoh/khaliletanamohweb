# Contact form email setup

The contact form is connected to the `/api/contact` route. It sends submitted messages through Resend; the API key and sender address stay server-side.

## Configure Resend

1. Create a Resend account and generate an API key.
2. Verify a domain you control in Resend, then use an address at that domain as the sender. For example, `Portfolio Contact <contact@example.com>`.
3. Add these environment variables to your local `.env.local` file and to your hosting provider's production environment:

   - `RESEND_API_KEY`: your Resend API key (`re_...`)
   - `CONTACT_TO_EMAIL`: the inbox that should receive messages (currently `khaliletana641@gmail.com`)
   - `CONTACT_FROM_EMAIL`: a sender address on your verified domain
   - `NEXT_PUBLIC_SITE_URL`: the canonical origin of the deployed site, such as `https://yourdomain.com`

4. Restart the local dev server, or redeploy the site after setting production variables.
5. Submit a test message through the live contact form. Replies to the message will go to the visitor's submitted email address.

Do not commit `.env.local` or put the Resend API key in a `NEXT_PUBLIC_` variable. The API route returns an error when the email service is not configured or delivery fails.
