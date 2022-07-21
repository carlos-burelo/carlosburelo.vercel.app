import { SearchIcon } from '#data/icons'
import { ChangeEvent } from 'react'
import _ from './Search.module.scss'

interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {
  raw: any[]
  onSearch: (results: any) => void
}

export default function Search({ raw, onSearch, ...props }: SearchProps) {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value && !!onSearch) {
      onSearch(
        raw.filter(e => {
          const entries = Object.entries(e)
          const string = JSON.stringify(entries)
          return string.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        })
      )
    }
  }
  return (
    <div className={_.box}>
      <input
        {...props}
        type='search'
        className={_.input}
        onChange={searchHandler}
      />
      <span className={_.icon}>
        <SearchIcon />
      </span>
    </div>
  )
}
