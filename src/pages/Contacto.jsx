import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const contactItems = [
  {
    icon:  'fa-school',
    color: 'icon-box-blue',
    title: 'Institución Educativa',
    text:  'Proyecto pedagógico escolar enfocado en la seguridad vial desde los primeros grados.',
  },
  {
    icon:  'fa-envelope',
    color: 'icon-box-green',
    title: 'Correo Electrónico',
    text:  'contacto@movilidadsegura.edu',
    link:  'mailto:contacto@movilidadsegura.edu',
  },
  {
    icon:  'fa-location-dot',
    color: 'icon-box-yellow',
    title: 'Ubicación',
    text:  'Colombia',
  },
  {
    icon:  'fa-clock',
    color: 'icon-box-red',
    title: 'Horario de Atención',
    text:  'Lunes a Viernes · 7:00 am – 4:00 pm',
  },
]

const quickLinks = [
  { to: '/sobre-proyecto', icon: 'fa-book-open',    label: 'Conocer el proyecto'    },
  { to: '/cartillas',      icon: 'fa-book',         label: 'Descargar cartillas'    },
  { to: '/actividades',    icon: 'fa-calendar-days',label: 'Ver actividades'        },
  { to: '/galeria',        icon: 'fa-camera',       label: 'Ver galería'            },
]

export default function Contacto() {
  return (
    <>
      <PageHero
        badge="Comunicación"
        badgeIcon="fa-envelope"
        title="Contacto"
        description="Si deseas obtener más información sobre el proyecto Movilidad Segura, tienes preguntas
                     o quieres colaborar, puedes comunicarte con nosotros."
        breadcrumb="Contacto"
      />

      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact info */}
            <FadeIn>
              <span className="badge-blue mb-4 inline-flex">
                <i className="fa-solid fa-circle-info" /> Información
              </span>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-3">
                Estamos para ayudarte
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                El proyecto Movilidad Segura busca promover una cultura vial responsable en los
                estudiantes mediante actividades educativas y material pedagógico de calidad.
              </p>

              <div className="flex flex-col gap-5">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={item.color}><i className={`fa-solid ${item.icon}`} /></div>
                    <div>
                      <h4 className="font-heading font-semibold text-brand-dark mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-brand-blue hover:underline text-sm"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-slate-500 text-sm">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time alert */}
              <div className="aviso-green mt-8">
                <div className="w-11 h-11 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-check-circle text-brand-green text-lg" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-green-800 mb-1">Respondemos rápido</h4>
                  <p className="text-green-700 text-sm">
                    Intentamos responder todos los mensajes en menos de 48 horas hábiles.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right column: quick links + info card */}
            <FadeIn delay={120} className="flex flex-col gap-6">

              {/* Quick navigation card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">
                <h3 className="font-heading font-bold text-brand-dark text-lg mb-5 flex items-center gap-2">
                  <i className="fa-solid fa-compass text-brand-blue" />
                  Explora el proyecto
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.to}
                      className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50
                                 hover:bg-brand-blue-light hover:border-blue-200 hover:text-brand-blue
                                 transition-all duration-200 text-slate-600 text-sm font-semibold group"
                    >
                      <i className={`fa-solid ${link.icon} text-brand-blue/60 group-hover:text-brand-blue
                                     transition-colors`} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Info banner */}
              <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-2xl p-7 text-white">
                <i className="fa-solid fa-traffic-light text-brand-yellow text-3xl mb-4 block" />
                <h3 className="font-heading font-bold text-xl mb-3">
                  Proyecto Movilidad Segura
                </h3>
                <p className="text-white/75 text-base leading-relaxed mb-5">
                  Un programa pedagógico que busca formar ciudadanos responsables desde los
                  primeros grados escolares, promoviendo la seguridad vial en Colombia.
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { icon: 'fa-check', text: 'Material educativo gratuito'           },
                    { icon: 'fa-check', text: 'Actividades para todas las edades'     },
                    { icon: 'fa-check', text: 'Enfoque pedagógico y práctico'         },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-white/85 text-sm">
                      <i className={`fa-solid ${item.icon} text-brand-yellow`} />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
