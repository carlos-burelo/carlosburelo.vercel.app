import _ from './About.module.scss'
import Image from 'next/image'
import Button from '#components/Button'
import Section from '#components/Section'

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <Section name='Sobre mí'>
      <div className={_.about}>
        <picture className={_.photo}>
          <Image
            src='/images/hero.webp'
            layout='responsive'
            width={300}
            height={200}
            alt='Carlos Burelo'
            priority={true}
            loading='eager'
          />
        </picture>
        <div className={_.description}>
          <h2 className={_.title}>Hola!</h2>
          <p className={_.text}>
            Soy Carlos Burelo, un desarrollador web por hobby y activo
            contribuidor del codigo abierto 😃. <br /> Actualemente soy un
            estudiante universitario que ocasionalmente se dedica a crear
            herramientas y aplicaciones web que mejoren la productividad y
            apoyen a la comunidad, con la esperanza de algun dia crear algo
            realmente grande!!👽.
          </p>
          <div className={_.buttons}>
            <Button style='default'>Descargar CV</Button>
            <Button style='translucent' to='/projects'>
              Ver proyectos
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
