import { IconStarFilled } from '@tabler/icons-react'
import anaPaolaAvatar from '../../assets/reviews/ana-paola.png'
import andreAvatar from '../../assets/reviews/andre.png'
import francoAvatar from '../../assets/reviews/franco.png'
import horivalAvatar from '../../assets/reviews/horival.png'
import humbertoAvatar from '../../assets/reviews/humberto.png'
import joaoGomesAvatar from '../../assets/reviews/joao-gomes.png'
import laraAvatar from '../../assets/reviews/lara.png'
import mariaCarolinaAvatar from '../../assets/reviews/maria-carolina.png'
import marioAvatar from '../../assets/reviews/mario.png'
import renanAvatar from '../../assets/reviews/renan.png'

type GuestReview = {
  guestName: string
  date: string
  quote: string
  avatarUrl: string
}

const guestReviews: GuestReview[] = [
  {
    guestName: 'Renan',
    date: 'Agosto 2026',
    quote:
      'Lindo o lugar! A iluminação natural da casa fazia o despertar especial. Estrutura ótima para a proposta da viagem do nosso grupo.',
    avatarUrl: renanAvatar,
  },
  {
    guestName: 'Humberto',
    date: 'Julho 2026',
    quote:
      'Espaço confortável, reservado, de fácil acesso e com uma arquitetura interessante. Ótima comunicação com a proprietária.',
    avatarUrl: humbertoAvatar,
  },
  {
    guestName: 'Horival',
    date: 'Julho 2026',
    quote:
      'Fizemos passeio em família e a residência nos atendeu muito bem. Check-in organizado, casa limpa e muito bem guarnecida.',
    avatarUrl: horivalAvatar,
  },
  {
    guestName: 'Andre',
    date: 'Julho 2026',
    quote:
      'Nossa estadia foi excelente e recomendamos a casa. A anfitriã foi sempre muito educada, atenciosa e prestativa.',
    avatarUrl: andreAvatar,
  },
  {
    guestName: 'Maria Carolina',
    date: 'Julho 2026',
    quote:
      'A estadia foi excelente, aproveitamos muito a chapada! A casa é super confortável, limpa e bonita.',
    avatarUrl: mariaCarolinaAvatar,
  },
  {
    guestName: 'Lara',
    date: 'Julho 2026',
    quote:
      'Nossa experiência foi excelente! Tudo estava de acordo com o anúncio. Casa perfeita, vista linda e todas as comodidades.',
    avatarUrl: laraAvatar,
  },
  {
    guestName: 'João Gomes',
    date: 'Julho 2026',
    quote:
      'Nas nove diárias nos sentimos muito bem acolhidos, em um estúdio transado, bem decorado e aconchegante.',
    avatarUrl: joaoGomesAvatar,
  },
  {
    guestName: 'Ana Paola',
    date: 'Julho 2026',
    quote:
      'Gostaria de agradecer à Carla. Desde a reserva até o último dia, se mostrou preocupada, atenciosa e prestativa.',
    avatarUrl: anaPaolaAvatar,
  },
  {
    guestName: 'Franco',
    date: 'Março 2026',
    quote:
      'Apartamento impecável, aconchegante e bonito! Condomínio ótimo, bem seguro e com a praticidade do mercadinho 24h.',
    avatarUrl: francoAvatar,
  },
  {
    guestName: 'Mario',
    date: 'Março 2026',
    quote:
      'Estadia muito boa! A anfitriã foi muito atenciosa e disponível para dúvidas, nos auxiliando na estadia com uma bebê.',
    avatarUrl: marioAvatar,
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
