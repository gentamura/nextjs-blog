import { NextApiRequest, NextApiResponse } from 'next'


export default (req: NextApiResponse, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}