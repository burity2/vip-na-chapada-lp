import { IconPhone } from '@tabler/icons-react'
import { Link } from 'react-router'
import profilePicture from '../../assets/perfil/profile.webp'

export default function About() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-[color-mix(in_srgb,var(--accent-soft)_38%,var(--bg))] px-6 py-16 text-text sm:px-12 sm:py-20 lg:px-18 lg:py-22">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_46%),linear-gradient(90deg,color-mix(in_srgb,var(--surface)_74%,transparent),color-mix(in_srgb,var(--bg-soft)_70%,transparent))]" />
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-8 text-center lg:w-[85%] lg:flex-row lg:gap-18 lg:text-left">
        <div className="size-40 shrink-0 overflow-hidden rounded-full border-4 border-surface bg-bg-soft shadow-xl shadow-[var(--shadow)] sm:size-44 md:size-48">
          <img
            alt="Foto da anfitriã"
            className="h-full w-full object-cover"
            src={profilePicture}
          />
        </div>
        <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-6 lg:items-start lg:gap-8">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">Prazer, sou Carla!</h2>
          <div className="flex max-w-2xl flex-col gap-4 text-base font-semibold leading-7 text-text">
            <p>
              Minha história começou no movimento. Como educadora física, passei anos ao lado de
              pessoas que queriam mudar de vida a partir do corpo — e aprendi ali que bem-estar
              não é luxo, é decisão diária.
            </p>
            <p>
              Foi buscando esse mesmo equilíbrio que encontrei a Chapada dos Veadeiros. Hoje eu
              junto imóveis com propósito, assessoria de temporada e experiências para te ajudar a
              construir uma vida que faça sentido: com realização pessoal, retorno financeiro e
              conexão de verdade.
            </p>
          </div>
          <Link
            className='inline-flex min-h-15 w-[15rem] items-center justify-center gap-3 rounded-lg bg-bg-soft px-4 py-4 font-bold text-text shadow-xl shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary border border-2 hover:border-primary hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
            to="/contato"
          >
            <IconPhone aria-hidden="true" size={18} stroke={1.8} />
            Fale comigo
          </Link>
        </div>
      </div>
    </section>
  )
}
