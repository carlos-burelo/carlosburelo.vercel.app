import { createIdFromText } from '#utils/text'
import Link from 'next/link'
import _ from './Table.module.scss'
import { TableProps } from '#types'

export default function Table({ data }: TableProps) {
  const onClickHandler = (e: any) => {
    const table = e.currentTarget.nextElementSibling
    if (!table) return
    const visibility = table.style.display
    console.log(visibility)
    table.classList.toggle(_.show)
  }
  return (
    <ul className={_.list}>
      {data.map((row, i) => (
        <li className={_.item} key={i}>
          <Item text={row['#']} onClick={onClickHandler} />
          {row['+'] && (
            <div className={_.nest}>
              <Table data={row['+']} />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
export function Item({ text, onClick }: any) {
  return (
    <Link href={`#${createIdFromText(text)}`}>
      <a onClick={onClick} className={_.link}>
        {text}
      </a>
    </Link>
  )
}
