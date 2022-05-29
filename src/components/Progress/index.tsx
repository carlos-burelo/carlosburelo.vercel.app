import { Stack } from '#types'
import _ from './Progress.module.scss'
import { logoColors} from '#data/colors'

interface ProgressProps {
  data: Stack[]
}
interface ValidStack{
  name: string
  percent: number
}

export default function Progress({data}:ProgressProps){
  const validStack = data.filter(item => item.percent) as ValidStack[]
  validStack.sort((a, b) => b.percent - a.percent);
  const stack = validStack.map(item => (
    {
      color: logoColors[item.name],
      percent: item.percent,
    }
  ))
  return (
    <div className={_.progressBar}>
      {
        stack.map((item, index) => (
          <div key={index} className={_.stack} style={{
            backgroundColor: item.color,
            width: `${item.percent}%`,
          }}></div>
        ))

      }
    </div>
  )
}