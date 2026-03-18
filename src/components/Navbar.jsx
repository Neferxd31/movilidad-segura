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
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl' : 'bg-brand-dark'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white font-heading font-semibold text-lg tracking-wide select-none"
          >
            <div className="flex flex-col gap-[3px] bg-white/10 rounded-lg px-2 py-1.5 border border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500   shadow-sm block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm block" />
              <span className="w-3 h-3 rounded-full bg-green-500  shadow-sm block" />
            </div>
            <span>Movilidad Segura</span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {l.label}
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
