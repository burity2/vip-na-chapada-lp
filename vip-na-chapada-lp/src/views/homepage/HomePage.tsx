import Hero from './Hero'
import Sales from './SalesScroll'
import Rent from './RentScroll'
import About from './AboutMe'
import Guests from './GuestReviews'
import Action from './Action'

export default function HomePage() {
  return (
    <section id="inicio" className='flex flex-col h-full'>
      <Hero />
      <Sales />
      <Rent />
      <About />
      <Guests />
      <Action />
    </section>
  )
}
