import Link from 'next/link'
import _ from './Button.module.scss'

interface StyleMap {
  [key: string]: string
}

interface ButtonsProps {
  text?: string
  children?: React.ReactNode
  to?: string
  style: 'default' | 'outline' | 'translucent'
}

export default function Buttons({ style, to, children, text }: ButtonsProps) {
  const typeMap: StyleMap = {
    default: _.default,
    outline: _.outline,
    translucent: _.translucent,
  }
  !style && (style = 'default')
  const attrs = {
    className: `${_.btn} ${typeMap[style]}`,
    text: (children ? children : text) as string,
    href: to,
  }
  return !to ? <ButtonDefault {...attrs} /> : <ButtonLink {...attrs} />
}

interface ButtonLinkProps {
  href?: string
  text: string
  className?: string
}

export function ButtonLink({ href, text, ...props }: ButtonLinkProps) {
  return (
    <Link href={href as string}>
      <a {...props}>{text}</a>
    </Link>
  )
}
interface ButtonDefaultProps {
  text: string
  className?: string
}

export function ButtonDefault({ text, ...props }: ButtonDefaultProps) {
  return <button {...props}>{text}</button>
}
