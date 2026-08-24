import {
  IconGrill,
  IconHomeDollar,
  IconHomeHeart,
  IconKey,
  IconMapPin,
  IconStar,
  IconUsersGroup,
  type TablerIcon,
} from "@tabler/icons-react"
import type { CSSProperties } from 'react'
import { Link } from "react-router"
import heroBackgroundImage from '../../assets/hero-home-dark-left.webp'
import heroMobileBackgroundImage from '../../assets/hero-home-mobile-bottom-text.webp'

type AboutCard = {
  icon: TablerIcon;
  title: string;
  description: string;
}

const AboutHousingInfo: AboutCard[] = [
  {
    icon: IconMapPin,
    title: 'Bem localizado',
    description: 'Arredores bons, tranquilos e sempre pertinho.',
  },
  {
    icon: IconHomeHeart,
    title: 'Aconchegante',
    description: 'Preparado com carinho para você descansar bem.',
  },
  {
    icon: IconStar,
    title: 'Bem avaliado',
    description: 'Hóspedes curtiram conforto, cuidado e experiência.',
  },
  {
    icon: IconGrill,
    title: 'Completo',
    description: 'Piscina, churrasqueira e lazer para aproveitar.',
  },
  {
    icon: IconUsersGroup,
    title: 'Todos bem-vindos',
    description: 'Perfeito para reunir gente querida com conforto.',
  },
]

export default function Hero() {
  const primaryButtonClassName = 'inline-flex min-h-15 w-[15rem] items-center justify-center gap-3 rounded-lg bg-bg-soft px-4 py-4 font-bold text-text shadow-xl shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
  const secondaryButtonClassName = 'inline-flex min-h-15 w-[15rem] items-center justify-center gap-3 rounded-lg bg-bg-soft px-4 py-4 font-bold text-text shadow-xl shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

  return (
    <>
    <div
      className="hero-background flex min-h-[42rem] flex-col justify-end bg-bg-soft bg-cover bg-top px-6 pb-10 pt-80 text-[#f7ead5] sm:h-[28rem] sm:min-h-0 sm:justify-center sm:bg-center sm:px-12 sm:py-10 lg:px-18 2xl:h-[34rem]"
      style={{
        '--hero-desktop-image': `url(${heroBackgroundImage})`,
        '--hero-mobile-image': `url(${heroMobileBackgroundImage})`,
      } as CSSProperties}
    >
      <div className="flex max-w-xl flex-col gap-8">
          <h1 className="font-heading text-[2.35rem] font-bold leading-[1.05] text-[#fff3df] sm:text-[2.7rem] 2xl:text-[3.25rem]">
            Experimente um novo estilo de vida.
          </h1>
          <p className="max-w-md font-semibold leading-7 text-[#f7ead5]">
            Imóveis com propósito em Brasília e na Chapada, para morar,
            investir e viver com mais bem-estar.
          </p>
      </div>
      <div className="flex flex-col gap-4 pt-8 sm:flex-row items-center">
          <Link className={primaryButtonClassName} to="/vendas">
            <IconHomeDollar aria-hidden="true" size={24} stroke={1.8} />
            Comprar
          </Link>
          <Link className={secondaryButtonClassName} to="/aluguel">
            <IconKey aria-hidden="true" size={24} stroke={1.8} />
            Reservar
          </Link>
      </div>
    </div>
    <section className="bg-bg px-4 py-2 text-text sm:px-12 lg:px-18">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-5">
        {AboutHousingInfo.map(({ description, icon: Icon, title }) => (
          <article
            className="flex min-w-0 flex-col items-center gap-2.5 rounded-lg border border-border bg-surface p-5 text-center shadow-sm shadow-[var(--shadow)] transition-colors duration-300"
            key={title}
          >
            <Icon className="mb-4 text-accent" size={30} stroke={1.8} />
            <h3 className="font-heading text-xl font-bold text-primary">{title}</h3>
            <p className="mt-2 text-sm text-text">{description}</p>
          </article>
        ))}
      </div>
    </section>
    </>
  )
}
