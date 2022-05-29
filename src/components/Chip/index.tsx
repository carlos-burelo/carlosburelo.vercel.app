// import { Colors } from '#types'
import _ from './Chip.module.scss'
import { hexColors, Color } from '#data/colors'

export default function Chip({ children, color: hex = 'blue' }: Props) {
  const [color, backgroundColor] = hexColors[hex]
  return (
    <div style={{ backgroundColor, color }} className={_.chip}>
      {children}
    </div>
  )
}
interface Props {
  children: React.ReactNode
  color: Color
}
