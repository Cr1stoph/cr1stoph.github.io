import { useEffect } from 'react'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChartIcon,
  CheckIcon,
  CodeIcon,
  DownloadIcon,
  GithubIcon,
  InstagramIcon,
  LayersIcon,
  MailIcon,
  PhoneIcon,
  ServerIcon,
  TerminalIcon,
  WrenchIcon,
} from '../components/icons.jsx'
import {
  contactLinks,
  experience,
  focusAreas,
  heroStack,
  profile,
  projects,
  skillGroups,
} from '../data/portfolio.js'

const icons = {
  chart: ChartIcon,
  code: CodeIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  layers: LayersIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  server: ServerIcon,
  terminal: TerminalIcon,
  wrench: WrenchIcon,
}

function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden print:pt-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 opacity-60 dark:opacity-40" />
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute top-24 right-0 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-500/25 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="size-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
            {profile.role}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {profile.firstName}{' '}
            <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
              {profile.lastName}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl dark:text-slate-400">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-white dark:text-slate-900 dark:shadow-black/20 dark:hover:bg-slate-200"
            >
              Ver proyectos
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-slate-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
            >
              Contacto
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-400 dark:hover:text-white"
            >
              <DownloadIcon className="size-4" />
              Descargar CV
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 print:hidden dark:text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Stack
            </span>
            {heroStack.map((tech, index) => (
              <span key={tech} className="inline-flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="size-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                )}
                <span className="font-medium">{tech}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms] print:hidden">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-linear-to-br from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
              <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/80">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-red-400" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-amber-400" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  perfil.js
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-700 sm:text-sm dark:text-slate-300">
                <code>
                  <span className="text-violet-600 dark:text-violet-400">const</span>{' '}
                  <span className="text-sky-600 dark:text-sky-400">cristopher</span>{' '}
                  <span className="text-slate-400 dark:text-slate-500">=</span> {'{'}
                  {'\n  '}
                  <span className="text-emerald-700 dark:text-emerald-400">rol</span>
                  <span className="text-slate-400 dark:text-slate-500">:</span>{' '}
                  <span className="text-amber-700 dark:text-amber-300">'Desarrollador Web'</span>
                  <span className="text-slate-400 dark:text-slate-500">,</span>
                  {'\n  '}
                  <span className="text-emerald-700 dark:text-emerald-400">stack</span>
                  <span className="text-slate-400 dark:text-slate-500">:</span> [
                  <span className="text-amber-700 dark:text-amber-300">'Python'</span>
                  <span className="text-slate-400 dark:text-slate-500">, </span>
                  <span className="text-amber-700 dark:text-amber-300">'Java'</span>
                  <span className="text-slate-400 dark:text-slate-500">, </span>
                  <span className="text-amber-700 dark:text-amber-300">'Spring Boot'</span>],
                  {'\n  '}
                  <span className="text-emerald-700 dark:text-emerald-400">enfoque</span>
                  <span className="text-slate-400 dark:text-slate-500">:</span>{' '}
                  <span className="text-amber-700 dark:text-amber-300">
                    'Backend, APIs y datos'
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">,</span>
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="sobre-mi-title"
          eyebrow="01 — Sobre mí"
          title="Diseño y código con propósito"
          description={profile.intro}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-4">
            {focusAreas.map((area) => {
              const AreaIcon = icons[area.icon]
              return (
                <div
                  key={area.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/30"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <AreaIcon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{area.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="border-y border-slate-200/70 bg-white/60 py-16 sm:py-20 dark:border-slate-800/70 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experiencia-title"
          eyebrow="02 — Experiencia"
          title="Aprender haciendo, servir escuchando"
          description="Experiencia laboral en atención al cliente y trabajo en equipo, habilidades que hoy aplico al desarrollo de productos."
        />

        <ol className="mt-10 space-y-6">
          {experience.map((job, index) => (
            <li key={`${job.role}-${job.company}`} className="flex gap-4 sm:gap-5">
              <div className="flex flex-col items-center">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/20">
                  <BriefcaseIcon className="size-5" />
                </span>
                {index < experience.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-linear-to-b from-slate-300 to-transparent dark:from-slate-700"
                  />
                )}
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/30">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {job.company}
                  {job.location && (
                    <span className="text-slate-400 dark:text-slate-500"> · {job.location}</span>
                  )}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {job.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      <CheckIcon className="size-3.5 text-emerald-500 dark:text-emerald-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="proyectos-title"
          eyebrow="03 — Proyectos"
          title="Cosas que he construido"
          description="Una selección de proyectos de mi formación y práctica, donde he explorado desde la lógica del backend hasta la visualización de datos."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const ProjectIcon = icons[project.icon]
            return (
              <article
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/40"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 font-mono text-xs text-slate-300 dark:text-slate-700"
                >
                  0{index + 1}
                </span>

                <span className="grid size-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500/20">
                  <ProjectIcon className="size-5" />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/70 dark:bg-slate-800/60 dark:text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
        >
          <GithubIcon className="size-4" />
          Ver más en GitHub
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">(abre en una nueva pestaña)</span>
        </a>
      </div>
    </section>
  )
}

function Technologies() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-title"
      className="border-y border-slate-200/70 bg-white/60 py-16 sm:py-20 dark:border-slate-800/70 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="tecnologias-title"
          eyebrow="04 — Tecnologías"
          title="Herramientas con las que trabajo"
          description="Tecnologías que he utilizado en proyectos y en el desarrollo de este portafolio. Siempre con espacio para seguir aprendiendo."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = icons[group.icon]
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/30"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <GroupIcon className="size-5" />
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/60 dark:text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/15" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                05 — Contacto
              </p>
              <h2
                id="contacto-title"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
              >
                ¿Conversamos sobre tu próximo proyecto?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Si tienes una idea, una colaboración o una oportunidad en mente, puedes escribirme.
                Estaré encantado de escucharte.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const LinkIcon = icons[link.icon]
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 transition hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-700/80 dark:bg-slate-950/40 dark:hover:border-indigo-500/40"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <LinkIcon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                          {link.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                          {link.value}
                        </span>
                      </span>
                      <ArrowUpRightIcon className="size-4 shrink-0 text-slate-300 transition group-hover:text-indigo-500 dark:text-slate-600 dark:group-hover:text-indigo-400" />
                      {link.external && (
                        <span className="sr-only">(abre en una nueva pestaña)</span>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Main() {
  // Al imprimir se fuerza el tema claro para que el CV se vea legible en papel
  // o PDF, incluso si la persona está usando el modo oscuro.
  useEffect(() => {
    const root = document.documentElement

    const handleBeforePrint = () => {
      if (!root.classList.contains('dark')) return
      root.dataset.printWasDark = 'true'
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }

    const handleAfterPrint = () => {
      if (root.dataset.printWasDark !== 'true') return
      delete root.dataset.printWasDark
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    }

    window.addEventListener('beforeprint', handleBeforePrint)
    window.addEventListener('afterprint', handleAfterPrint)

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint)
      window.removeEventListener('afterprint', handleAfterPrint)
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
    </>
  )
}

export default Main
