export const profile = {
  name: 'Cristopher Roa Medel',
  firstName: 'Cristopher',
  lastName: 'Roa Medel',
  initials: 'CR',
  role: 'Desarrollador Web',
  headline: 'Convierto ideas en experiencias web claras, útiles y cuidadas.',
  intro:
    'Soy Cristopher, desarrollador web apasionado por combinar diseño y funcionalidad. Disfruto construir soluciones ordenadas, accesibles y fáciles de mantener.',
  bio: [
    'Hola, soy Cristopher. Disfruto crear experiencias digitales que se sientan naturales: interfaces cuidadas, código claro y soluciones que resuelven problemas reales.',
    'A lo largo de mi formación he trabajado en proyectos que van desde menús interactivos por terminal y APIs de deportes hasta gráficos para analizar datos. Esa variedad me ayudó a entender el desarrollo como un todo, desde la lógica del servidor hasta la experiencia final.',
    'Además, mi experiencia en atención al cliente me enseñó a escuchar, comunicar y resolver problemas con calma, algo que aplico tanto al trabajo en equipo como al diseñar productos para las personas.',
  ],
  email: 'cr.roam@duocuc.cl',
  phone: {
    display: '+56 9 6453 2145',
    href: 'tel:+56964532145',
  },
  github: 'https://github.com/Cr1stoph',
  instagram: 'https://www.instagram.com/cr1st.0ph/',
}

export const navItems = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'contacto', label: 'Contacto' },
]

export const sectionIds = ['inicio', ...navItems.map((item) => item.id)]

export const heroStack = ['Python', 'Java', 'Spring Boot', 'React']

export const focusAreas = [
  {
    title: 'Desarrollo web',
    description:
      'Interfaces claras y responsivas, pensadas para que cada persona encuentre lo que busca sin fricción.',
    icon: 'code',
  },
  {
    title: 'Backend y APIs',
    description:
      'Lógica de servidor y servicios que conectan datos y aplicaciones de forma ordenada y mantenible.',
    icon: 'server',
  },
  {
    title: 'Datos y visualización',
    description:
      'Gráficos y herramientas que transforman la información en decisiones fáciles de comprender.',
    icon: 'chart',
  },
]

export const experience = [
  {
    role: 'Garzón',
    company: 'Hotel & Spa',
    location: 'Pirque, Chile',
    description:
      'Atención directa a los huéspedes en un entorno de servicio premium, cuidando los detalles y manteniendo una experiencia amable y eficiente.',
    highlights: ['Atención al cliente', 'Servicio en sala', 'Trabajo en equipo'],
  },
  {
    role: 'Vendedor multifuncional',
    company: 'Mall',
    description:
      'Trabajo polifuncional en tienda: desde la atención al público y la caja hasta la reposición y la recepción de clientes.',
    highlights: [
      'Atención al cliente',
      'Apertura y cierre de caja',
      'Reponedor',
      'Anfitrión',
    ],
  },
]

export const projects = [
  {
    title: 'Menús interactivos por terminal',
    description:
      'Interfaces de consola con menús navegables para ejecutar distintas acciones desde la terminal, poniendo en práctica lógica, validación y estructura de código.',
    tags: ['Python', 'CLI'],
    icon: 'terminal',
  },
  {
    title: 'API de deportes',
    description:
      'Programación backend para una API de deportes, conectando la lógica del servidor con los datos que consume la aplicación.',
    tags: ['Java', 'Spring Boot', 'Backend'],
    icon: 'server',
  },
  {
    title: 'Gráficos para análisis de datos',
    description:
      'Visualización de datos mediante gráficos que permiten interpretar tendencias y comunicar resultados de forma clara.',
    tags: ['Python', 'Análisis de datos'],
    icon: 'chart',
  },
]

export const skillGroups = [
  {
    title: 'Lenguajes',
    icon: 'code',
    items: ['Python', 'Java', 'HTML'],
  },
  {
    title: 'Frameworks y librerías',
    icon: 'layers',
    items: ['Spring Boot', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Herramientas',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'APIs REST'],
  },
]

export const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
  {
    id: 'phone',
    label: 'Teléfono',
    value: profile.phone.display,
    href: profile.phone.href,
    icon: 'phone',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Cr1stoph',
    href: profile.github,
    icon: 'github',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@Cr1st.0ph',
    href: profile.instagram,
    icon: 'instagram',
    external: true,
  },
]
