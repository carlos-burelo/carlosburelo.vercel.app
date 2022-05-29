import NavLink from '#components/NavLink'
import _ from './Navbar.module.scss'

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className={_.navbar}>
      <ol className={_.list}>
        <NavLink to='/' title='Inicio' />
        <NavLink to='/blog' title='Blog' />
        <NavLink to='/snippets' title='Fragmentos' />
        <NavLink to='/projects' title='Proyectos' />
      </ol>
    </nav>
  )
}
