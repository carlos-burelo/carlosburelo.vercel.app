import type { NextApiRequest, NextApiResponse } from 'next'
import playwright from "playwright-aws-lambda"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const browser = await playwright.launchChromium()
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 600,
    },
  })
  const url = (req.query['path'] as string) || ''
  await page.goto(url, {
    timeout: 15 * 1000,
    waitUntil: 'networkidle',
  })
  const data = await page.screenshot({ type: 'jpeg' })
  await browser.close()
  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')
  res.end(data)
}
