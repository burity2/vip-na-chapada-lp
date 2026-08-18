import type { CSSProperties } from 'react'
import salesHeroBackgroundImage from '../../assets/sales-hero-apartment-dark-left.webp'
import salesHeroMobileBackgroundImage from '../../assets/sales-hero-apartment-mobile-bottom-text.webp'

export default function SalesHero() {
  return (
    <section
      className="hero-background flex min-h-[42rem] items-end bg-bg-soft bg-cover bg-top px-6 pb-12 pt-80 text-[#f7ead5] sm:min-h-[24rem] sm:items-center sm:bg-center sm:px-12 sm:py-16 lg:px-18"
      style={{
        '--hero-desktop-image': `url(${salesHeroBackgroundImage})`,
        '--hero-mobile-image': `url(${salesHeroMobileBackgroundImage})`,
      } as CSSProperties}
    >
      <div className="flex w-full max-w-xl flex-col gap-4">
        <h1 className="font-heading text-[2.45rem] font-bold leading-[1.05] text-[#fff3df] sm:text-[3rem]">
          Imóveis à venda
        </h1>
        <p className="max-w-md font-semibold leading-7 text-[#f7ead5]">
          Aqui eu falo um pouco mais sobre esta página e o que ela
          oferece, mas de forma resumida, claro!
        </p>
      </div>
    </section>
  )
}
