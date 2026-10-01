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

const timelineLeft = [
  {
    badge: 'badge-blue', badgeIcon: 'fa-microphone', badgeLabel: 'Charla',
    title: 'Charla de Inicio: Importancia de la Movilidad Segura – Grado 6°',
    desc:  'Sesión introductoria con los estudiantes de grado 6°. Presentación del proyecto y sus objetivos a la comunidad escolar. Participaron docentes, estudiantes y directivos.',
    dot:   'bg-brand-blue',
  },
  {
    badge: 'badge-green', badgeIcon: 'fa-hands-holding-child', badgeLabel: 'Taller',
    title: 'Taller de Señales de Tránsito – Grado 6°',
    desc:  'Actividad práctica donde los estudiantes construyeron y colorearon señales de tránsito, identificando señales preventivas, reglamentarias e informativas.',
    dot:   'bg-brand-green',
  },
  {
    badge: 'badge-yellow', badgeIcon: 'fa-person-walking', badgeLabel: 'Actividad',
    title: 'Simulacro de Cruce Peatonal – Colegio General Santander',
    desc:  'Caminata educativa por las calles cercanas al colegio, donde los estudiantes guiaron el cruce de peatones con señales de PARE y SIGA.',
    dot:   'bg-brand-yellow',
  },
]

const timelineRight = [
  {
    badge: 'badge-yellow', badgeIcon: 'fa-palette', badgeLabel: 'Actividad',
    title: 'Concurso de Dibujo: "Mi Ciudad Segura"',
    desc:  'Los estudiantes plasmaron su visión de una ciudad con movilidad segura. Los mejores trabajos fueron expuestos en el colegio y en esta página web.',
    dot:   'bg-brand-yellow',
  },
  {
    badge: 'badge-blue', badgeIcon: 'fa-microphone-lines', badgeLabel: 'Entrevista',
    title: 'Entrevistas a la Comunidad Educativa',
    desc:  'Registro en video de los testimonios de estudiantes y docentes sobre el proyecto y lo aprendido durante las actividades. Las entrevistas están publicadas en la galería.',
    dot:   'bg-brand-blue',
  },
  {
    badge: 'badge-red', badgeIcon: 'fa-gamepad', badgeLabel: 'Actividad lúdica',
    title: 'Juego Interactivo de Movilidad Vial',
    desc:  'Dinámica en el aula con un juego interactivo proyectado en el televisor, donde los estudiantes pusieron a prueba lo aprendido sobre seguridad vial.',
    dot:   'bg-brand-red',
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

    </>
  )
}
