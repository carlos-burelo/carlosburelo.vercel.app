import Section from '#components/Section'
import _ from './Skills.module.scss'
import { skills } from '#data/user'
import { iconMap } from '#data/logos'

interface SkillsProps {}

export default function Skills({}: SkillsProps) {
  return (
    <Section name='Habilidades'>
      <div className={_.content}>
        <p className={_.description}>
          Durante mis años de experiencia en el área de desarrollo me he
          desempeñado en diferentes proyectos los cuales me han dado una gran
          experiencia en las tecnologías que he utilizado.
        </p>
        <div className={_.skills}>
          {skills.map(skill => (
            <div className={_.skill} key={skill}>
              {iconMap[skill]}
              <span className={_.name}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
