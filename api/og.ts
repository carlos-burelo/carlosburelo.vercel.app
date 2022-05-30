import type { NextApiRequest, NextApiResponse } from 'next'
import chromium from 'chrome-aws-lambda'
import core from 'puppeteer-core'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  const browser = await core.launch({
    args: chromium.args,
    executablePath: process.env.NODE_ENV !== 'development'
      ? await chromium.executablePath
      : EDGE_PATH,
    headless: process.env.NODE_ENV !== "development" ? chromium.headless : true,
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 600 })
  const url = (req.query['path'] as string) || ''
  await page.goto(url)
  await page.waitForTimeout(1000)

  const data = await page.screenshot({ type: 'jpeg', })
  await browser.close()
  res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
  res.setHeader('Content-Type', 'image/jpeg')
  res.end(data)
}
