import type { CSSProperties } from 'react'
import rentHeroBackgroundImage from '../../assets/rent-hero-dark-left.webp'
import rentHeroMobileBackgroundImage from '../../assets/rent-hero-mobile-bottom-text.webp'

export default function RentHero() {
  return (
    <section
      className="hero-background flex min-h-[42rem] items-end bg-bg-soft bg-cover bg-top px-6 pb-12 pt-80 text-[#f7ead5] sm:min-h-[24rem] sm:items-center sm:bg-center sm:px-12 sm:py-16 lg:px-18"
      style={{
        '--hero-desktop-image': `url(${rentHeroBackgroundImage})`,
        '--hero-mobile-image': `url(${rentHeroMobileBackgroundImage})`,
      } as CSSProperties}
    >
      <div className="flex w-full max-w-xl flex-col gap-4">
        <h1 className="font-heading text-[2.45rem] font-bold leading-[1.05] text-[#fff3df] sm:text-[3rem]">
          Hospedagens para respirar diferente.
        </h1>
        <p className="max-w-md font-semibold leading-7 text-[#f7ead5]">
          Casas e apartamentos preparados com cuidado para quem busca descanso,
          conforto e uma estadia que faça sentido.
        </p>
      </div>
    </section>
  )
}
