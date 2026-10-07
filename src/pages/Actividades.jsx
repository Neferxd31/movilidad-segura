import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'
import GuessTheSign from '../components/games/GuessTheSign'
import TrafficLightGame from '../components/games/TrafficLightGame'
import MemoryGame from '../components/games/MemoryGame'

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

const TIPS = [
  '¡Mira a ambos lados antes de cruzar!',
  'Cruza siempre por la cebra.',
  'Espera el verde del semáforo peatonal.',
  'Camina por el andén, nunca por la calle.',
  'En bicicleta, usa siempre el casco.',
]

const LIGHT_MS = { green: 3200, yellow: 1100, red: 3600 }
const NEXT_LIGHT = { green: 'yellow', yellow: 'red', red: 'green' }

const GAMES = [
  { id: 'senal',    label: 'Adivina la señal',   icon: 'fa-signs-post',    color: 'from-brand-blue to-blue-400',  Game: GuessTheSign },
  { id: 'semaforo', label: 'Semáforo rápido',    icon: 'fa-traffic-light', color: 'from-brand-green to-green-400', Game: TrafficLightGame },
  { id: 'memoria',  label: 'Memoria de señales', icon: 'fa-brain',         color: 'from-pink-500 to-rose-400',    Game: MemoryGame },
]

// Enlaces de YouTube de la institución: se agregan aquí ({ title, url }) cuando los compartan
const videos = []

const PLACEHOLDER_VIDEOS = 3

function youtubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/)
  return match ? match[1] : null
}

/* Calle animada: el carro avanza en verde y se detiene antes de la cebra en rojo */
function StreetScene() {
  const [light, setLight] = useState('red')
  const [cycle, setCycle] = useState(0)
  const [tip, setTip]     = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setLight(NEXT_LIGHT[light])
      if (light === 'red') setCycle(c => c + 1)
    }, LIGHT_MS[light])
    return () => clearTimeout(id)
  }, [light])

  useEffect(() => {
    const id = setInterval(() => setTip(t => (t + 1) % TIPS.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl
                    bg-gradient-to-b from-sky-300 via-sky-100 to-sky-50">
      {/* Cielo */}
      <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-yellow-300
                      shadow-[0_0_50px_rgba(253,224,71,0.9)] animate-pulse2" aria-hidden="true" />
      <i className="fa-solid fa-cloud absolute top-8 left-[30%] text-6xl text-white animate-drift" aria-hidden="true" />
      <i className="fa-solid fa-cloud absolute top-20 left-[55%] text-4xl text-white/90 animate-drift"
         style={{ animationDelay: '-3s' }} aria-hidden="true" />

      {/* Andén y calle */}
      <div className="absolute inset-x-0 bottom-24 h-5 bg-slate-300 border-t-4 border-slate-400" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-slate-700" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-[46px] h-1"
           style={{ background: 'repeating-linear-gradient(90deg, #FFC107 0 30px, transparent 30px 60px)' }}
           aria-hidden="true" />
      <div className="absolute bottom-0 h-24 left-[30%] w-16 md:w-20"
           style={{ background: 'repeating-linear-gradient(90deg, #fff 0 10px, transparent 10px 20px)' }}
           aria-hidden="true" />

      {/* Semáforo vehicular */}
      <div className="absolute bottom-[116px] left-[26%] flex flex-col items-center" aria-hidden="true">
        <div className="bg-slate-900 rounded-xl p-1.5 flex flex-col gap-1.5 shadow-lg">
          {['red', 'yellow', 'green'].map(color => (
            <span
              key={color}
              className={`w-6 h-6 rounded-full transition-all duration-300 ${
                light !== color
                  ? 'bg-slate-700'
                  : { red: 'bg-red-500 shadow-[0_0_14px_#ef4444]',
                      yellow: 'bg-yellow-400 shadow-[0_0_14px_#facc15]',
                      green: 'bg-green-500 shadow-[0_0_14px_#22c55e]' }[color]
              }`}
            />
          ))}
        </div>
        <div className="w-2 h-10 bg-slate-500" />
      </div>

      {/* Carro: llega y espera en rojo, arranca en verde */}
      {light !== 'yellow' && (
        <i
          key={`${light}-${cycle}`}
          className={`fa-solid fa-car-side absolute bottom-[52px] text-4xl md:text-5xl text-brand-red drop-shadow-lg ${
            light === 'green' ? 'animate-drive-away' : 'animate-arrive'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Estudiantes con un consejo que va cambiando */}
      <img
        src="/img/estudiantes.webp"
        alt="Dos estudiantes del colegio"
        className="absolute right-4 md:right-12 bottom-[100px] h-40 md:h-56 w-auto animate-float drop-shadow-xl"
      />
      <div className="absolute top-6 right-[120px] md:right-[180px] max-w-[160px] md:max-w-[220px]">
        <div className="relative bg-white rounded-2xl px-4 py-3 shadow-lg">
          <p key={tip} className="text-brand-dark font-heading font-semibold text-sm md:text-base leading-snug animate-fade-up">
            {TIPS[tip]}
          </p>
          <span className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

export default function Actividades() {
  const [active, setActive] = useState(GAMES[0].id)
  const { Game } = GAMES.find(g => g.id === active)

  return (
    <>
      <PageHero
        badge="Aprende Jugando"
        badgeIcon="fa-gamepad"
        title="Actividades Interactivas"
        description="Juega, aprende y pon a prueba lo que sabes sobre seguridad vial con nuestros juegos
                     y videos educativos."
        breadcrumb="Actividades"
      />

      {/* ── CALLE ANIMADA ──────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn>
            <StreetScene />
          </FadeIn>
        </div>
      </section>

      {/* ── JUEGOS ─────────────────────────────────────── */}
      <section className="section bg-slate-50" id="juegos">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="badge-green mb-3 inline-flex">
                <i className="fa-solid fa-gamepad" /> Juegos
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Juegos de Seguridad Vial
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Elige un juego, responde y suma puntos. ¿Cuál será tu récord?
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {GAMES.map(g => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl text-left font-heading font-bold text-lg
                            transition-all duration-300 ${
                  active === g.id
                    ? `bg-gradient-to-br ${g.color} text-white shadow-lg scale-[1.03]`
                    : 'bg-white text-brand-dark border border-slate-200 hover:border-brand-blue/40 hover:-translate-y-0.5'
                }`}
              >
                <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                  active === g.id ? 'bg-white/20' : 'bg-brand-blue-light text-brand-blue'
                }`}>
                  <i className={`fa-solid ${g.icon}`} />
                </span>
                {g.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10">
            {/* La key reinicia el juego al cambiar de pestaña */}
            <Game key={active} />
          </div>
        </div>
      </section>

      {/* ── VIDEOS ─────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="badge-red mb-3 inline-flex">
                <i className="fa-brands fa-youtube" /> Videos
              </span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">
                Videos Educativos
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Videos sobre movilidad segura. Al hacer clic se abren en YouTube.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <FadeIn key={v.url} delay={i * 60}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-video bg-slate-900">
                    <img
                      src={`https://img.youtube.com/vi/${youtubeId(v.url)}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <i className="fa-brands fa-youtube absolute inset-0 m-auto w-fit h-fit text-6xl text-red-600
                                  drop-shadow-lg group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-heading font-bold text-brand-dark mb-2 leading-snug">{v.title}</h4>
                    <span className="text-brand-red text-sm font-semibold">
                      Ver en YouTube <i className="fa-solid fa-arrow-up-right-from-square ml-1" />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}

            {videos.length === 0 && Array.from({ length: PLACEHOLDER_VIDEOS }, (_, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl overflow-hidden border border-dashed border-slate-300">
                  <div className="aspect-video bg-slate-100 flex items-center justify-center">
                    <i className="fa-brands fa-youtube text-6xl text-slate-300" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-heading font-bold text-slate-400 mb-1">Video educativo</h4>
                    <span className="text-slate-400 text-sm font-semibold">
                      <i className="fa-solid fa-clock mr-1" /> Próximamente
                    </span>
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
