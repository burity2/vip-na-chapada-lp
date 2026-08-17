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
              Sou apaixonada por hospitalidade e por criar espaços onde cada hóspede possa relaxar,
              se sentir em casa e aproveitar o melhor da Chapada.
              <br />
              Estou sempre por perto para ajudar sua estadia a ser tranquila, confortável e
              memorável do começo ao fim.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-bold text-bg shadow-lg shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-fit"
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
