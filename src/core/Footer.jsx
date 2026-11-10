import {
  ArrowUpIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
} from '../components/icons.jsx'
import { profile } from '../data/portfolio.js'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white/60 print:hidden dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 text-[11px] font-bold text-white shadow-md shadow-indigo-500/20">
            {profile.initials}
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} {profile.name}. Hecho con React y Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Enviar un correo"
            className="grid size-9 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <MailIcon className="size-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (abre en una nueva pestaña)"
            className="grid size-9 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram (abre en una nueva pestaña)"
            className="grid size-9 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <InstagramIcon className="size-4" />
          </a>

          <span aria-hidden="true" className="mx-2 h-5 w-px bg-slate-200 dark:bg-slate-800" />

          <a
            href="#inicio"
            className="group inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            Volver arriba
            <ArrowUpIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
