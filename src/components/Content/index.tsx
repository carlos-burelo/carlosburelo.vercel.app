import Subtitle from '#components/Subtitle'
import Table from '#components/Table'
import _ from './Content.module.scss'

interface ContentProps {
  children: React.ReactNode
  table?: string[][]
}

export default function Content({ children, table }: ContentProps) {
  return (
    <section className={_.container}>
      <div className={_.table}>
        <Subtitle text='Tabla de contenido' />
        {table && <Table data={table} />}
      </div>
      <div className={_.content}>{children}</div>
    </section>
  )
}
