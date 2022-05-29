import { SearchIcon } from '#data/icons'
import _ from './Search.module.scss'

interface SearchProps extends React.HTMLAttributes<HTMLInputElement> {}

export default function Search({ ...props }: SearchProps) {
  return (
    <div className={_.box}>
      <input type='search' className={_.input} {...props} />
      <span className={_.icon}>
      <SearchIcon/>
      </span>
    </div>
  )
}
