import { Heading } from '#components/MDX'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import _ from './Markdown.module.scss'

interface MarkdownProps {
  source: MDXRemoteProps
}

const components: MDXRemoteProps['components'] = {
  h1: props => Heading(props, 'h1'),
  h2: props => Heading(props, 'h2'),
  h3: props => Heading(props, 'h3'),
}
export default function Markdown({ source }: MarkdownProps) {
  return (
    <div className={_.mdx}>
      <MDXRemote {...source} components={components} />
    </div>
  )
}
