import Button from '#components/Buttons'
import NavLink from '#components/NavLink'
import { MenuIcon, MoonIcon } from '#data/icons'
import { useState } from 'react'
import _ from './Navbar.module.scss'

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={_.navbar}>
      <ol className={_.list + ` ${isOpen ? _.open : ''}`}>
        <NavLink to='/' title='Inicio' />
        <NavLink to='/blog' title='Blog' />
        <NavLink to='/snippets' title='Fragmentos' />
        <NavLink to='/projects' title='Proyectos' />
      </ol>
      <div className={_.ctrls}>
        <button className={_.theme}>
          <MoonIcon />
        </button>
        <button className={_.menu} onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  )
}
