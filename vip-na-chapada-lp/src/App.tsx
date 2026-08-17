import { BrowserRouter, Route, Routes } from 'react-router'
import Shell from './Shell'
import ContactPage from './views/contact/ContactPage'
import RentPage from './views/rent/RentPage'
import SalesPage from './views/sales/SalesPage'
import HomePage from './views/homepage/HomePage'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aluguel" element={<RentPage />} />
          <Route path="/vendas" element={<SalesPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
