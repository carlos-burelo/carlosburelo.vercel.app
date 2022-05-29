import { createIdFromText } from '#utils/text'
import Link from 'next/link'
export function Heading($props: any, tag: string) {
  const haveNodes = typeof $props.children !== 'string'
  const idRx = /#\[(.*?)\]/g
  if (!haveNodes) {
    // asignacion de un id, ya sea personalizado o generado
    const matchCustomId = $props.children.match(idRx)
    const id = !matchCustomId
      ? `#${createIdFromText($props.children)}`
      : `#${matchCustomId[0].replace(idRx, '$1')}`
    const text = $props.children.replace(idRx, '')
    return (
      <Wrapper id={id}>
        <Tag tag={tag}>{text}</Tag>
      </Wrapper>
    )
  } else {
    // object or array
    const child = $props.children
    // if (!Array.isArray(child)) console.log(child)

    const isArrayNode = Array.isArray(child)
    if (!isArrayNode) {
      const matchCustomId = child.props.children.match(idRx)
      const id = !matchCustomId
        ? `#${createIdFromText(child.props.children)}`
        : `#${matchCustomId[0].replace(idRx, '$1')}`
      const text = child.props.children.replace(idRx, '')
      const childTag = child.type
      // const parentTag = $props
      // console.log(parentTag)
      return (
        <Wrapper id={id}>
          <Tag tag={tag}>
            <Tag tag={childTag}>{text}</Tag>
          </Tag>
        </Wrapper>
      )
    } else {
      const childArray = $props.children
      const child = childArray[0]
      const matchCustomId = childArray[1].match(idRx)
      const id = !matchCustomId
        ? `#${createIdFromText(childArray[1])}`
        : `#${matchCustomId[0].replace(idRx, '$1')}`
      const text = child.props.children
      return (
        <Wrapper id={id}>
          <Tag tag={tag}>
            <Tag tag={child.type}>{text}</Tag>
          </Tag>
        </Wrapper>
      )
    }
  }
}

interface WrapperProps {
  id: string
  children: React.ReactNode
}

export function Wrapper({ id, children }: WrapperProps) {
  return (
    <div className='heading'>
      <Link href={id}>
        <a id={id.replace('#', '')}>{children}</a>
      </Link>
    </div>
  )
}
interface TagProps {
  tag: string
  children: React.ReactNode
}
export function Tag({ tag, children }: TagProps) {
  if (tag == 'h1') return <h1>{children}</h1>
  if (tag == 'h2') return <h2>{children}</h2>
  if (tag == 'code') return <code>{children}</code>
  else return <h3>{children}</h3>
}
