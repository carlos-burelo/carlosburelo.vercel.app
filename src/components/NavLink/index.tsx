import Link from 'next/link'
import { useRouter } from 'next/router'
import _ from './NavLink.module.scss'

interface NavLinkProps {
  to: string
  title: string
}

export default function NavLink({ to, title }: NavLinkProps) {
  const { pathname } = useRouter()
  const isActive = pathname === to
  return (
    <li className={_.item}>
      <Link href={to}>
        <a className={_.link + ` ${isActive ? _.active : ''}`}>{title}</a>
      </Link>
    </li>
  )
}
