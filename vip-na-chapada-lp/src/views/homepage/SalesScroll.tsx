import { IconArrowRight } from '@tabler/icons-react'
import { Link } from 'react-router'
import vipNoApImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6326.webp'
import ap2LivingImage from '../../assets/casas_venda/ap_2/IMG_8820.webp'

type HouseForSale = {
  detail: string
  housePicture: string
  houseName: string
  houseInfo: string[]
  viewLink: string
}

const housesForSale: HouseForSale[] = [
  {
    detail: 'Apartamento à venda',
    housePicture: vipNoApImage,
    houseName: 'Apartamento Vip Parque Norte',
    houseInfo: ['Local certo para investir', 'Mobiliado e decorado', 'Pronto para morar ou alugar', 'Assessoria direta'],
    viewLink: '/vendas#apartamento-na-asa-norte',
  },
  {
    detail: 'Apartamento à venda',
    housePicture: ap2LivingImage,
    houseName: 'Apartamento CA Lago Norte',
    houseInfo: ['Exclusividade e oportunidade', 'Pronto para morar', 'Excelente localização'],
    viewLink: '/vendas#apartamento-decorado',
  },
]

function HomeSaleCard({ detail, houseInfo, houseName, housePicture, viewLink }: HouseForSale) {
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
            decoding="async"
            loading="lazy"
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

export default function Sales() {
  return (
    <section id="vendas" className="flex flex-col gap-8 px-4 pt-12 sm:px-12 lg:px-18">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">Imóveis à venda</h2>
        </div>
        <Link
          className="hidden items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:inline-flex"
          to="/vendas"
        >
          Ver todas
          <IconArrowRight aria-hidden="true" size={18} stroke={1.8} />
        </Link>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-12 sm:px-12 lg:-mx-18 lg:px-18 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="flex gap-6">
          {housesForSale.map((house) => (
            <HomeSaleCard key={house.houseName} {...house} />
          ))}
        </div>
      </div>
    </section>
  )
}
