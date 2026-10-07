import { useEffect, useState } from 'react'
import TrafficSign from './TrafficSign'
import { SIGNS, SIGN_TYPES, shuffle } from './signs'

const ROUNDS = 8
const SECONDS = 10
const TIMEOUT = 'timeout'

// Cada ronda: una señal y cuatro opciones de nombre, una sola correcta
function buildRounds() {
  return shuffle(SIGNS).slice(0, ROUNDS).map(sign => ({
    sign,
    options: shuffle([sign, ...shuffle(SIGNS.filter(s => s.id !== sign.id)).slice(0, 3)]),
  }))
}

function starsFor(correct) {
  if (correct >= ROUNDS - 1) return 3
  if (correct >= ROUNDS / 2) return 2
  return 1
}

export default function GuessTheSign() {
  const [phase, setPhase]       = useState('start')
  const [rounds, setRounds]     = useState([])
  const [index, setIndex]       = useState(0)
  const [answer, setAnswer]     = useState(null)
  const [timeLeft, setTimeLeft] = useState(SECONDS)
  const [score, setScore]       = useState(0)
  const [correct, setCorrect]   = useState(0)

  const round = rounds[index]

  // Cuenta regresiva mientras la pregunta está sin responder
  useEffect(() => {
    if (phase !== 'playing' || answer !== null) return
    const id = setInterval(() => setTimeLeft(t => Math.max(0, t - 0.1)), 100)
    return () => clearInterval(id)
  }, [phase, answer, index])

  useEffect(() => {
    if (phase === 'playing' && answer === null && timeLeft === 0) setAnswer(TIMEOUT)
  }, [phase, answer, timeLeft])

  const start = () => {
    setRounds(buildRounds())
    setIndex(0)
    setAnswer(null)
    setTimeLeft(SECONDS)
    setScore(0)
    setCorrect(0)
    setPhase('playing')
  }

  const choose = option => {
    if (answer !== null) return
    setAnswer(option.id)
    if (option.id !== round.sign.id) return
    // Responder rápido da puntos extra
    setScore(s => s + 10 + Math.ceil(timeLeft))
    setCorrect(c => c + 1)
  }

  const next = () => {
    if (index + 1 >= ROUNDS) {
      setPhase('end')
      return
    }
    setIndex(i => i + 1)
    setAnswer(null)
    setTimeLeft(SECONDS)
  }

  if (phase === 'start') {
    return (
      <div className="text-center py-6">
        <div className="flex justify-center gap-4 mb-6">
          {['pare', 'zona-escolar', 'hospital'].map(id => (
            <TrafficSign key={id} sign={SIGNS.find(s => s.id === id)} className="w-20 animate-float" />
          ))}
        </div>
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">Adivina la señal</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-6">
          Aparecerán {ROUNDS} señales de tránsito. Elige qué significa cada una antes de que
          se acabe el tiempo. ¡Entre más rápido respondas, más puntos ganas!
        </p>
        <button onClick={start} className="btn-primary">
          <i className="fa-solid fa-play" /> Empezar
        </button>
      </div>
    )
  }

  if (phase === 'end') {
    const stars = starsFor(correct)
    return (
      <div className="text-center py-6 animate-scale-in">
        <div className="flex justify-center gap-2 text-4xl mb-4">
          {[1, 2, 3].map(n => (
            <i key={n} className={`fa-solid fa-star ${n <= stars ? 'text-brand-yellow' : 'text-slate-200'}`} />
          ))}
        </div>
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-1">
          {stars === 3 ? '¡Eres un experto en señales!' : stars === 2 ? '¡Muy bien!' : '¡Sigue practicando!'}
        </h3>
        <p className="text-slate-500 mb-1">Acertaste {correct} de {ROUNDS} señales.</p>
        <p className="font-heading font-bold text-3xl text-brand-blue mb-6">{score} puntos</p>
        <button onClick={start} className="btn-primary">
          <i className="fa-solid fa-rotate-right" /> Jugar de nuevo
        </button>
      </div>
    )
  }

  const answered = answer !== null
  const isRight = answer === round.sign.id

  return (
    <div>
      {/* Progreso, puntaje y tiempo */}
      <div className="flex items-center justify-between text-sm font-semibold text-slate-500 mb-3">
        <span>Señal {index + 1} de {ROUNDS}</span>
        <span className="text-brand-blue"><i className="fa-solid fa-star mr-1" />{score} puntos</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden mb-6">
        <div
          className={`h-full rounded-full transition-[width] duration-100 ease-linear ${
            timeLeft > 3 ? 'bg-brand-green' : 'bg-brand-red'
          }`}
          style={{ width: `${(timeLeft / SECONDS) * 100}%` }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div key={round.sign.id} className="flex justify-center animate-scale-in">
          <TrafficSign sign={round.sign} className="w-44 md:w-56" />
        </div>

        <div>
          <p className="font-heading font-semibold text-brand-dark text-lg mb-3">¿Qué significa esta señal?</p>
          <div className="grid gap-3">
            {round.options.map(option => {
              const isAnswer = option.id === round.sign.id
              const style = !answered
                ? 'border-slate-200 hover:border-brand-blue hover:bg-brand-blue-light'
                : isAnswer
                  ? 'border-brand-green bg-brand-green-light text-brand-green'
                  : option.id === answer
                    ? 'border-brand-red bg-brand-red-light text-brand-red'
                    : 'border-slate-200 opacity-50'
              return (
                <button
                  key={option.id}
                  onClick={() => choose(option)}
                  disabled={answered}
                  className={`text-left px-4 py-3 rounded-xl border-2 font-semibold transition-all duration-200 ${style}`}
                >
                  {option.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Retroalimentación */}
      {answered && (
        <div className={`mt-6 animate-fade-up ${isRight ? 'aviso-green' : 'aviso-red'}`}>
          <i className={`fa-solid ${isRight ? 'fa-circle-check text-brand-green' : 'fa-circle-xmark text-brand-red'} text-2xl`} />
          <div className="flex-1">
            <p className="font-heading font-bold text-brand-dark">
              {isRight ? '¡Correcto!' : answer === TIMEOUT ? '¡Se acabó el tiempo!' : 'No es esa.'}
              {!isRight && ` Es la señal de ${round.sign.name.toLowerCase()}.`}
            </p>
            <p className="text-slate-600 text-sm">
              Es una señal {round.sign.type.toLowerCase()}: {SIGN_TYPES[round.sign.type]}
            </p>
          </div>
          <button onClick={next} className="btn-blue self-center">
            {index + 1 >= ROUNDS ? 'Ver resultado' : 'Siguiente'} <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      )}
    </div>
  )
}
