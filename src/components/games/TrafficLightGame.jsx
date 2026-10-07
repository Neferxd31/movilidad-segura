import { useEffect, useState } from 'react'

const GOAL = 6
const LIVES = 3
const CROSS_MS = 800

const randomBetween = (min, max) => min + Math.random() * (max - min)

// Semáforo peatonal: mano roja para esperar, muñeco verde para cruzar
function PedestrianLight({ light }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-900 rounded-2xl p-3 flex flex-col gap-3 shadow-xl">
        <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-4xl transition-all duration-150 ${
          light === 'red' ? 'bg-brand-red text-white shadow-[0_0_30px_rgba(229,57,53,0.8)]' : 'bg-red-950 text-red-900'
        }`}>
          <i className="fa-solid fa-hand" />
        </div>
        <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-4xl transition-all duration-150 ${
          light === 'green' ? 'bg-brand-green text-white shadow-[0_0_30px_rgba(40,167,69,0.8)]' : 'bg-green-950 text-green-900'
        }`}>
          <i className="fa-solid fa-person-walking" />
        </div>
      </div>
      <div className="w-3 h-16 bg-slate-500" />
    </div>
  )
}

export default function TrafficLightGame() {
  const [phase, setPhase]       = useState('start')
  const [light, setLight]       = useState('red')
  const [side, setSide]         = useState('top')
  const [crossing, setCrossing] = useState(false)
  const [crossed, setCrossed]   = useState(0)
  const [lives, setLives]       = useState(LIVES)
  const [feedback, setFeedback] = useState(null)

  // El semáforo cambia solo y se detiene mientras el estudiante va cruzando.
  // El verde dura menos a medida que avanza el juego.
  useEffect(() => {
    if (phase !== 'playing' || crossing) return
    const duration = light === 'green'
      ? Math.max(700, 1600 - crossed * 150)
      : randomBetween(1000, 2300)
    const id = setTimeout(() => setLight(l => (l === 'green' ? 'red' : 'green')), duration)
    return () => clearTimeout(id)
  }, [phase, light, crossing, crossed])

  // Al terminar de cruzar, el semáforo vuelve a rojo para la siguiente ronda
  useEffect(() => {
    if (!crossing) return
    const id = setTimeout(() => {
      setCrossing(false)
      setLight('red')
      if (crossed >= GOAL) setPhase('won')
    }, CROSS_MS)
    return () => clearTimeout(id)
  }, [crossing, crossed])

  useEffect(() => {
    if (!feedback) return
    const id = setTimeout(() => setFeedback(null), 450)
    return () => clearTimeout(id)
  }, [feedback])

  const start = () => {
    setCrossed(0)
    setLives(LIVES)
    setLight('red')
    setSide('top')
    setCrossing(false)
    setFeedback(null)
    setPhase('playing')
  }

  const cross = () => {
    if (phase !== 'playing' || crossing) return
    if (light === 'green') {
      setCrossing(true)
      setSide(s => (s === 'top' ? 'bottom' : 'top'))
      setCrossed(c => c + 1)
      setFeedback('ok')
      return
    }
    const left = lives - 1
    setLives(left)
    setFeedback('bad')
    if (left <= 0) setPhase('lost')
  }

  // La barra espaciadora también sirve para cruzar
  useEffect(() => {
    if (phase !== 'playing') return
    const onKey = e => {
      if (e.code !== 'Space') return
      e.preventDefault()
      cross()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (phase !== 'playing') {
    const title = { start: 'Semáforo rápido', won: '¡Cruzaste seguro!', lost: '¡Cuidado!' }[phase]
    const text = {
      start: `Ayuda al estudiante a cruzar la calle ${GOAL} veces. Toca "¡Cruzar!" solo cuando el
              muñeco del semáforo esté en verde. Si lo tocas en rojo pierdes una vida: tienes ${LIVES}.`,
      won:   'Esperaste el verde cada vez y cruzaste sin peligro. ¡Así se cruza la calle!',
      lost:  'Intentaste cruzar varias veces con el semáforo en rojo. Recuerda: con la mano roja, siempre esperar.',
    }[phase]
    return (
      <div className="text-center py-6 animate-scale-in">
        <div className="text-6xl mb-4">
          {phase === 'start' && <i className="fa-solid fa-traffic-light text-brand-blue animate-float inline-block" />}
          {phase === 'won'   && <i className="fa-solid fa-trophy text-brand-yellow animate-float inline-block" />}
          {phase === 'lost'  && <i className="fa-solid fa-hand text-brand-red" />}
        </div>
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">{title}</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-6">{text}</p>
        <button onClick={start} className="btn-primary">
          <i className={`fa-solid ${phase === 'start' ? 'fa-play' : 'fa-rotate-right'}`} />
          {phase === 'start' ? 'Empezar' : 'Jugar de nuevo'}
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between text-sm font-semibold text-slate-500 mb-4">
        <span>Cruces: {crossed} de {GOAL}</span>
        <span className="flex gap-1 text-brand-red text-lg">
          {Array.from({ length: LIVES }, (_, i) => (
            <i key={i} className={`fa-solid fa-heart ${i < lives ? '' : 'text-slate-200'}`} />
          ))}
        </span>
      </div>

      <div className={`flex flex-col md:flex-row items-center gap-8 rounded-2xl p-4 transition-colors duration-200 ${
        feedback === 'bad' ? 'bg-brand-red-light' : feedback === 'ok' ? 'bg-brand-green-light' : ''
      }`}>
        <PedestrianLight light={light} />

        {/* Vista desde arriba: dos andenes, la calle y la cebra */}
        <div className="relative flex-1 w-full h-64 rounded-2xl overflow-hidden bg-slate-300">
          <div className="absolute inset-x-0 top-12 bottom-12 bg-slate-700" />
          <div
            className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-28"
            style={{ background: 'repeating-linear-gradient(180deg, #fff 0 14px, transparent 14px 28px)' }}
          />

          {/* Con el peatón en rojo los carros pasan; el estudiante espera en el andén */}
          {light === 'red' && (
            <i className="fa-solid fa-car-side absolute top-[44%] text-4xl text-brand-yellow animate-drive" />
          )}

          <div
            className={`absolute left-1/2 -translate-x-1/2 text-4xl text-brand-blue ${
              feedback === 'bad' ? 'animate-shake' : ''
            }`}
            style={{
              top: side === 'top' ? '4px' : 'calc(100% - 44px)',
              transition: `top ${CROSS_MS}ms ease-in-out`,
            }}
          >
            <i className="fa-solid fa-person-walking drop-shadow" />
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={cross}
          className="px-10 py-4 rounded-2xl bg-brand-green text-white font-heading font-bold text-2xl uppercase
                     tracking-wide shadow-lg hover:bg-green-700 active:scale-95 transition-all"
        >
          <i className="fa-solid fa-person-walking mr-2" /> ¡Cruzar!
        </button>
        <p className="text-slate-400 text-sm mt-2">También puedes usar la barra espaciadora</p>
      </div>
    </div>
  )
}
