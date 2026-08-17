import SalesCTA from './SalesCTA'
import SalesHero from './SalesHero'
import SalesOptions from './SalesOptions'

export default function SalesPage() {
  return (
    <main className="flex flex-col">
      <SalesHero />
      <SalesOptions />
      <SalesCTA />
    </main>
  )
}
