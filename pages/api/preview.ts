import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.end('Preview mode enabled')
  // res.redirect(req.query.redirect);
}
