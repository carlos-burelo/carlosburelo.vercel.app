import { readdirSync } from 'fs'
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize } from 'next-mdx-remote/serialize'
import { join } from 'path'
import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import remarkIds from 'remark-heading-id'
import * as shiki from 'shiki'

const IS_ISR = process.env.IS_ISR
export const shikiPath = join(process.cwd(), IS_ISR ? 'assets' : 'public/assets')

const touched = { current: false }

const touchShikiPath = (): void => {
  if (touched.current) return
  readdirSync(shikiPath)
  touched.current = true
}

export const getMdxHighlighter = async (): Promise<shiki.Highlighter> => {
  touchShikiPath()
  return await shiki.getHighlighter({
    theme: 'one-dark-pro',
    paths: {
      languages: `${shikiPath}/languages/`,
      themes: `${shikiPath}/themes/`,
    },
  })
}

const getRehypeCodeOptions = (): Partial<Options> => ({
  getHighlighter: getMdxHighlighter,
})

export const mdxOptions: SerializeOptions['mdxOptions'] = {
  remarkPlugins: [[remarkIds], [remarkGfm]],
  rehypePlugins: [[rehypePrettyCode, getRehypeCodeOptions()]],
}

export function parseMarkdown(mdx: string) {
  return serialize(mdx, { mdxOptions })
}