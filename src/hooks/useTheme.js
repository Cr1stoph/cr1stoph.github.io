import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function getStoredTheme() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function getSystemTheme() {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  // El script inline de index.html ya aplicó el tema antes del primer render,
  // así que partimos desde el DOM para evitar un parpadeo de colores.
  if (document.documentElement.classList.contains('dark')) return 'dark'
  return getStoredTheme() ?? getSystemTheme()
}

function applyTheme(theme) {
  const isDark = theme === 'dark'
  const root = document.documentElement

  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'

  const themeColor = document.getElementById('theme-color')
  if (themeColor) {
    themeColor.setAttribute('content', isDark ? '#020617' : '#f8fafc')
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_QUERY)

    const handleChange = (event) => {
      // Si la persona eligió un tema manualmente, se respeta esa elección.
      if (getStoredTheme()) return
      setTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme)
    } catch {
      // El navegador puede bloquear localStorage; el tema sigue funcionando sin persistir.
    }

    setTheme(nextTheme)
  }, [theme])

  return { theme, toggleTheme }
}
