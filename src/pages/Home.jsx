import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

/* ─── Fade-in wrapper ──────────────────────────────────── */
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

/* ─── Stats data ───────────────────────────────────────── */
const stats = [
  { number: '5+',   label: 'Grados Escolares',      icon: 'fa-school'         },
  { number: '4',    label: 'Cartillas Educativas',   icon: 'fa-book-open'      },
  { number: '8+',   label: 'Actividades Realizadas', icon: 'fa-calendar-check' },
  { number: '100%', label: 'Compromiso Educativo',   icon: 'fa-heart'          },
]

/* ─── Pillar (traffic light) data ─────────────────────── */
const pillars = [
  {
    color: 'bg-red-500',
    title: 'Conocer las normas',
    desc:  'Señales de tránsito, derechos y deberes del peatón y pasajero.',
  },
  {
    color: 'bg-yellow-400',
    title: 'Reflexionar antes de actuar',
    desc:  'Desarrollar juicio crítico y toma de decisiones seguras en la vía.',
  },
  {
    color: 'bg-green-500',
    title: 'Actuar con responsabilidad',
    desc:  'Consolidar hábitos de movilidad segura y respetuosa.',
  },
]

/* ─── Intro cards ──────────────────────────────────────── */
const introCards = [
  {
    num:   '01',
    icon:  'fa-traffic-light',
    color: 'icon-box-blue',
    border:'border-t-brand-blue',
    title: 'Educación Vial',
    desc:  'Los estudiantes aprenden normas de tránsito, el significado de las señales y el comportamiento adecuado como peatones.',
    items: ['Señales de tránsito', 'Derechos del peatón', 'Cruces seguros'],
  },
  {
    num:   '02',
    icon:  'fa-children',
    color: 'icon-box-green',
    border:'border-t-brand-green',
    title: 'Formación desde pequeños',
    desc:  'El proyecto se desarrolla desde los primeros grados escolares, fortaleciendo la cultura vial desde la infancia.',
    items: ['Preescolar y primaria', 'Juego y simulación', 'Hábitos tempranos'],
  },
  {
    num:   '03',
    icon:  'fa-road',
    color: 'icon-box-yellow',
    border:'border-t-brand-yellow',
    title: 'Cultura de prevención',
    desc:  'Promovemos el respeto por las normas de tránsito y la prevención de accidentes mediante actividades educativas.',
    items: ['Campañas escolares', 'Talleres prácticos', 'Familia y comunidad'],
  },
]

/* ─── Cartillas preview ────────────────────────────────── */
const cartillas = [
  { icon: 'fa-child',         color: 'icon-box-blue',   label: 'Preescolar',   desc: 'Primer acercamiento al semáforo y normas básicas.' },
  { icon: 'fa-pencil',        color: 'icon-box-green',  label: 'Grado 1°',     desc: 'Reconocimiento de señales y comportamiento peatonal.' },
  { icon: 'fa-school-flag',   color: 'icon-box-yellow', label: 'Grados 2° y 3°', desc: 'Normas viales y responsabilidad en la movilidad.' },
  { icon: 'fa-graduation-cap',color: 'icon-box-red',    label: 'Grados 4° y 5°', desc: 'Comprensión avanzada de la cultura vial.' },
]

/* ─── Activities preview ───────────────────────────────── */
const actividadesPrev = [
  { icon: 'fa-chalkboard-user', color: 'icon-box-blue',   title: 'Charlas Educativas', desc: 'Sesiones pedagógicas sobre normas de tránsito y comportamientos seguros.' },
  { icon: 'fa-people-group',    color: 'icon-box-green',  title: 'Talleres',            desc: 'Actividades didácticas con juegos, dibujos y dinámicas grupales.' },
  { icon: 'fa-person-walking',  color: 'icon-box-yellow', title: 'Simulaciones',        desc: 'Prácticas donde los estudiantes aprenden a cruzar calles y reconocer señales.' },
]

/* ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-dark via-[#12519A] to-brand-blue overflow-hidden">

        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-yellow/10 blur-2xl" />
          {/* Road line decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-yellow/30" />
          <div className="absolute bottom-6 left-0 right-0 flex gap-16 px-16">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-white/15 rounded" />
            ))}
          </div>
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80
                              text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-up">
                <i className="fa-solid fa-school text-brand-yellow" />
                Proyecto Pedagógico Escolar &nbsp;·&nbsp; Educación Vial
              </div>

              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6 animate-fade-up"
                  style={{ animationDelay: '100ms' }}>
                Proyecto<br />
                <span className="text-brand-yellow">Movilidad Segura</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up"
                 style={{ animationDelay: '200ms' }}>
                Un programa educativo que forma estudiantes responsables en el uso de las vías,
                promoviendo hábitos de seguridad, respeto y prudencia en la movilidad diaria.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <Link to="/sobre-proyecto" className="btn-primary">
                  <i className="fa-solid fa-book-open" />
                  Conocer el Proyecto
                </Link>
                <Link to="/cartillas" className="btn-outline">
                  <i className="fa-solid fa-file-pdf" />
                  Ver Cartillas
                </Link>
              </div>
            </div>

            {/* Traffic light visual */}
            <div className="hidden lg:flex justify-center items-center animate-float">
              <div className="relative">
                {/* Light pole */}
                <div className="w-24 bg-slate-700/60 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
                  <div className="flex flex-col gap-4">
                    {[
                      { bg: 'bg-red-500',    shadow: 'shadow-red-500/60',    active: true  },
                      { bg: 'bg-yellow-400', shadow: 'shadow-yellow-400/60', active: false },
                      { bg: 'bg-green-500',  shadow: 'shadow-green-500/60',  active: false },
                    ].map((dot, i) => (
                      <div
                        key={i}
                        className={`w-14 h-14 rounded-full mx-auto ${dot.bg}
                          ${dot.active ? `shadow-lg ${dot.shadow} animate-pulse2` : 'opacity-40'}`}
                      />
                    ))}
                  </div>
                </div>
                {/* Floating tags */}
                <div className="absolute -right-36 top-4 bg-white rounded-xl px-4 py-2.5 shadow-xl text-sm font-semibold text-brand-dark whitespace-nowrap">
                  <i className="fa-solid fa-stop text-red-500 mr-2" />
                  ¡Alto!
                </div>
                <div className="absolute -right-40 top-24 bg-white rounded-xl px-4 py-2.5 shadow-xl text-sm font-semibold text-brand-dark whitespace-nowrap">
                  <i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2" />
                  Precaución
                </div>
                <div className="absolute -right-36 top-44 bg-white rounded-xl px-4 py-2.5 shadow-xl text-sm font-semibold text-brand-dark whitespace-nowrap">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2" />
                  ¡Avanza!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────── */}
      <div className="bg-brand-dark border-y border-white/10">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center py-4 px-6 text-center">
                <i className={`fa-solid ${s.icon} text-brand-yellow text-xl mb-2`} />
                <div className="text-3xl font-heading font-bold text-white">{s.number}</div>
                <div className="text-white/55 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO SECTION ──────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">

          {/* Header + traffic light panel */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

            {/* Text */}
            <FadeIn>
              <span className="badge-blue mb-4 inline-flex">
                <i className="fa-solid fa-circle-info" /> Introducción
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-5 leading-snug">
                Educación para una{' '}
                <span className="text-brand-blue">movilidad segura</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                El proyecto Movilidad Segura tiene como objetivo formar a los estudiantes en
                hábitos y conductas responsables en la vía, fomentando la autonomía,
                la solidaridad y la prudencia al desplazarse.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Educación vial',          color: 'badge-blue'   },
                  { label: 'Desde los primeros grados',color: 'badge-green'  },
                  { label: 'Cultura de prevención',    color: 'badge-yellow' },
                  { label: 'Aplicado en aula',         color: 'badge-blue'   },
                  { label: 'Toda la comunidad',        color: 'badge-green'  },
                ].map((pill, i) => (
                  <span key={i} className={pill.color}>{pill.label}</span>
                ))}
              </div>
            </FadeIn>

            {/* Traffic light pillars */}
            <FadeIn delay={120}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <div className="flex items-center gap-2 text-brand-dark font-heading font-semibold mb-6 text-sm uppercase tracking-wider">
                  <i className="fa-solid fa-traffic-light text-brand-blue" />
                  Pilares del programa
                </div>
                <div className="flex flex-col gap-5">
                  {pillars.map((p, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 shadow-sm ${p.color}`} />
                      <div>
                        <h4 className="font-heading font-semibold text-brand-dark mb-1">{p.title}</h4>
                        <p className="text-slate-500 text-base leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 3 intro cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {introCards.map((card, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="card border-t-4" style={{
                  borderTopColor: card.border.includes('blue')   ? '#1E73BE'
                                : card.border.includes('green')  ? '#28A745'
                                : '#FFC107'
                }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={card.color}><i className={`fa-solid ${card.icon}`} /></div>
                    <span className="text-4xl font-heading font-bold text-slate-100 select-none">{card.num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-brand-dark text-xl mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-base text-slate-600">
                        <i className="fa-solid fa-circle-dot text-[8px] text-brand-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARTILLAS SECTION ──────────────────────────── */}
      <section className="section bg-slate-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="badge-green mb-3 inline-flex">
                <i className="fa-solid fa-book" /> Material Educativo
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Cartillas de Movilidad Segura
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Cartillas educativas diseñadas para cada grado escolar, con actividades didácticas
                que enseñan normas de tránsito y hábitos de seguridad vial.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {cartillas.map((c, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="card text-center">
                  <div className={`${c.color} mx-auto`}><i className={`fa-solid ${c.icon}`} /></div>
                  <h4 className="font-heading font-bold text-brand-dark text-lg mb-2">{c.label}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link to="/cartillas" className="btn-blue">
              <i className="fa-solid fa-arrow-right" /> Ver todas las cartillas
            </Link>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES SECTION ─────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <span className="badge-yellow mb-3 inline-flex">
                <i className="fa-solid fa-calendar-days" /> Actividades
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Actividades del Proyecto
              </h2>
              <p className="text-slate-500 max-w-2xl leading-relaxed">
                Durante el año escolar se desarrollan talleres, charlas, simulaciones y campañas
                educativas que fortalecen el aprendizaje sobre seguridad vial.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {actividadesPrev.map((a, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="card">
                  <div className={a.color}><i className={`fa-solid ${a.icon}`} /></div>
                  <h3 className="font-heading font-bold text-brand-dark text-xl mb-2">{a.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div>
            <Link to="/actividades" className="btn-green">
              <i className="fa-solid fa-arrow-right" /> Ver todas las actividades
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────── */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-blue py-20">
        <FadeIn>
          <div className="container text-center">
            <i className="fa-solid fa-shield-halved text-brand-yellow text-5xl mb-6 block" />
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              ¿Tienes preguntas sobre el proyecto?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Contáctanos para más información sobre el programa de educación vial escolar.
            </p>
            <Link to="/contacto" className="btn-yellow">
              <i className="fa-solid fa-envelope" /> Contáctanos
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
