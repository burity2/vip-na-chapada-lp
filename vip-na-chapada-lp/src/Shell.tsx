import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from './views/Footer'
import Header from './views/Header'

function Shell() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      return
    }

    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [hash, pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Shell
