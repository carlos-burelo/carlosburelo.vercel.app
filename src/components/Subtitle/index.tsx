import _ from './Subtitle.module.scss'

interface SubtitleProps {
  children?: React.ReactNode
  text?: string
}

export default function Subtitle({ text, children }: SubtitleProps) {
  return <h2 className={_.subtitle}>{text || children}</h2>
}
