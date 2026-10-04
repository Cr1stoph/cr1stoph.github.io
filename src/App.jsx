import { useState } from 'react' // observador
import heroImg from './assets/hero.png' // variables que guardan constante
import reactLogo from './assets/react.svg' // Guardar una ruta de imagen en una variable para poder usarla en el componente
import viteLogo from './assets/vite.svg' 
import './App.css' // se comporta diferente que otro css, uso de & lo que lo hace anidado, ccs cascada, distinto de index.css
import Footer from './core/Footer.jsx' // importacion de componente Footer
import Header from './core/Header.jsx' // importacion de componente Header
import Main from './core/Main.jsx' // importacion de componente Main

function App() {
  const [count, setCount] = useState(0)
//<!-- etiqueta anonima, no genera un nodo en el DOM, sirve para agrupar elementos, html que se compila, para tag div se usa clasName -->
  return (
    <> 
      <Header />
      <Main />
    
      <Footer />
    </>
  )
}

export default App
