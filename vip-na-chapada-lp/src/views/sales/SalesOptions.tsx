import { useState } from 'react'
import {
  IconBath,
  IconBed,
  IconBrandWhatsapp,
  IconCalendar,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconHomeDollar,
  IconMapPin,
  IconShieldCheck,
  IconUsers,
} from '@tabler/icons-react'
import { useLocation } from 'react-router'
import vipNoApEntranceImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6319.webp'
import vipNoApBathroomImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6107.webp'
import vipNoApGymImage from '../../assets/casas_aluguel/vip_no_ap/IMG_0176.webp'
import vipNoApMarketImage from '../../assets/casas_aluguel/vip_no_ap/IMG_7719.webp'
import vipNoApBedroomImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6326.webp'
import vipNoApBuildingImage from '../../assets/casas_aluguel/vip_no_ap/IMG_7708.webp'

type SalesHouse = {
  id: string
  tag: string
  name: string
  price: string
  summary: string[]
  cover: string
  gallery: string[]
  description: string
  perfectFor: string
  location: string
  checkIn: string
  rules: string
}

const salesHouses: SalesHouse[] = [
  {
    id: 'apartamento-na-asa-norte',
    tag: 'Apartamento à venda',
    name: 'Apartamento na Asa Norte',
    price: 'Valor sob consulta',
    summary: ['1 quarto', '1 banheiro', 'Condomínio completo'],
    cover: vipNoApBedroomImage,
    gallery: [
      vipNoApBedroomImage,
      vipNoApGymImage,
      vipNoApMarketImage,
      vipNoApBuildingImage,
      vipNoApBathroomImage,
      vipNoApEntranceImage,
    ],
    description:
      'Apartamento decorado, confortável e bem localizado na Asa Norte, com estrutura de condomínio para morar bem ou investir em locação.',
    perfectFor: 'Moradia, investimento e renda com locação',
    location: 'Asa Norte, Brasília',
    checkIn: 'Visitas sob agendamento',
    rules: 'Detalhes de venda sob consulta',
  },
]

const whatsappUrl = 'https://wa.me/556199510020'

function SalesHouseCard({ house, isExpanded, onToggle }: {
  house: SalesHouse
  isExpanded: boolean
  onToggle: () => void
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeImage = house.gallery[activeImageIndex] ?? house.gallery[0]
  const previewImages = house.gallery.slice(0, 4)

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) => (
      currentIndex === 0 ? house.gallery.length - 1 : currentIndex - 1
    ))
  }

  function showNextImage() {
    setActiveImageIndex((currentIndex) => (
      currentIndex === house.gallery.length - 1 ? 0 : currentIndex + 1
    ))
  }

  return (
    <article
      className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm shadow-[var(--shadow)] transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--shadow)]"
      id={house.id}
    >
      <button
        aria-expanded={isExpanded}
        className="grid w-full grid-cols-1 items-center gap-5 p-4 text-left transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent md:grid-cols-[9rem_1fr_auto_auto]"
        onClick={onToggle}
        type="button"
      >
        <div className="h-28 overflow-hidden rounded-md bg-bg-soft md:h-24">
          <img alt={house.name} className="h-full w-full object-cover" src={house.cover} />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <span className="w-fit rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-bg">
            {house.tag}
          </span>
          <h3 className="font-heading text-2xl font-bold text-text">{house.name}</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-text">
            <span className="inline-flex items-center gap-1.5">
              <IconUsers aria-hidden="true" size={16} stroke={1.8} />
              {house.summary[0]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconBed aria-hidden="true" size={16} stroke={1.8} />
              {house.summary[1]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconBath aria-hidden="true" size={16} stroke={1.8} />
              {house.summary[2]}
            </span>
          </div>
        </div>
        <p className="text-sm font-bold text-text md:text-right">{house.price}</p>
        <IconChevronDown
          aria-hidden="true"
          className={`justify-self-end text-primary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          size={22}
          stroke={1.8}
        />
      </button>

      {isExpanded && (
        <div className="grid gap-8 border-t border-border-soft p-4 md:grid-cols-[1.6fr_1fr] md:p-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="group/gallery relative aspect-square place-items-center overflow-hidden rounded-lg bg-bg-soft">
              <img
                alt={`${house.name} - foto ${activeImageIndex + 1}`}
                className="h-full w-full object-cover"
                src={activeImage}
              />
              <button
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-surface/85 text-primary opacity-0 shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group-hover/gallery:opacity-100 group-focus-within/gallery:opacity-100"
                onClick={showPreviousImage}
                type="button"
              >
                <IconChevronLeft aria-hidden="true" size={22} stroke={1.8} />
              </button>
              <button
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-surface/85 text-primary opacity-0 shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group-hover/gallery:opacity-100 group-focus-within/gallery:opacity-100"
                onClick={showNextImage}
                type="button"
              >
                <IconChevronRight aria-hidden="true" size={22} stroke={1.8} />
              </button>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-black/70 p-3 opacity-0 shadow-[0_-16px_32px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-opacity duration-300 group-hover/gallery:opacity-100 group-focus-within/gallery:opacity-100">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {house.gallery.map((picture, index) => (
                    <button
                      aria-label={`Mostrar foto ${index + 1} de ${house.name}`}
                      className={`h-14 w-18 shrink-0 overflow-hidden rounded-md border bg-bg-soft transition-all duration-300 hover:border-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        index === activeImageIndex
                          ? 'border-accent opacity-100'
                          : 'border-white/35 opacity-80 hover:opacity-100'
                      }`}
                      key={`${house.id}-gallery-${picture}`}
                      onClick={() => setActiveImageIndex(index)}
                      type="button"
                    >
                      <img
                        alt={`${house.name} - miniatura ${index + 1}`}
                        className="h-full w-full object-cover"
                        src={picture}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {previewImages.map((picture, index) => (
                <button
                  aria-label={`Mostrar foto ${index + 1} de ${house.name}`}
                  className="grid aspect-square place-items-center overflow-hidden rounded-lg border border-border-soft bg-bg-soft transition-all duration-300 hover:border-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  key={`${house.id}-preview-${picture}`}
                  onClick={() => setActiveImageIndex(index)}
                  type="button"
                >
                  <img
                    alt={`${house.name} - miniatura ${index + 1}`}
                    className="h-full w-full object-cover"
                    src={picture}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-text">Sobre esta casa</h4>
              <p className="text-sm font-semibold leading-6 text-text">{house.description}</p>
            </div>

            <div className="grid gap-3 rounded-lg border border-border-soft bg-surface-2 p-4 text-sm font-semibold text-text">
              <span className="inline-flex items-start gap-3">
                <IconMapPin aria-hidden="true" className="mt-0.5 text-primary" size={20} stroke={1.8} />
                {house.location}
              </span>
              <span className="inline-flex items-start gap-3">
                <IconCalendar aria-hidden="true" className="mt-0.5 text-primary" size={20} stroke={1.8} />
                {house.checkIn}
              </span>
              <span className="inline-flex items-start gap-3">
                <IconShieldCheck aria-hidden="true" className="mt-0.5 text-primary" size={20} stroke={1.8} />
                {house.rules}
              </span>
              <span className="inline-flex items-start gap-3">
                <IconClock aria-hidden="true" className="mt-0.5 text-primary" size={20} stroke={1.8} />
                {house.perfectFor}
              </span>
            </div>

            <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-bold text-primary shadow-sm shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-soft hover:text-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Fale comigo
                <IconBrandWhatsapp aria-hidden="true" size={18} stroke={1.8} />
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-bg shadow-lg shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Tenho interesse
                <IconHomeDollar aria-hidden="true" size={18} stroke={1.8} />
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default function SalesOptions() {
  const location = useLocation()
  const [manualExpandedHouseId, setManualExpandedHouseId] = useState<string | null>(null)
  const hashHouseId = location.hash.replace('#', '')
  const routeExpandedHouseId = salesHouses.some((house) => house.id === hashHouseId)
    ? hashHouseId
    : null
  const expandedHouseId = manualExpandedHouseId ?? routeExpandedHouseId

  return (
    <section className="flex flex-col gap-8 p-6 text-text sm:px-12 lg:px-18">
      <div className="mx-auto flex min-w-full max-w-6xl flex-col gap-5 rounded-lg border border-border-soft bg-surface p-6 shadow-sm shadow-[var(--shadow)]">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-primary">Vendas</span>
          <h2 className="font-heading text-3xl font-bold text-text">Imóveis disponíveis</h2>
        </div>

        <div className="flex flex-col gap-4">
          {salesHouses.map((house) => (
            <SalesHouseCard
              house={house}
              isExpanded={house.id === expandedHouseId}
              key={house.id}
              onToggle={() => setManualExpandedHouseId((currentId) => (
                (currentId ?? routeExpandedHouseId) === house.id ? '' : house.id
              ))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
