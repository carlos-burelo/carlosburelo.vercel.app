import Link from 'next/link'
import { MouseEventHandler } from 'react'
import _ from './Default.module.scss'

interface DefaultProps {
  text?: string
  children?: React.ReactNode
  href?: string
  outline?: boolean
}

export default function DefaultButton({
  text,
  children,
  href,
  outline,
}: DefaultProps) {
  const createRipple: MouseEventHandler<HTMLButtonElement> = event => {
    const button = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add(_.ripple)
    const ripple = button.getElementsByClassName(_.ripple)[0]
    if (ripple) ripple.remove()
    button.appendChild(circle)
  }
  const attrs = {
    className: `${_.btn} ${outline ? _.outline : ''}`,
  }
  return !href ? (
    <button type='button' onClick={createRipple} {...attrs}>
      {!text ? children : text}
    </button>
  ) : (
    <Link href={href}>
      <a {...attrs}>{!text ? children : text}</a>
    </Link>
  )
}
