interface TimeProps extends React.HTMLAttributes<HTMLTimeElement> {
  raw: string
}

export default function Time({ raw, ...props }: TimeProps) {
  const date = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(raw))
  return (
    <time dateTime={date} {...props}>
      {date}
    </time>
  )
}
