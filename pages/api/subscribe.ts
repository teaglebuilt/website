import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { subscribe } from '../../lib/redis';

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const msg = {
    to: `${process.env.EMAIL}`,
    from: `${process.env.EMAIL}`,
    subject: 'Confirm Subscription',
    text: 'poop tastes like it smells...delicious',
    html: '<strong>jimmy cracks corn but i honestly do not care.</strong>',
  };

  try {
    const result = await subscribe(email);
    if (!result) {
      res.status(200).json({ message: 'You are already subscribed!' });
    }
    await sgMail.send(msg);
    res.json({ message: `Thankyou for subscribing! Please check your email.` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
