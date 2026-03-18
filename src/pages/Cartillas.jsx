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

const cartillas = [
  {
    id:       'preescolar',
    badge:    'Preescolar',
    badgeClass:'badge-blue',
    icon:     'fa-child',
    gradient: 'from-brand-blue to-blue-400',
    title:    'Movilidad Segura – Preescolar',
    desc:     'Esta cartilla introduce a los estudiantes de preescolar en los conceptos básicos de la seguridad vial. A través de actividades didácticas y material ilustrado, los niños comienzan a reconocer las señales más importantes y aprenden comportamientos seguros al caminar por la calle.',
    topics: [
      'Reconocimiento del semáforo',
      'Colores del semáforo',
      'Importancia de caminar con un adulto',
      'Normas básicas al cruzar la calle',
      'Actividades de dibujo y observación',
    ],
    pdf: '/pdf/1 CARTILLA PREESCOLAR MOVILIDAD SEGURA (1).pdf',
  },
  {
    id:       'primero',
    badge:    'Grado Primero',
    badgeClass:'badge-green',
    icon:     'fa-traffic-light',
    gradient: 'from-brand-green to-green-400',
    title:    'Movilidad Segura – Grado Primero',
    desc:     'Los estudiantes comienzan a identificar las señales de tránsito y comprender su significado. También aprenden normas básicas para comportarse de manera segura como peatones en el entorno urbano.',
    topics: [
      'Señales básicas de tránsito',
      'Normas para peatones',
      'Comportamiento en zonas escolares',
      'Uso seguro del transporte escolar',
      'Actividades de aprendizaje',
    ],
    pdf: '/pdf/CARTILLA GRADO PRIMERO MOVILIDAD SEGURA (1).pdf',
  },
  {
    id:       'segundo-tercero',
    badge:    'Grados Segundo y Tercero',
    badgeClass:'badge-yellow',
    icon:     'fa-person-walking',
    gradient: 'from-amber-500 to-yellow-400',
    title:    'Movilidad Segura – Grados 2° y 3°',
    desc:     'Los estudiantes profundizan en el conocimiento de las normas de tránsito y desarrollan hábitos responsables al desplazarse por la vía pública, reforzando su rol como ciudadanos activos.',
    topics: [
      'Normas de seguridad para peatones',
      'Uso de andenes y zonas seguras',
      'Pasos peatonales',
      'Reconocimiento avanzado de señales',
      'Responsabilidad ciudadana en la vía',
    ],
    pdf: '/pdf/CARTILLA 2 y 3  MOVILIDAD SEGURA (1).pdf',
  },
  {
    id:       'cuarto-quinto',
    badge:    'Grados Cuarto y Quinto',
    badgeClass:'badge-red',
    icon:     'fa-road',
    gradient: 'from-brand-red to-red-400',
    title:    'Movilidad Segura – Grados 4° y 5°',
    desc:     'Los estudiantes comprenden la importancia de la cultura vial, la prevención de accidentes y el respeto por las normas de tránsito, preparándose como líderes de seguridad en su entorno.',
    topics: [
      'Normas completas de tránsito',
      'Prevención de accidentes',
      'Responsabilidad vial avanzada',
      'Respeto por las señales y actores',
      'Cultura vial y ciudadanía',
    ],
    pdf: '/pdf/1 CARTILLA 4 y 5  MOVILIDAD SEGURA (1).pdf',
  },
]

export default function Cartillas() {
  return (
    <>
      <PageHero
        badge="Material Educativo"
        badgeIcon="fa-book"
        title="Cartillas Educativas"
        description="Material pedagógico diseñado para enseñar normas de tránsito y promover hábitos de
                     movilidad segura en los estudiantes de cada grado escolar."
        breadcrumb="Cartillas"
      />

      <section className="section bg-slate-50">
        <div className="container">

          {/* Info note */}
          <FadeIn>
            <div className="aviso-blue mb-12">
              <div className="w-11 h-11 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-circle-info text-brand-blue text-lg" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-brand-dark mb-1">¿Cómo usar las cartillas?</h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  Cada cartilla está diseñada según el nivel escolar. Puedes verlas directamente
                  en el navegador o descargarlas en PDF para usarlas en clase o en casa.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Cartilla cards */}
          <div className="flex flex-col gap-8">
            {cartillas.map((c, i) => (
              <FadeIn key={c.id} delay={i * 80} id={c.id}>
                <div id={c.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden
                                          hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">

                  {/* Cover */}
                  <div className={`bg-gradient-to-br ${c.gradient} flex flex-col items-center justify-center
                                   p-10 md:w-52 md:flex-shrink-0 text-white min-h-[180px]`}>
                    <i className={`fa-solid ${c.icon} text-5xl mb-3 opacity-90`} />
                    <span className="text-sm font-semibold text-white/80 text-center font-heading uppercase tracking-wide">
                      Cartilla Movilidad Segura
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex-1">
                    <span className={`${c.badgeClass} mb-3 inline-flex`}>{c.badge}</span>
                    <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3">{c.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed mb-6">{c.desc}</p>

                    <div className="mb-6">
                      <h5 className="font-heading font-semibold text-brand-dark text-sm uppercase tracking-wider mb-3">
                        Temas que incluye
                      </h5>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {c.topics.map((topic, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                            <i className="fa-solid fa-check text-brand-green flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={c.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-blue"
                      >
                        <i className="fa-solid fa-eye" /> Ver PDF
                      </a>
                      <a
                        href={c.pdf}
                        download
                        className="btn-green"
                      >
                        <i className="fa-solid fa-download" /> Descargar
                      </a>
                    </div>
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
