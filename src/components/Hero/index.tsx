import Image from 'next/image'
import _ from './Hero.module.scss'

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className={_.hero}>
      <div className={_.image}>
        <Image
          src='/images/octopus.webp'
          width={400}
          height={450}
          alt='Hero'
          layout='responsive'
          priority={true}
          loading='eager'
        />
      </div>
      <div className={_.about}>
        <h2 className={_.say}>Hi, i&#39;m</h2>
        <h1 className={_.name}>
          <mark>Carlos </mark>
          Burelo
        </h1>
        <p className={_.text}>
          Desarrollador web en constante aprendizaje y activo contribuidor de
          codigo abierto.
        </p>
      </div>
    </section>
  )
}
