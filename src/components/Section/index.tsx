import Title from '#components/Title'
import _ from './Section.module.scss'

interface SectionProps {
  children: React.ReactNode
  className?: string
  name: string
}

export default function Section({ children, name, className }: SectionProps) {
  return (
    <section className={_.section + ` ${className}`}>
      <Title text={name} />
      <div className={_.wrapper}>{children}</div>
    </section>
  )
}
