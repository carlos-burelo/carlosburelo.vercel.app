import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = decodeURIComponent(req.query['url'] as string)
  const result = await fetch(url)
  const body = result.body as any
  body.pipe(res)
}
