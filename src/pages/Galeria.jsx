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

const galleryItems = [
  { icon: 'fa-chalkboard-user',  gradient: 'from-blue-600 to-brand-blue',    label: 'Charlas educativas',         desc: 'Sesiones con toda la comunidad escolar' },
  { icon: 'fa-traffic-light',    gradient: 'from-amber-500 to-yellow-400',   label: 'Taller de señales',           desc: 'Construcción y coloreo de señales de tránsito' },
  { icon: 'fa-graduation-cap',   gradient: 'from-brand-green to-green-400',  label: 'Normas de tránsito',          desc: 'Estudiantes aprendiendo las reglas viales' },
  { icon: 'fa-people-group',     gradient: 'from-purple-600 to-purple-400',  label: 'Taller práctico',             desc: 'Actividades grupales y dinámicas educativas' },
  { icon: 'fa-person-walking',   gradient: 'from-brand-red to-red-400',      label: 'Simulacro peatonal',          desc: 'Práctica de cruce correcto en la vía' },
  { icon: 'fa-road',             gradient: 'from-slate-600 to-slate-500',    label: 'Circuito de movilidad',       desc: 'Recreación de vías urbanas en el colegio' },
  { icon: 'fa-palette',          gradient: 'from-pink-500 to-rose-400',      label: 'Concurso de dibujo',          desc: '"Mi Ciudad Segura" — trabajos de los estudiantes' },
  { icon: 'fa-fire-extinguisher',gradient: 'from-orange-600 to-orange-400',  label: 'Prevención de accidentes',    desc: 'Taller con invitados del cuerpo de bomberos' },
  { icon: 'fa-school',           gradient: 'from-teal-600 to-teal-400',      label: 'Proyecto escolar',            desc: 'El proyecto en acción en nuestra institución' },
]

export default function Galeria() {
  return (
    <>
      <PageHero
        badge="Registro Fotográfico"
        badgeIcon="fa-camera"
        title="Galería de Actividades"
        description="Conoce a través de imágenes las actividades, talleres y eventos realizados en el
                     marco del Proyecto Movilidad Segura durante el año escolar."
        breadcrumb="Galería"
      />

      <section className="section bg-slate-50">
        <div className="container">

          {/* Info note */}
          <FadeIn>
            <div className="aviso-blue mb-12">
              <div className="w-11 h-11 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-camera text-brand-blue text-lg" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-brand-dark mb-1">Galería de actividades</h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  Aquí se publicarán las fotografías de todas las actividades realizadas.
                  Las imágenes se irán actualizando durante el año escolar.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl
                                transition-all duration-300 hover:-translate-y-1 cursor-pointer aspect-[4/3]">

                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90
                                   group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Decorative circles */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/10" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10">
                    <i className={`fa-solid ${item.icon} text-4xl mb-4 opacity-90
                                   group-hover:scale-110 transition-transform duration-300`} />
                    <h4 className="font-heading font-bold text-lg text-center mb-1">{item.label}</h4>
                    <p className="text-white/75 text-xs text-center leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm
                                     font-semibold px-4 py-2 rounded-full">
                      <i className="fa-solid fa-expand mr-2" />Ver foto
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Coming soon note */}
          <FadeIn>
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center gap-3 bg-white border border-slate-200
                              rounded-2xl px-10 py-8 shadow-sm">
                <i className="fa-solid fa-images text-3xl text-slate-300" />
                <h3 className="font-heading font-bold text-brand-dark text-lg">
                  Más fotos próximamente
                </h3>
                <p className="text-slate-500 text-sm max-w-sm text-center">
                  La galería se actualizará con fotografías reales de todas las actividades
                  del proyecto durante el año escolar.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
