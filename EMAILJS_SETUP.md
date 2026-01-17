# EmailJS Setup Guide

## ✅ Integration Complete!

Your contact form and newsletter subscription are now connected to EmailJS with the following configuration:

- **Public Key**: iSsIgKq-MSLH2GVgC
- **Service ID**: service_77a3m8b  
- **Template ID**: template_p2g0dbf

## Email Template Variables

Make sure your EmailJS template includes these variables:

### Contact Form Template Variables:
- `{{from_name}}` - Full name of the person contacting
- `{{from_email}}` - Email address of the person contacting
- `{{phone}}` - Phone number (optional)
- `{{message}}` - The message content
- `{{to_email}}` - Your receiving email (washingtonowade200@gmail.com)

### Newsletter Template Variables:
- `{{from_name}}` - "Newsletter Subscriber"
- `{{from_email}}` - Subscriber's email address
- `{{message}}` - Subscription notification message
- `{{to_email}}` - Your receiving email (washingtonowade200@gmail.com)

## Sample Email Template

Here's a sample template you can use in EmailJS:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

## Features Implemented:

✅ **Contact Form**: Sends emails directly to washingtonowade200@gmail.com
✅ **Newsletter Subscription**: Collects email subscriptions via EmailJS
✅ **Loading States**: Shows "Sending..." and "..." during submission
✅ **Error Handling**: Displays success/error messages to users
✅ **Form Validation**: Requires email and message fields
✅ **Auto-clear**: Forms clear after successful submission

## Testing:

1. Fill out the contact form on your website
2. Check your email (washingtonowade200@gmail.com) for the message
3. Test the newsletter subscription in the footer
4. Verify both success and error states work properly

## Troubleshooting:

If emails aren't being received:
1. Check your EmailJS dashboard for delivery status
2. Verify the template variables match exactly
3. Check spam/junk folders
4. Ensure your EmailJS service is properly configured with your email provider

The integration is now complete and ready for production use!