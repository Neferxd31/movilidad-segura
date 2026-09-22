import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/',               label: 'Inicio',      end: true  },
  { to: '/sobre-proyecto', label: 'El Proyecto', end: false },
  { to: '/cartillas',      label: 'Cartillas',   end: false },
  { to: '/galeria',        label: 'Galería',     end: false },
  { to: '/actividades',    label: 'Actividades', end: false },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      // Porcentaje de la página recorrido hacia abajo
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl' : 'bg-brand-dark'
    }`}>
      {/* Barra de progreso de lectura */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center select-none"
          >
            <img
              src="/img/logo.png"
              alt="Movilidad Segura"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-yellow
                                      origin-center transition-transform duration-300 ${
                                        isActive ? 'scale-x-100' : 'scale-x-0'
                                      }`} />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="ml-2 px-4 py-2 bg-brand-yellow text-brand-dark rounded-lg text-sm font-bold
                         hover:bg-yellow-300 transition-all duration-150 shadow-sm"
            >
              Contacto
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg
                       text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menú"
          >
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-2'  : ''}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-200 ${open ? 'opacity-0'                : ''}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-3 pb-4 flex flex-col gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-blue text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-2.5 bg-brand-yellow text-brand-dark rounded-lg text-sm font-bold text-center"
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
