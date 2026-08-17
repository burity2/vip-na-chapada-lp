import { IconArrowRight } from '@tabler/icons-react'
import { Link } from 'react-router'
import vipNaChapadaImage from '../../assets/casas_aluguel/vip_na_chapada/01.webp'
import vipNoApImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6326.webp'

type HouseForRent = {
  detail: string
  housePicture: string
  houseName: string
  houseInfo: string[]
  viewLink: string
}

const housesForRent: HouseForRent[] = [
  {
    detail: 'Vista da Chapada',
    housePicture: vipNaChapadaImage,
    houseName: 'VIP na Chapada',
    houseInfo: ['Vista panorâmica', 'Varanda', 'Hidromassagem'],
    viewLink: '/aluguel#vip-na-chapada',
  },
  {
    detail: 'Apartamento completo',
    housePicture: vipNoApImage,
    houseName: 'Apartamento na Asa Norte',
    houseInfo: ['Prédio completo', 'Boa localização', 'Confortável'],
    viewLink: '/aluguel#vip-no-ap',
  },
]

function HomeRentCard({ detail, houseInfo, houseName, housePicture, viewLink }: HouseForRent) {
  return (
    <Link
      aria-label={`Ver detalhes de ${houseName}`}
      className="group relative flex min-w-[min(19rem,calc(100vw-2rem))] max-w-[min(19rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--shadow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:min-w-76 sm:max-w-76"
      to={viewLink}
    >
      <article className="flex flex-1 flex-col">
        <div className="relative h-52 overflow-hidden bg-bg-soft">
          <img
            alt={houseName}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={housePicture}
          />
          <span className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-bg shadow-md shadow-[var(--shadow)]">
            {detail}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex flex-col gap-2.5 space-y-2">
            <h3 className="font-heading text-xl font-bold text-text">{houseName}</h3>
            <p className="text-sm font-semibold text-text">{houseInfo.join(' · ')}</p>
          </div>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-accent">
            Ver detalhes
            <IconArrowRight aria-hidden="true" size={18} stroke={1.8} />
          </span>
        </div>
      </article>
    </Link>
  )
}

export default function Rent() {
  return (
    <section id="aluguel" className="flex flex-col gap-8 px-4 pt-12 pb-12 sm:px-12 lg:px-18">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">Imóveis para alugar</h2>
        </div>
        <Link
          className="hidden items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:inline-flex"
          to="/aluguel"
        >
          Ver todas
          <IconArrowRight aria-hidden="true" size={18} stroke={1.8} />
        </Link>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-12 sm:px-12 lg:-mx-18 lg:px-18 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="flex gap-6">
          {housesForRent.map((house) => (
            <HomeRentCard key={house.houseName} {...house} />
          ))}
        </div>
      </div>
    </section>
  )
}
