import _ from './Footer.module.scss'
import Link from 'next/link'
import { social } from '#data/user'

export default function Footer() {
  return (
    <footer className={_.footer}>
      <h1 className={_.name}>
        Carlos&nbsp;<mark>Burelo</mark>
      </h1>
      <div className={_.disclaimer}>
        <ul className={_.list}>
          <FooterLink to='/' title='Inicio' />
          <FooterLink to='/blog' title='Blog' />
          <FooterLink to='/projects' title='Projectos' />
          <FooterLink to='/snippets' title='Fragmentos' />
        </ul>
        <h3 className={_.copy}>
          © {new Date().getFullYear()} - Sin derechos reservados.
        </h3>
      </div>
      <ul className={_.social}>
        {social.map((i, index) => (
          <li className={_.item} key={index}>
            <a
              href={i.url}
              title={i.name}
              className={_.icon}
              rel='noopener noreferrer'
              target='_blank'
            >
              {<i.icon></i.icon>}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

interface FooterLinkProps {
  to: string
  title: string
}
function FooterLink({ title, to }: FooterLinkProps) {
  return (
    <li className={_.item}>
      <Link href={to}>
        <a className={_.link}>{title}</a>
      </Link>
    </li>
  )
}
