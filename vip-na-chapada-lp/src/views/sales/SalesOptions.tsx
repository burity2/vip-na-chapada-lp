import { useEffect, useRef, useState } from 'react'
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
  IconMaximize,
  IconMapPin,
  IconShieldCheck,
  IconX,
  IconUsers,
} from '@tabler/icons-react'
import { useLocation } from 'react-router'
import { preloadImages } from '../../utils/preloadImages'
import vipNoApEntranceImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6319.webp'
import vipNoApBathroomImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6107.webp'
import vipNoApGymImage from '../../assets/casas_aluguel/vip_no_ap/IMG_0176.webp'
import vipNoApMarketImage from '../../assets/casas_aluguel/vip_no_ap/IMG_7719.webp'
import vipNoApBedroomImage from '../../assets/casas_aluguel/vip_no_ap/IMG_6326.webp'
import vipNoApBuildingImage from '../../assets/casas_aluguel/vip_no_ap/IMG_7708.webp'
import ap2DroneImage from '../../assets/casas_venda/ap_2/DJI_0308.webp'
import ap2LivingImage from '../../assets/casas_venda/ap_2/IMG_8820.webp'
import ap2LivingAngleImage from '../../assets/casas_venda/ap_2/IMG_8821.webp'
import ap2DiningImage from '../../assets/casas_venda/ap_2/IMG_8822.webp'
import ap2KitchenImage from '../../assets/casas_venda/ap_2/IMG_8825.webp'
import ap2KitchenWideImage from '../../assets/casas_venda/ap_2/IMG_8826.webp'
import ap2KitchenAngleImage from '../../assets/casas_venda/ap_2/IMG_8827.webp'
import ap2BathroomImage from '../../assets/casas_venda/ap_2/IMG_8833.webp'
import ap2BedroomImage from '../../assets/casas_venda/ap_2/IMG_8843.webp'
import ap2BedroomViewImage from '../../assets/casas_venda/ap_2/IMG_8844.webp'
import ap2BathroomDetailImage from '../../assets/casas_venda/ap_2/IMG_8849.webp'
import ap2SuiteImage from '../../assets/casas_venda/ap_2/IMG_8856.webp'
import ap2HallImage from '../../assets/casas_venda/ap_2/IMG_8865.webp'
import ap2EntryImage from '../../assets/casas_venda/ap_2/IMG_8867.webp'
import ap2ServiceAreaImage from '../../assets/casas_venda/ap_2/IMG_8873.webp'

type SalesHouse = {
  id: string
  listingUrl?: string
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
    id: 'apartamento-decorado',
    listingUrl: 'https://www.netimoveis.com/imovel/apartamento-2-quartos-distrito-federal-brasilia-lago-norte/1184043',
    tag: 'Apartamento à venda',
    name: 'Apartamento decorado',
    price: 'Valor sob consulta',
    summary: ['Detalhes sob consulta', 'Ambientes integrados', 'Cozinha planejada'],
    cover: ap2LivingImage,
    gallery: [
      ap2LivingImage,
      ap2LivingAngleImage,
      ap2DiningImage,
      ap2KitchenImage,
      ap2KitchenWideImage,
      ap2KitchenAngleImage,
      ap2BathroomImage,
      ap2BedroomImage,
      ap2BedroomViewImage,
      ap2BathroomDetailImage,
      ap2SuiteImage,
      ap2HallImage,
      ap2EntryImage,
      ap2ServiceAreaImage,
      ap2DroneImage,
    ],
    description:
      'Apartamento com ambientes bem distribuídos, marcenaria planejada, cozinha equipada e fotos completas para avaliar cada detalhe antes da visita.',
    perfectFor: 'Moradia, investimento e visitas agendadas',
    location: 'Localização sob consulta',
    checkIn: 'Visitas sob agendamento',
    rules: 'Detalhes de venda sob consulta',
  },
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
  const cardRef = useRef<HTMLElement>(null)
  const hasMountedRef = useRef(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const activeImage = house.gallery[activeImageIndex] ?? house.gallery[0]

  useEffect(() => {
    if (isExpanded) {
      preloadImages(house.gallery)
    }
  }, [house.gallery, isExpanded])

  useEffect(() => {
    if (!isLightboxOpen) {
      return
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousDocumentOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen])

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    if (!isExpanded || window.innerWidth >= 768) {
      return
    }

    window.setTimeout(() => {
      window.scrollBy({ behavior: 'smooth', top: 202 })
    }, 280)
  }, [isExpanded])

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
      ref={cardRef}
    >
      <button
        aria-expanded={isExpanded}
        className="grid w-full grid-cols-1 items-center gap-5 p-4 text-left transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent md:grid-cols-[9rem_1fr_auto_auto]"
        onFocus={() => preloadImages(house.gallery)}
        onMouseEnter={() => preloadImages(house.gallery)}
        onClick={onToggle}
        type="button"
      >
        <div className="h-28 overflow-hidden rounded-md bg-bg-soft md:h-24">
          <img alt={house.name} className="h-full w-full object-cover" loading="eager" src={house.cover} />
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
        <div className="grid gap-5 border-t border-border-soft p-3 sm:p-4 md:grid-cols-[1.6fr_1fr] md:gap-8 md:p-6">
          <div className="grid gap-4">
            <div className="group/gallery relative aspect-[4/3] overflow-hidden rounded-lg bg-bg-soft sm:aspect-[16/11] md:aspect-[4/3]">
              <img
                alt={`${house.name} - foto ${activeImageIndex + 1}`}
                className="h-full w-full object-cover"
                fetchPriority="high"
                loading="eager"
                src={activeImage}
              />
              <button
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 z-20 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-surface/85 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-3 sm:size-10 md:opacity-25 md:focus-visible:opacity-100 md:group-hover/gallery:opacity-100 md:group-focus-within/gallery:opacity-100"
                onClick={showPreviousImage}
                type="button"
              >
                <IconChevronLeft aria-hidden="true" className="size-5 sm:size-[22px]" stroke={1.8} />
              </button>
              <button
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 z-20 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-surface/85 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-3 sm:size-10 md:opacity-25 md:focus-visible:opacity-100 md:group-hover/gallery:opacity-100 md:group-focus-within/gallery:opacity-100"
                onClick={showNextImage}
                type="button"
              >
                <IconChevronRight aria-hidden="true" className="size-5 sm:size-[22px]" stroke={1.8} />
              </button>
              <button
                aria-label={`Ampliar fotos de ${house.name}`}
                className="absolute right-2 top-2 z-20 grid size-8 place-items-center rounded-full bg-surface/85 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-3 sm:top-3 sm:size-10 md:opacity-25 md:focus-visible:opacity-100 md:group-hover/gallery:opacity-100 md:group-focus-within/gallery:opacity-100"
                onClick={() => setIsLightboxOpen(true)}
                title="Ampliar fotos"
                type="button"
              >
                <IconMaximize aria-hidden="true" className="size-[18px] sm:size-5" stroke={1.8} />
              </button>
              <div className="absolute inset-x-0 bottom-0 z-10 hidden bg-black/70 p-3 shadow-[0_-16px_32px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-opacity duration-300 md:block md:opacity-0 md:group-hover/gallery:opacity-100 md:group-focus-within/gallery:opacity-100">
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
                        loading="eager"
                        src={picture}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-text">Sobre esta casa</h4>
              <p className="text-sm font-semibold leading-6 text-text">{house.description}</p>
            </div>

            <div className="grid gap-6 rounded-lg border border-border-soft bg-surface-2 p-2 text-sm font-semibold text-text sm:p-4">
              <span className="inline-flex items-center gap-3">
                <IconMapPin aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={20} stroke={1.8} />
                {house.location}
              </span>
              <span className="inline-flex items-center gap-3">
                <IconCalendar aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={20} stroke={1.8} />
                {house.checkIn}
              </span>
              <span className="inline-flex items-center gap-3">
                <IconShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={20} stroke={1.8} />
                {house.rules}
              </span>
              <span className="inline-flex items-center gap-3">
                <IconClock aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={20} stroke={1.8} />
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
                href={house.listingUrl ?? whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Ver imóvel
                <IconHomeDollar aria-hidden="true" size={18} stroke={1.8} />
              </a>
            </div>
          </div>
        </div>
      )}

      {isLightboxOpen && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex touch-none items-center justify-center overflow-hidden bg-black/90 p-2 backdrop-blur-sm md:p-4"
          onClick={() => setIsLightboxOpen(false)}
          onTouchMove={(event) => event.preventDefault()}
          onWheel={(event) => event.preventDefault()}
          role="dialog"
        >
          <div
            className="relative flex h-[calc(100dvh-1rem)] w-full max-w-6xl flex-col gap-3 md:h-full md:max-h-[92vh]"
            onClick={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Fechar galeria ampliada"
              className="absolute right-2 top-2 z-30 grid size-9 place-items-center rounded-full bg-surface/90 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-3 sm:top-3 sm:size-11"
              onClick={() => setIsLightboxOpen(false)}
              type="button"
            >
              <IconX aria-hidden="true" className="size-5 sm:size-[22px]" stroke={1.8} />
            </button>
            <div className="group/lightbox relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-black">
              <img
                alt={`${house.name} - foto ampliada ${activeImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
                fetchPriority="high"
                loading="eager"
                src={activeImage}
              />
              <button
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-5 sm:size-11"
                onClick={showPreviousImage}
                type="button"
              >
                <IconChevronLeft aria-hidden="true" className="size-5 sm:size-6" stroke={1.8} />
              </button>
              <button
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-5 sm:size-11"
                onClick={showNextImage}
                type="button"
              >
                <IconChevronRight aria-hidden="true" className="size-5 sm:size-6" stroke={1.8} />
              </button>
            </div>
            <div className="hidden rounded-lg bg-black/70 p-3 backdrop-blur-sm md:block">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {house.gallery.map((picture, index) => (
                  <button
                    aria-label={`Mostrar foto ${index + 1} de ${house.name}`}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border bg-bg-soft transition-all duration-300 hover:border-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      index === activeImageIndex
                        ? 'border-accent opacity-100'
                        : 'border-white/35 opacity-80 hover:opacity-100'
                    }`}
                    key={`${house.id}-lightbox-${picture}`}
                    onClick={() => setActiveImageIndex(index)}
                    type="button"
                  >
                    <img
                      alt={`${house.name} - miniatura ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="eager"
                      src={picture}
                    />
                  </button>
                ))}
              </div>
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
