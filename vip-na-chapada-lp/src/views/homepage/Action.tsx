import { IconArrowRight, IconHomeDollar, IconKey } from '@tabler/icons-react'
import { Link } from 'react-router'
import ctaBackgroundImage from '../../assets/cta-night-veranda.webp'

export default function Action() {
  const primaryButtonClassName = 'inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#d9c8aa] px-8 py-4 text-sm font-bold text-[#1f160d] shadow-xl shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eadcc4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
  const secondaryButtonClassName = 'inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-[#d9c8aa]/70 bg-black/20 px-8 py-4 text-sm font-bold text-[#f7ead5] shadow-lg shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fff3df] hover:text-[#fff3df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

  return (
    <section
      className="relative flex justify-center overflow-hidden bg-primary-dark bg-cover bg-center px-6 py-18 text-center text-[#f7ead5] sm:px-12 lg:px-18"
      style={{ backgroundImage: `url(${ctaBackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/18" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="mt-3 font-heading text-4xl font-bold text-[#fff3df]">
            Gostou do que viu?
          </h2>
          <p className="text-base font-semibold text-[#f7ead5] sm:text-lg">
            Vamos encontrar a casa certa para você!
          </p>
        </div>
        <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Link className={primaryButtonClassName} to="/vendas">
            <IconHomeDollar aria-hidden="true" size={22} stroke={1.8} />
            Comprar
            <IconArrowRight aria-hidden="true" size={18} stroke={1.8} />
          </Link>
          <Link className={secondaryButtonClassName} to="/aluguel">
            <IconKey aria-hidden="true" size={22} stroke={1.8} />
            Alugar
            <IconArrowRight aria-hidden="true" size={18} stroke={1.8} />
          </Link>
        </div>
      </div>
    </section>
  )
}
