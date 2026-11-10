import Footer from './core/Footer.jsx'
import Header from './core/Header.jsx'
import Main from './core/Main.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:focus:bg-slate-900 dark:focus:text-white"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido" className="flex-1">
        <Main />
      </main>

      <Footer />
    </div>
  )
}

export default App
