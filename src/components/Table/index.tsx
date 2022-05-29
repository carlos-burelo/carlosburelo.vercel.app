import { createIdFromText } from '#utils/text'
import Link from 'next/link'
import _ from './Table.module.scss'

interface TableProps {
  data: string[] | string[][]
}

export default function ContentList({ data }: TableProps) {
  return (
    <ul className={_.list}>
      {data.map((row, i) => (
        <li key={i} className={_.item}>
          {Array.isArray(row) ? (
            <ContentList data={row} />
          ) : (
            <Link href={'#' + createIdFromText(row)}>
              <a className={_.link}>{row}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
export function Item({ text }: { text: string }) {
  return <li className={_.item}>{text}</li>
}
