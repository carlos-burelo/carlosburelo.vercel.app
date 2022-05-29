import type { NextApiRequest, NextApiResponse } from 'next'
import chromium from 'chrome-aws-lambda'
import playwright from 'playwright-core'
import { EDGE_PATH } from '#data/env'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: process.env.NODE_ENV !== 'development'
      ? await chromium.executablePath
      : EDGE_PATH,
    headless: process.env.NODE_ENV !== "development" ? chromium.headless : true,
  })
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
  res.setHeader('Content-Type', 'image/jpeg')
  res.end(data)
}
