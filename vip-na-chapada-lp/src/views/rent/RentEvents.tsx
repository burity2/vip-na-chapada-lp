import { useEffect, useState } from 'react'

type RentEvent = {
  date: string
  duration?: number
  description: string
  house: string
  name: string
  time: string
}

const eventsApiUrl = 'https://script.google.com/macros/s/AKfycbwCYIwLESFLS0xYBRO3jgTtnuFGYbvwlHNV4eP4AL_e4iOIJluUnfgVsBfZkgQHGKrfYQ/exec'
const defaultEventDuration = 'Dia todo'

function formatEventDuration(duration?: number) {
  return duration == null ? defaultEventDuration : `${duration}h`
}

function formatEventDate(date: string) {
  if (/^\d{1,2}\/\d{1,2}$/.test(date)) {
    return date
  }

  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return date
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    timeZone: 'America/Sao_Paulo',
  }).format(parsedDate)
}

function normalizeEvent(event: Partial<Record<keyof RentEvent, unknown>>): RentEvent | null {
  const date = String(event.date ?? '').trim()
  const description = String(event.description ?? '').trim()
  const house = String(event.house ?? '').trim()
  const name = String(event.name ?? '').trim()
  const time = String(event.time ?? '').trim()
  const rawDuration = event.duration
  const duration = rawDuration === '' || rawDuration == null ? undefined : Number(rawDuration)

  if (!date || !description || !house || !name || !time) {
    return null
  }

  return {
    date: formatEventDate(date),
    description,
    duration: Number.isFinite(duration) ? duration : undefined,
    house,
    name,
    time,
  }
}

const fallbackEvents: RentEvent[] = [
  {
    date: '18/08',
    duration: 2,
    description: 'Visita guiada, fotos livres e conversa sobre estadias especiais.',
    house: 'Maré Azul',
    name: 'Open house de temporada',
    time: '16h',
  },
]

export default function RentEvents() {
  const [events, setEvents] = useState<RentEvent[]>(fallbackEvents)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let shouldIgnore = false

    async function loadEvents() {
      try {
        const response = await fetch(eventsApiUrl)

        if (!response.ok) {
          throw new Error('Eventos indisponíveis')
        }

        const nextEvents = await response.json() as unknown

        if (!Array.isArray(nextEvents)) {
          throw new Error('Formato de eventos inválido')
        }

        const normalizedEvents = nextEvents
          .map((event) => normalizeEvent(event as Partial<Record<keyof RentEvent, unknown>>))
          .filter((event): event is RentEvent => event !== null)

        if (!shouldIgnore) {
          setEvents(normalizedEvents)
        }
      } catch {
        if (!shouldIgnore) {
          setEvents(fallbackEvents)
        }
      } finally {
        if (!shouldIgnore) {
          setIsLoading(false)
        }
      }
    }

    loadEvents()

    return () => {
      shouldIgnore = true
    }
  }, [])

  return (
    <section className="bg-bg px-6 pt-4 text-text sm:px-12 lg:px-18">
      <div className="mx-auto flex min-w-full max-w-6xl flex-col gap-5 rounded-lg border border-border-soft bg-surface p-6 shadow-sm shadow-[var(--shadow)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">Agenda</span>
          </div>
        </div>

        {isLoading ? (
          <div className="rounded-lg border border-dashed border-border bg-surface-2 px-5 py-8 text-center">
            <p className="font-heading text-2xl font-bold text-text">Carregando eventos...</p>
          </div>
        ) : events.length > 0 ? (
          <div className="grid gap-4">
            {events.map(({ date, duration, description, house, name, time }) => (
              <article
                className="grid justify-items-center gap-4 rounded-lg border border-border-soft bg-surface-2 p-4 text-center md:grid-cols-[9rem_1fr] md:justify-items-stretch md:text-left"
                key={`${date}-${time}-${name}`}
              >
                <div className="flex w-full max-w-[12.5rem] flex-col justify-center gap-2 rounded-md bg-bg-soft p-4 text-center text-text-soft md:max-w-none">
                  <span className="text-2xl font-bold">{date}</span>
                  <span className="font-bold text-2xl">{time}</span>
                </div>
                <div className="grid justify-items-center gap-3 md:justify-items-start">
                  <div className="flex flex-col items-center gap-1 md:items-start">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">Casa {house}</span>
                    <h3 className="font-heading text-2xl font-bold text-text">{name}</h3>
                    <p className="text-sm font-semibold text-text">Duração: {formatEventDuration(duration)}</p>
                  </div>
                  <div className="grid gap-2 text-sm font-semibold leading-6 text-text sm:grid-cols-2 md:text-left">
                    <p>
                    {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-surface-2 px-5 py-8 text-center">
            <p className="font-heading text-2xl font-bold text-text">Sem eventos próximos no momento</p>
          </div>
        )}
      </div>
    </section>
  )
}
