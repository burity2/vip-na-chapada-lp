import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconHeart,
  IconMail,
  IconPhone,
  IconStar,
  IconUsers,
  type TablerIcon,
} from '@tabler/icons-react'
import profilePicture from '../../assets/perfil/profile.webp'

type ContactMethod = {
  action: string
  detail: string
  href: string
  icon: TablerIcon
  label?: string
  title: string
  tone: string
}

const contactMethods: ContactMethod[] = [
  {
    action: 'Fale comigo',
    detail: 'Normalmente respondo em poucos minutos',
    href: 'https://wa.me/556199510020',
    icon: IconBrandWhatsapp,
    title: 'WhatsApp',
    tone: 'bg-bg-soft text-primary',
  },
  {
    action: 'Enviar email',
    detail: 'carlaaguiarbsb@gmail.com',
    href: 'mailto:carlaaguiarbsb@gmail.com',
    icon: IconMail,
    title: 'Email',
    tone: 'bg-bg-soft text-primary',
  },
  {
    action: 'Nossa página',
    detail: '@vipnachapada',
    href: 'https://www.instagram.com/vipnachapada/',
    icon: IconBrandInstagram,
    title: 'Instagram',
    tone: 'bg-bg-soft text-primary',
  },
  {
    action: 'Ligar agora',
    detail: 'Disponível diariamente, 9h às 19h',
    href: 'tel:+5500000000000',
    icon: IconPhone,
    title: 'Telefone',
    tone: 'bg-bg-soft text-primary',
  },
]

const hostHighlights = [
  {
    icon: IconHeart,
    text: 'Apaixonada por hospitalidade',
  },
  {
    icon: IconStar,
    text: '200+ avaliações 5 estrelas',
  },
  {
    icon: IconUsers,
    text: 'Sempre por perto para ajudar',
  },
]

function ContactCard({ action, detail, href, icon: Icon, label, title, tone }: ContactMethod) {
  return (
    <article className="grid min-w-0 justify-items-center gap-4 rounded-lg border border-border-soft bg-surface p-5 text-center shadow-md shadow-[var(--shadow)] md:grid-cols-[auto_1fr_auto] md:items-center md:justify-items-stretch md:text-left">
      <div className={`grid size-14 place-items-center rounded-full md:justify-self-start ${tone}`}>
        <Icon aria-hidden="true" size={26} stroke={1.8} />
      </div>
      <div className="flex min-w-0 flex-col items-center gap-2 md:items-start">
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <h2 className="font-heading text-2xl font-bold text-text">{title}</h2>
          {label && (
            <span className="rounded-md bg-accent-soft px-2 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-primary">
              {label}
            </span>
          )}
        </div>
        <p className="max-w-sm text-sm font-semibold leading-6 text-text">
          {title === 'WhatsApp'
            ? 'O jeito mais rápido de tirar dúvidas, conferir disponibilidade e combinar detalhes.'
            : title === 'Email'
              ? 'Envie uma mensagem com calma e eu retorno assim que possível.'
              : title.startsWith('Instagram')
                ? 'Acompanhe novidades, fotos e bastidores das casas.'
                : 'Prefere uma conversa rápida? Me chama e vamos conversar.'}
        </p>
      </div>
      <div className="flex w-full flex-col items-center gap-2 md:w-auto md:items-end">
        <a
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-soft hover:text-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-48"
          href={href}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          <Icon aria-hidden="true" size={18} stroke={1.8} />
          {action}
        </a>
        <span className="text-xs font-semibold text-text-muted">{detail}</span>
      </div>
    </article>
  )
}

export default function ContactPage() {
  return (
    <main className="flex justify-center overflow-x-hidden bg-bg px-6 py-12 text-text sm:px-12 sm:py-16 lg:px-18">
      <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-10 lg:grid-cols-[minmax(0,46rem)_24rem]">
        <section className="flex min-w-0 flex-col gap-8">
          <div className="flex max-w-2xl flex-col gap-3">
            <h1 className="font-heading text-4xl font-bold leading-tight text-text sm:text-5xl">Entre em contato</h1>
            <p className="text-sm font-semibold leading-6 text-text">
              Escolha a melhor forma de falar comigo. Estou aqui para tirar suas dúvidas e ajudar
              você a encontrar a estadia ou imóvel ideal.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {contactMethods.map((method) => (
              <ContactCard key={`${method.title}-${method.detail}`} {...method} />
            ))}
          </div>
        </section>

        <aside className="h-fit min-w-0 rounded-lg border border-border-soft bg-bg-soft px-5 py-8 text-center shadow-md shadow-[var(--shadow)] sm:px-8 sm:py-10">
          <div className="flex flex-col items-center gap-7">
            <h2 className="font-heading text-2xl font-bold text-text">Conheça sua anfitriã</h2>
            <div className="size-44 overflow-hidden rounded-full border-4 border-surface bg-surface-2 shadow-sm shadow-[var(--shadow)]">
              <img
                alt="Foto da anfitriã Carla"
                className="h-full w-full object-cover"
                src={profilePicture}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="font-heading text-3xl italic text-primary">Oi, sou Carla!</p>
              <p className="text-sm font-semibold leading-6 text-text">
                Sou apaixonada por hospitalidade e por criar espaços onde cada hóspede possa
                relaxar, se sentir em casa e aproveitar o melhor da Chapada.
              </p>
              <p className="text-sm font-semibold leading-6 text-text">
                Estou sempre por perto para ajudar sua estadia ou compra a ser tranquila do começo
                ao fim.
              </p>
              <a
                className="mx-auto inline-flex w-full max-w-[16rem] items-center justify-center gap-2 rounded-lg border border-border bg-bg px-4 py-2 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-soft hover:text-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href="https://www.instagram.com/carlaaguiarbsb/"
                rel="noreferrer"
                target="_blank"
              >
                <IconBrandInstagram aria-hidden="true" size={18} stroke={1.8} />
                carlaaguiarbsb
              </a>
            </div>
            <div className="grid gap-4 text-left text-sm font-bold text-text">
              {hostHighlights.map(({ icon: Icon, text }) => (
                <span className="inline-flex items-center gap-3" key={text}>
                  <Icon aria-hidden="true" className="text-primary" size={22} stroke={1.8} />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
