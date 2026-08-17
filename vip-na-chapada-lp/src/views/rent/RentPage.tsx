import RentCTA from './RentCTA'
import RentEvents from './RentEvents'
import RentHero from './RentHero'
import RentOptions from './RentOptions'

export default function RentPage() {
  return (
    <main className="flex flex-col">
      <RentHero />
      <RentEvents />
      <RentOptions />
      <RentCTA />
    </main>
  )
}
