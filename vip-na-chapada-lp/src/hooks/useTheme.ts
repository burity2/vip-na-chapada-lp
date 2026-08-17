import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'vip-na-chapada-theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function getSystemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme | null {
  const storedTheme = window.localStorage.getItem(STORAGE_KEY)

  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const systemTheme = window.matchMedia(DARK_QUERY)

    function handleSystemThemeChange() {
      if (getStoredTheme() === null) {
        setTheme(getSystemTheme())
      }
    }

    systemTheme.addEventListener('change', handleSystemThemeChange)

    return () => systemTheme.removeEventListener('change', handleSystemThemeChange)
  }, [])

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

      window.localStorage.setItem(STORAGE_KEY, nextTheme)

      return nextTheme
    })
  }

  return {
    isDark: theme === 'dark',
    theme,
    toggleTheme,
  }
}
