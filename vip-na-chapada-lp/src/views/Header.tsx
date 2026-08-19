import { useState } from 'react'
import { IconMenu2, IconMoonStars, IconSun, IconX } from '@tabler/icons-react'
import { Link, NavLink } from 'react-router'
import logoImage from '../assets/perfil/logo.webp'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { label: 'Início', to: '/' },
  { label: 'Vendas', to: '/vendas' },
  { label: 'Reservas', to: '/aluguel' },
  { label: 'Contato', to: '/contato' },
]

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const themeLabel = isDark ? 'Ativar tema claro' : 'Ativar tema escuro'
  const menuLabel = isMenuOpen ? 'Fechar menu' : 'Abrir menu'
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => (
    `rounded-md px-2 py-1 transition-colors hover:text-accent ${
      isActive ? 'text-accent' : ''
    }`
  )

  return (
    <header className="relative z-50">
      <div className="relative z-50 flex w-full items-center justify-between border-b border-border bg-header-bg px-6 py-4 text-text shadow-sm shadow-[var(--shadow)] transition-colors duration-300 sm:px-12 lg:px-18">
        <div>
          <Link
            className="flex items-center gap-3 font-heading text-base font-bold tracking-[0.08em] text-text transition-colors hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
            to="/"
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-11 w-auto"
              src={logoImage}
              style={{ filter: 'var(--logo-filter)' }}
            />
            <span className="leading-[1.5]">
              VIP NA
              <br />
              CHAPADA
            </span>
          </Link>
        </div>
        <nav className="hidden gap-8 text-sm font-semibold text-text md:flex">
          {navItems.map(({ label, to }) => (
            <NavLink className={navLinkClassName} key={to} to={to}>{label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label={themeLabel}
            className="hidden size-11 place-items-center rounded-full border border-border bg-surface-2 text-text shadow-sm shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:grid"
            onClick={toggleTheme}
            title={themeLabel}
            type="button"
          >
            {isDark ? (
              <IconSun aria-hidden="true" size={22} stroke={1.8} />
            ) : (
              <IconMoonStars aria-hidden="true" size={22} stroke={1.8} />
            )}
          </button>
          <button
            aria-expanded={isMenuOpen}
            aria-label={menuLabel}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface-2 text-text shadow-sm shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            title={menuLabel}
            type="button"
          >
            {isMenuOpen ? (
              <IconX aria-hidden="true" size={22} stroke={1.8} />
            ) : (
              <IconMenu2 aria-hidden="true" size={22} stroke={1.8} />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <>
        <button
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 cursor-default bg-transparent md:hidden"
          onClick={() => setIsMenuOpen(false)}
          type="button"
        />
        <nav className="absolute inset-x-0 top-full z-50 flex flex-col gap-1 border-b border-border bg-header-bg px-6 py-4 text-sm font-bold text-text shadow-lg shadow-[var(--shadow)] md:hidden">
          {navItems.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) => (
                `rounded-lg px-3 py-3 transition-colors hover:bg-surface hover:text-primary ${
                  isActive ? 'bg-surface text-accent' : ''
                }`
              )}
              key={to}
              onClick={() => setIsMenuOpen(false)}
              to={to}
            >
              {label}
            </NavLink>
          ))}
          <button
            aria-label={themeLabel}
            aria-checked={isDark}
            className="mt-2 inline-flex min-h-12 items-center justify-between gap-3 rounded-lg px-3 text-left font-bold text-text transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            onClick={toggleTheme}
            role="switch"
            type="button"
          >
            Tema escuro
            <span
              className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
                isDark ? 'bg-accent' : 'bg-border'
              }`}
            >
              <span
                className={`size-5 rounded-full bg-surface shadow-sm shadow-[var(--shadow)] transition-transform ${
                  isDark ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </span>
          </button>
        </nav>
        </>
      )}
    </header>
  )
}

export default Header
