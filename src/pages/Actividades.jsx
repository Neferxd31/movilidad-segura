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

const activityTypes = [
  {
    icon:  'fa-microphone-lines',
    color: 'icon-box-blue',
    title: 'Charlas Informativas',
    desc:  'Conferencias con expertos en movilidad y seguridad vial para toda la comunidad escolar.',
  },
  {
    icon:  'fa-hands-holding-child',
    color: 'icon-box-green',
    title: 'Talleres Prácticos',
    desc:  'Actividades donde los estudiantes practican situaciones reales de forma segura y controlada.',
  },
  {
    icon:  'fa-puzzle-piece',
    color: 'icon-box-yellow',
    title: 'Actividades Lúdicas',
    desc:  'Juegos y dinámicas diseñadas para que los más pequeños aprendan de forma divertida.',
  },
  {
    icon:  'fa-trophy',
    color: 'icon-box-red',
    title: 'Eventos Especiales',
    desc:  'Jornadas y campañas de sensibilización en fechas clave del calendario escolar y vial.',
  },
]

const timelineLeft = [
  {
    badge: 'badge-blue', badgeIcon: 'fa-microphone', badgeLabel: 'Charla',
    title: 'Charla de Inicio: Importancia de la Movilidad Segura',
    desc:  'Sesión introductoria para todos los grados de primaria. Presentación del proyecto y sus objetivos a la comunidad escolar. Participaron docentes, estudiantes y directivos.',
    dot:   'bg-brand-blue',
  },
  {
    badge: 'badge-green', badgeIcon: 'fa-hands-holding-child', badgeLabel: 'Taller',
    title: 'Taller de Señales de Tránsito – Grados 1° y 2°',
    desc:  'Actividad práctica donde los estudiantes construyeron y colorearon señales de tránsito, identificando señales preventivas, reglamentarias e informativas.',
    dot:   'bg-brand-green',
  },
  {
    badge: 'badge-yellow', badgeIcon: 'fa-person-walking', badgeLabel: 'Actividad',
    title: 'Simulacro de Cruce Peatonal – Preescolar',
    desc:  'Los niños de preescolar practicaron el cruce correcto de la calle en un circuito montado en el patio del colegio, con semáforo y señales reales.',
    dot:   'bg-brand-yellow',
  },
  {
    badge: 'badge-red', badgeIcon: 'fa-star', badgeLabel: 'Evento',
    title: 'Jornada de Sensibilización Vial',
    desc:  'Campaña especial con participación de toda la institución. Actividades artísticas, exposición de trabajos y mensaje colectivo sobre seguridad vial.',
    dot:   'bg-brand-red',
  },
]

const timelineRight = [
  {
    badge: 'badge-green', badgeIcon: 'fa-bus-school', badgeLabel: 'Taller',
    title: 'Charla de Comportamiento en Bus Escolar – Grado 3°',
    desc:  'Normas de seguridad al abordar y descender del bus escolar. Importancia de permanecer sentado y no distraer al conductor en ningún momento.',
    dot:   'bg-brand-green',
  },
  {
    badge: 'badge-blue', badgeIcon: 'fa-users', badgeLabel: 'Charla',
    title: 'Educación Vial para Padres de Familia',
    desc:  'Sesión de orientación para padres y cuidadores. Recomendaciones para reforzar en casa los hábitos de movilidad segura aprendidos en el colegio.',
    dot:   'bg-brand-blue',
  },
  {
    badge: 'badge-yellow', badgeIcon: 'fa-palette', badgeLabel: 'Actividad',
    title: 'Concurso de Dibujo: "Mi Ciudad Segura"',
    desc:  'Los estudiantes plasmaron su visión de una ciudad con movilidad segura. Los mejores trabajos fueron expuestos en el colegio y en esta página web.',
    dot:   'bg-brand-yellow',
  },
  {
    badge: 'badge-green', badgeIcon: 'fa-fire-extinguisher', badgeLabel: 'Taller',
    title: 'Taller de Prevención de Accidentes – Grados 4° y 5°',
    desc:  'Análisis de situaciones de riesgo en las vías, primeros auxilios básicos y la importancia de reportar accidentes. Invitados del cuerpo de bomberos.',
    dot:   'bg-brand-green',
  },
]

const upcoming = [
  {
    cls:  'aviso-blue',
    icon: 'fa-bicycle',
    iconColor: 'text-brand-blue',
    title: 'Charla: Uso seguro de la bicicleta',
    desc:  'Sesión dirigida a estudiantes de 3°, 4° y 5° grado sobre normas para ciclistas y el uso obligatorio del casco protector en las vías.',
  },
  {
    cls:  'aviso-green',
    icon: 'fa-route',
    iconColor: 'text-brand-green',
    title: 'Actividad: Circuito de Movilidad en el Colegio',
    desc:  'Recreación de vías urbanas en las instalaciones del colegio donde los estudiantes practicarán como peatones y ciclistas en situaciones reales.',
  },
  {
    cls:  'aviso-yellow',
    icon: 'fa-flag-checkered',
    iconColor: 'text-amber-600',
    title: 'Evento: Semana de la Movilidad Segura',
    desc:  'Una semana completa de actividades, concursos, exposiciones y charlas especiales en toda la institución educativa con participación familiar.',
  },
]

/* Timeline item component */
function TimelineItem({ item }) {
  return (
    <div className="timeline-line">
      <span className={`timeline-dot ${item.dot}`} />
      <div className="mb-2">
        <span className={`${item.badge} mb-2 inline-flex`}>
          <i className={`fa-solid ${item.badgeIcon}`} /> {item.badgeLabel}
        </span>
      </div>
      <h4 className="font-heading font-bold text-brand-dark mb-2 leading-snug">{item.title}</h4>
      <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
    </div>
  )
}

export default function Actividades() {
  return (
    <>
      <PageHero
        badge="Registro de Eventos"
        badgeIcon="fa-calendar-check"
        title="Charlas y Actividades"
        description="Conoce todas las charlas, talleres y eventos educativos realizados en el marco
                     del Proyecto Movilidad Segura durante el año escolar."
        breadcrumb="Actividades"
      />

      {/* ── ACTIVITY TYPES ─────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="badge-blue mb-3 inline-flex">
                <i className="fa-solid fa-list-check" /> ¿Cómo trabajamos?
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Tipos de Actividades
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                El proyecto combina diferentes estrategias pedagógicas para lograr un aprendizaje
                significativo y duradero en los estudiantes.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityTypes.map((a, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="card text-center">
                  <div className={`${a.color} mx-auto`}><i className={`fa-solid ${a.icon}`} /></div>
                  <h4 className="font-heading font-bold text-brand-dark text-lg mb-2">{a.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────── */}
      <section className="section bg-slate-50">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <span className="badge-green mb-3 inline-flex">
                <i className="fa-solid fa-clock-rotate-left" /> Registro
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Actividades Realizadas
              </h2>
              <p className="text-slate-500 max-w-2xl leading-relaxed">
                Registro cronológico de todas las actividades desarrolladas en el proyecto
                durante el año escolar.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
            <FadeIn>
              <div>
                {timelineLeft.map((item, i) => (
                  <TimelineItem key={i} item={item} />
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div>
                {timelineRight.map((item, i) => (
                  <TimelineItem key={i} item={item} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── UPCOMING ───────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn>
            <div className="mb-10">
              <span className="badge-yellow mb-3 inline-flex">
                <i className="fa-solid fa-calendar-plus" /> Próximamente
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Actividades Programadas
              </h2>
              <p className="text-slate-500 max-w-2xl leading-relaxed">
                Estas son las próximas actividades que se desarrollarán en el marco del proyecto
                durante el año escolar.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {upcoming.map((u, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={u.cls}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                                  bg-white/70 shadow-sm">
                    <i className={`fa-solid ${u.icon} text-lg ${u.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-brand-dark mb-1">{u.title}</h4>
                    <p className="text-slate-600 text-base leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
