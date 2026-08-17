import { IconStarFilled } from '@tabler/icons-react'

type GuestReview = {
  guestName: string
  date: string
  quote: string
  avatarUrl: string
}

const guestReviews: GuestReview[] = [
  {
    guestName: 'Mariana S.',
    date: 'Julho 2024',
    quote:
      'A casa é linda, muito limpa e em uma localização perfeita. Nossa estadia foi tranquila do começo ao fim.',
    avatarUrl: 'https://i.pravatar.cc/96?img=47',
  },
  {
    guestName: 'Rafael M.',
    date: 'Junho 2024',
    quote:
      'A Carla foi uma anfitriã incrível. Respondeu rápido, ajudou em tudo e deixou nossa viagem muito mais leve.',
    avatarUrl: 'https://i.pravatar.cc/96?img=12',
  },
  {
    guestName: 'Amanda R.',
    date: 'Maio 2024',
    quote:
      'O lugar é ainda melhor que nas fotos. A vista, o conforto e o cuidado nos detalhes fizeram toda diferença.',
    avatarUrl: 'https://i.pravatar.cc/96?img=32',
  },
  {
    guestName: 'Lucas P.',
    date: 'Abril 2024',
    quote:
      'Perfeito para descansar depois dos passeios. Tudo estava organizado, cheiroso e pronto para receber a gente.',
    avatarUrl: 'https://i.pravatar.cc/96?img=59',
  },
]

function GuestReviewCard({ avatarUrl, date, guestName, quote }: GuestReview) {
  return (
    <article className="flex min-w-[min(19rem,calc(100vw-2rem))] max-w-[min(19rem,calc(100vw-2rem))] snap-start flex-col gap-5 rounded-lg border border-border bg-surface p-5 shadow-sm shadow-[var(--shadow)] sm:min-w-76 sm:max-w-86">
      <div className="flex gap-1 text-accent" aria-label="Avaliação de 5 estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <IconStarFilled key={index} aria-hidden="true" size={20} />
        ))}
      </div>
      <p className="min-h-24 text-sm font-semibold leading-6 text-text">"{quote}"</p>
      <div className="mt-auto flex items-center gap-4">
        <img
          alt={`Foto de ${guestName}`}
          className="size-12 rounded-full object-cover"
          src={avatarUrl}
        />
        <div>
          <p className="text-sm font-bold text-text">{guestName}</p>
          <p className="text-sm font-semibold text-text-muted">{date}</p>
        </div>
      </div>
    </article>
  )
}

export default function Guests() {
  return (
    <section id="depoimentos" className="flex flex-col gap-8 bg-surface px-4 py-12 sm:px-12 lg:px-18">
      <div className="max-w-xl">
        <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">Opinião dos hóspedes</h2>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-12 sm:px-12 lg:-mx-18 lg:px-18 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="flex snap-x snap-mandatory gap-6 ">
          {guestReviews.map((review) => (
            <GuestReviewCard key={`${review.guestName}-${review.date}`} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
