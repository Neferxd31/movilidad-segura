import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreProyecto from './pages/SobreProyecto'
import Cartillas from './pages/Cartillas'
import Galeria from './pages/Galeria'
import Actividades from './pages/Actividades'
import Contacto from './pages/Contacto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"                element={<Home />}          />
            <Route path="/sobre-proyecto"  element={<SobreProyecto />} />
            <Route path="/cartillas"       element={<Cartillas />}     />
            <Route path="/galeria"         element={<Galeria />}       />
            <Route path="/actividades"     element={<Actividades />}   />
            <Route path="/contacto"        element={<Contacto />}      />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
