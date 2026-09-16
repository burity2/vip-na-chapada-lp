import { useEffect, useRef, useState } from 'react'
import type { PointerEvent, WheelEvent } from 'react'
import {
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from '@tabler/icons-react'

type ImageLightboxProps = {
  activeIndex: number
  images: string[]
  isOpen: boolean
  onActiveIndexChange: (index: number) => void
  onClose: () => void
  title: string
}

type Point = {
  x: number
  y: number
}

const minZoom = 1
const maxZoom = 3

function clampZoom(value: number) {
  return Math.min(maxZoom, Math.max(minZoom, value))
}

function getDistance(firstPoint: Point, secondPoint: Point) {
  return Math.hypot(firstPoint.x - secondPoint.x, firstPoint.y - secondPoint.y)
}

export default function ImageLightbox({
  activeIndex,
  images,
  isOpen,
  onActiveIndexChange,
  onClose,
  title,
}: ImageLightboxProps) {
  const activeImage = images[activeIndex] ?? images[0]
  const pointersRef = useRef(new Map<number, Point>())
  const dragStartRef = useRef<{ offset: Point; point: Point } | null>(null)
  const hasDraggedRef = useRef(false)
  const pinchStartRef = useRef<{ distance: number; zoom: number } | null>(null)
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(minZoom)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
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
  }, [isOpen, onClose])

  if (!isOpen || !activeImage) {
    return null
  }

  function showPreviousImage() {
    onActiveIndexChange(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  function showNextImage() {
    onActiveIndexChange(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }

  function updateZoom(nextZoom: number) {
    const clampedZoom = clampZoom(nextZoom)
    setZoom(clampedZoom)

    if (clampedZoom === minZoom) {
      setOffset({ x: 0, y: 0 })
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })

    const pointers = Array.from(pointersRef.current.values())
    if (pointers.length === 2) {
      pinchStartRef.current = {
        distance: getDistance(pointers[0], pointers[1]),
        zoom,
      }
      dragStartRef.current = null
      return
    }

    if (zoom > minZoom) {
      hasDraggedRef.current = false
      dragStartRef.current = {
        offset,
        point: { x: event.clientX, y: event.clientY },
      }
    }
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!pointersRef.current.has(event.pointerId)) {
      return
    }

    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    const pointers = Array.from(pointersRef.current.values())

    if (pointers.length === 2 && pinchStartRef.current) {
      const nextDistance = getDistance(pointers[0], pointers[1])
      updateZoom(pinchStartRef.current.zoom * (nextDistance / pinchStartRef.current.distance))
      return
    }

    if (pointers.length === 1 && dragStartRef.current && zoom > minZoom) {
      if (
        Math.abs(event.clientX - dragStartRef.current.point.x) > 4
        || Math.abs(event.clientY - dragStartRef.current.point.y) > 4
      ) {
        hasDraggedRef.current = true
      }

      setOffset({
        x: dragStartRef.current.offset.x + event.clientX - dragStartRef.current.point.x,
        y: dragStartRef.current.offset.y + event.clientY - dragStartRef.current.point.y,
      })
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    pointersRef.current.delete(event.pointerId)
    pinchStartRef.current = null

    if (pointersRef.current.size === 0) {
      dragStartRef.current = null
    }
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault()
    updateZoom(zoom + (event.deltaY < 0 ? 0.16 : -0.16))
  }

  function handleImageAreaClick() {
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false
      return
    }

    updateZoom(zoom === minZoom ? 2 : minZoom)
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex touch-none items-center justify-center overflow-hidden bg-black/90 p-2 backdrop-blur-sm md:p-4"
      onClick={onClose}
      onTouchMove={(event) => event.preventDefault()}
      onWheel={(event) => event.preventDefault()}
      role="dialog"
    >
      <div
        className="relative flex h-[calc(100dvh-1rem)] w-full max-w-6xl flex-col md:h-full md:max-h-[92vh]"
        onClick={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Fechar galeria ampliada"
          className="absolute right-2 top-2 z-30 grid size-9 place-items-center rounded-full bg-surface/90 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-3 sm:top-3 sm:size-11"
          onClick={onClose}
          type="button"
        >
          <IconX aria-hidden="true" className="size-5 sm:size-[22px]" stroke={1.8} />
        </button>
        <div
          className={`group/lightbox relative flex min-h-0 flex-1 touch-none items-center justify-center overflow-hidden rounded-lg bg-black ${
            zoom > minZoom ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
          }`}
          onClick={handleImageAreaClick}
          onPointerCancel={handlePointerUp}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
        >
          <img
            alt={`${title} - foto ampliada ${activeIndex + 1}`}
            className="max-h-full max-w-full select-none object-contain transition-transform duration-100"
            decoding="async"
            draggable={false}
            fetchPriority="high"
            loading="eager"
            src={activeImage}
            style={{
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
            }}
          />
          <button
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-5 sm:size-11"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousImage()
            }}
            type="button"
          >
            <IconChevronLeft aria-hidden="true" className="size-5 sm:size-6" stroke={1.8} />
          </button>
          <button
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-primary shadow-md shadow-[var(--shadow)] transition-all duration-300 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-5 sm:size-11"
            onClick={(event) => {
              event.stopPropagation()
              showNextImage()
            }}
            type="button"
          >
            <IconChevronRight aria-hidden="true" className="size-5 sm:size-6" stroke={1.8} />
          </button>
        </div>

        <div className="pointer-events-none absolute inset-x-2 bottom-2 z-30 flex flex-col items-end gap-3 sm:inset-x-4 sm:bottom-4">
          <div className="pointer-events-auto flex w-44 items-center rounded-lg bg-black/70 p-3 shadow-md shadow-[var(--shadow)] backdrop-blur-sm sm:w-56">
            <input
              aria-label="Zoom da imagem"
              className="h-2 w-full accent-[var(--accent)]"
              max={maxZoom}
              min={minZoom}
              onChange={(event) => updateZoom(Number(event.target.value))}
              step={0.05}
              type="range"
              value={zoom}
            />
          </div>
          <div className="pointer-events-auto hidden max-w-full gap-2 overflow-x-auto rounded-lg bg-black/70 p-3 backdrop-blur-sm md:flex">
            {images.map((picture, index) => (
              <button
                aria-label={`Mostrar foto ${index + 1} de ${title}`}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border bg-bg-soft transition-all duration-300 hover:border-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  index === activeIndex
                    ? 'border-accent opacity-100'
                    : 'border-white/35 opacity-80 hover:opacity-100'
                }`}
                key={`${title}-lightbox-${picture}`}
                onClick={() => onActiveIndexChange(index)}
                type="button"
              >
                <img
                  alt={`${title} - miniatura ${index + 1}`}
                  className="h-full w-full object-cover"
                  decoding="async"
                  loading="lazy"
                  src={picture}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
