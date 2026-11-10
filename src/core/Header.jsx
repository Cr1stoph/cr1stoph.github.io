import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '../components/icons.jsx'
import { navItems, profile, sectionIds } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useTheme } from '../hooks/useTheme.js'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const label = isDark ? 'Activar modo claro' : 'Activar modo oscuro'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="relative grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
    >
      <SunIcon className="absolute size-5 transition-all duration-300 dark:rotate-90 dark:scale-0 dark:opacity-0" />
      <MoonIcon className="absolute size-5 rotate-90 scale-0 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </button>
  )
}

function Header() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const linkClasses = (isActive) =>
    isActive
      ? 'rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
      : 'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl print:hidden dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              {profile.firstName} Roa
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              className={linkClasses(activeSection === item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
          >
            <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="animate-fade-in border-t border-slate-200 bg-slate-50 px-4 pt-2 pb-4 md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  className={`block ${linkClasses(activeSection === item.id)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
