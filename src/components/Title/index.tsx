import _ from './Title.module.scss'

interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className={_.title}>
      <mark>#</mark> {text}
    </h1>
  )
}
