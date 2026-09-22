import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/',               label: 'Inicio'      },
  { to: '/sobre-proyecto', label: 'El Proyecto' },
  { to: '/cartillas',      label: 'Cartillas'   },
  { to: '/galeria',        label: 'Galería'     },
  { to: '/actividades',    label: 'Actividades' },
]

const contactInfo = [
  { icon: 'fa-school',       text: 'Institución Educativa Colegio General Santander' },
  { icon: 'fa-envelope',     text: 'contacto@movilidadsegura.edu'     },
  { icon: 'fa-location-dot', text: 'Colombia'                         },
  { icon: 'fa-clock',        text: 'Lunes – Viernes · 7 am – 4 pm'   },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <img src="/img/logo.png" alt="Movilidad Segura" className="h-16 w-auto" />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed">
              Proyecto educativo orientado a fortalecer la cultura vial y la seguridad
              en la movilidad de los estudiantes desde los primeros grados escolares.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h5 className="font-heading font-semibold uppercase tracking-widest text-xs text-white/50 mb-5">
              Secciones
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group flex items-center gap-2 text-white/60 hover:text-white text-sm
                               transition-all duration-200 hover:translate-x-1"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] text-brand-yellow
                                  transition-transform duration-200 group-hover:translate-x-0.5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading font-semibold uppercase tracking-widest text-xs text-white/50 mb-5">
              Contacto
            </h5>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                  <i className={`fa-solid ${item.icon} text-brand-yellow w-4 text-center`} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex items-center justify-center gap-2 text-white/35 text-xs">
          <i className="fa-solid fa-traffic-light text-brand-yellow" />
          <span>© 2026 Proyecto Movilidad Segura &nbsp;·&nbsp; Institución Educativa Colegio General Santander</span>
        </div>
      </div>
    </footer>
  )
}
