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

const objectives = [
  {
    icon:  'fa-graduation-cap',
    color: 'icon-box-blue',
    title: 'Objetivo General',
    desc:  'Promover la formación de estudiantes responsables y conscientes de las normas de tránsito para fortalecer la seguridad vial.',
  },
  {
    icon:  'fa-brain',
    color: 'icon-box-green',
    title: 'Conocimiento Vial',
    desc:  'Que los estudiantes identifiquen señales de tránsito, normas peatonales y comportamientos seguros en la vía.',
  },
  {
    icon:  'fa-people-group',
    color: 'icon-box-yellow',
    title: 'Cultura Ciudadana',
    desc:  'Fomentar el respeto por peatones, ciclistas, conductores y todos los actores del sistema vial.',
  },
  {
    icon:  'fa-shield-halved',
    color: 'icon-box-red',
    title: 'Prevención de Accidentes',
    desc:  'Reducir los riesgos de accidentes mediante el conocimiento y aplicación de normas de tránsito.',
  },
  {
    icon:  'fa-house',
    color: 'icon-box-blue',
    title: 'Participación Familiar',
    desc:  'Involucrar a padres y cuidadores en la formación de hábitos de movilidad segura fuera del colegio.',
  },
  {
    icon:  'fa-book',
    color: 'icon-box-green',
    title: 'Material Pedagógico',
    desc:  'Utilizar cartillas educativas adaptadas a cada grado para facilitar el aprendizaje de manera didáctica.',
  },
]

const programItems = [
  { icon: 'fa-school',           text: 'Implementado desde preescolar hasta quinto grado.' },
  { icon: 'fa-book-open',        text: 'Uso de cartillas pedagógicas adaptadas a cada nivel.' },
  { icon: 'fa-chalkboard-user',  text: 'Actividades pedagógicas y formación en aula.'        },
  { icon: 'fa-person-walking',   text: 'Simulacros y prácticas en el patio del colegio.'     },
  { icon: 'fa-handshake',        text: 'Apoyo de instituciones y la comunidad educativa.'    },
]

export default function SobreProyecto() {
  return (
    <>
      <PageHero
        badge="Proyecto Pedagógico"
        badgeIcon="fa-book-open"
        title="Sobre el Proyecto"
        description="Conoce el origen, los objetivos y la importancia del programa educativo de movilidad
                     segura desarrollado para fortalecer la cultura vial en la comunidad escolar."
        breadcrumb="El Proyecto"
      />

      {/* ── PRESENTATION ───────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <FadeIn>
              <span className="badge-blue mb-4 inline-flex">
                <i className="fa-solid fa-circle-question" /> ¿Qué es?
              </span>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-5">
                Proyecto Movilidad Segura
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  El <strong className="text-brand-dark">Proyecto Movilidad Segura</strong> es una
                  estrategia pedagógica que busca fortalecer la educación vial en estudiantes desde
                  los primeros niveles escolares, promoviendo comportamientos responsables en la vía.
                </p>
                <p>
                  A través de cartillas educativas, actividades pedagógicas y procesos de
                  sensibilización, los estudiantes aprenden normas básicas de tránsito, respeto por
                  la vida y el cuidado de todos los actores viales.
                </p>
                <p>
                  El proyecto está alineado con los programas de educación vial escolar y busca
                  formar ciudadanos responsables capaces de contribuir a una movilidad segura en
                  su comunidad.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={120} className="flex flex-col gap-5">
              {/* Info card */}
              <div className="bg-brand-blue-light border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
                <div className="icon-box-blue flex-shrink-0">
                  <i className="fa-solid fa-traffic-light" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-lg mb-1">
                    Educación desde la infancia
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Los hábitos de movilidad responsable se forman desde edades tempranas.
                    Por ello el proyecto se implementa desde preescolar hasta primaria.
                  </p>
                </div>
              </div>

              {/* Alert */}
              <div className="aviso-yellow">
                <div className="icon-box-yellow flex-shrink-0 w-10 h-10 text-lg">
                  <i className="fa-solid fa-lightbulb" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-amber-800 mb-1">Educación preventiva</h4>
                  <p className="text-amber-700 text-base leading-relaxed">
                    La educación vial temprana permite reducir riesgos y crear una cultura de
                    respeto en las vías desde la niñez.
                  </p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: '5+', label: 'Grados',    color: 'text-brand-blue'  },
                  { n: '4',  label: 'Cartillas', color: 'text-brand-green' },
                  { n: '8+', label: 'Actividades',color: 'text-brand-red'  },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className={`text-2xl font-heading font-bold ${s.color}`}>{s.n}</div>
                    <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ─────────────────────────────────── */}
      <section className="section bg-slate-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="badge-green mb-3 inline-flex">
                <i className="fa-solid fa-bullseye" /> Objetivos
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                ¿Qué buscamos lograr?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                El proyecto busca desarrollar conocimientos, valores y comportamientos que
                contribuyan a una movilidad segura en toda la comunidad.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="card h-full">
                  <div className={obj.color}><i className={`fa-solid ${obj.icon}`} /></div>
                  <h4 className="font-heading font-bold text-brand-dark text-lg mb-2">{obj.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{obj.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANCE ─────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn>
            <span className="badge-red mb-4 inline-flex">
              <i className="fa-solid fa-circle-exclamation" /> Importancia
            </span>
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-10">
              ¿Por qué es importante la educación vial?
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <FadeIn className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Los accidentes de tránsito representan una de las principales causas de lesiones
                en niños y jóvenes. La educación vial permite prevenir riesgos y fomentar conductas
                responsables.
              </p>
              <p>
                Cuando los estudiantes aprenden normas de tránsito, se convierten en agentes de
                cambio dentro de sus familias y comunidades.
              </p>
              <p>
                La educación vial no solo salva vidas, también promueve una convivencia segura y
                responsable en la vía pública.
              </p>

              <div className="space-y-3 mt-6">
                <div className="aviso-red">
                  <div className="w-10 h-10 rounded-xl bg-brand-red-light flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-triangle-exclamation text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-red-800 mb-1">Prevención</h4>
                    <p className="text-red-700 text-sm">
                      Con educación y conciencia vial se pueden evitar muchos accidentes que
                      afectan a nuestra comunidad.
                    </p>
                  </div>
                </div>
                <div className="aviso-green">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check-circle text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-green-800 mb-1">Educación que salva vidas</h4>
                    <p className="text-green-700 text-sm">
                      La formación vial escolar es una herramienta fundamental para la seguridad
                      de todos los actores viales.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-2xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-clipboard-list text-brand-yellow" />
                  Aplicación del Programa
                </h3>
                <ul className="space-y-4">
                  {programItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/85 text-sm">
                      <i className={`fa-solid ${item.icon} text-brand-yellow mt-0.5 w-5 text-center`} />
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <Link to="/cartillas" className="btn-yellow w-full justify-center">
                    <i className="fa-solid fa-book-open" /> Ver cartillas educativas
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
