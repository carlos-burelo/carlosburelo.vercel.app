import { colors } from '#data/colors'
import { iconMap } from '#data/logos'
import { SnippetInterface } from '#types'
import Link from 'next/link'
import _ from './Snippet.module.scss'

export default function SnippetCard({ title, id, type }: SnippetInterface) {
  const Icon = iconMap[type]
  const [foreground, background] = colors[type] || colors['css']
  const attrs = {
    style: {
      backgroundColor: background,
      color: foreground,
    },
  }
  return (
    <Link href={`/snippets/${id}`}>
      <a className={_.snippet}>
        <div className={_.icon} {...attrs}>
          {Icon}
        </div>
        <h3 className={_.title}>{title}</h3>
      </a>
    </Link>
  )
}
