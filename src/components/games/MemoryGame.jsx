import { useEffect, useState } from 'react'
import TrafficSign from './TrafficSign'
import { SIGNS, shuffle } from './signs'

const PAIRS = 6

function buildDeck() {
  const chosen = shuffle(SIGNS).slice(0, PAIRS)
  return shuffle([...chosen, ...chosen]).map((sign, i) => ({ key: `${sign.id}-${i}`, sign }))
}

function starsFor(moves) {
  if (moves <= PAIRS + 3) return 3
  if (moves <= PAIRS + 7) return 2
  return 1
}

export default function MemoryGame() {
  const [phase, setPhase]     = useState('start')
  const [deck, setDeck]       = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves]     = useState(0)

  // Si las dos cartas volteadas no son pareja, se vuelven a tapar
  useEffect(() => {
    if (flipped.length < 2) return
    const [a, b] = flipped
    if (deck[a].sign.id === deck[b].sign.id) {
      setMatched(m => [...m, deck[a].sign.id])
      setFlipped([])
      return
    }
    const id = setTimeout(() => setFlipped([]), 900)
    return () => clearTimeout(id)
  }, [flipped, deck])

  useEffect(() => {
    if (phase === 'playing' && matched.length === PAIRS) {
      const id = setTimeout(() => setPhase('end'), 700)
      return () => clearTimeout(id)
    }
  }, [phase, matched])

  const start = () => {
    setDeck(buildDeck())
    setFlipped([])
    setMatched([])
    setMoves(0)
    setPhase('playing')
  }

  const flip = index => {
    if (flipped.length === 2 || flipped.includes(index)) return
    if (matched.includes(deck[index].sign.id)) return
    if (flipped.length === 1) setMoves(m => m + 1)
    setFlipped(f => [...f, index])
  }

  if (phase === 'start') {
    return (
      <div className="text-center py-6">
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2].map(n => (
            <div key={n} className="w-16 h-20 rounded-xl bg-gradient-to-br from-brand-blue to-brand-dark
                                    flex items-center justify-center text-white text-2xl shadow-md animate-float"
                 style={{ animationDelay: `${n * 300}ms` }}>
              ?
            </div>
          ))}
        </div>
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">Memoria de señales</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-6">
          Voltea las cartas de dos en dos y encuentra las {PAIRS} parejas de señales de tránsito.
          Intenta lograrlo con la menor cantidad de jugadas.
        </p>
        <button onClick={start} className="btn-primary">
          <i className="fa-solid fa-play" /> Empezar
        </button>
      </div>
    )
  }

  if (phase === 'end') {
    const stars = starsFor(moves)
    return (
      <div className="text-center py-6 animate-scale-in">
        <div className="flex justify-center gap-2 text-4xl mb-4">
          {[1, 2, 3].map(n => (
            <i key={n} className={`fa-solid fa-star ${n <= stars ? 'text-brand-yellow' : 'text-slate-200'}`} />
          ))}
        </div>
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-1">
          {stars === 3 ? '¡Memoria de campeón!' : stars === 2 ? '¡Muy bien!' : '¡Lo lograste!'}
        </h3>
        <p className="text-slate-500 mb-6">Encontraste todas las parejas en {moves} jugadas.</p>
        <button onClick={start} className="btn-primary">
          <i className="fa-solid fa-rotate-right" /> Jugar de nuevo
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between text-sm font-semibold text-slate-500 mb-4">
        <span>Parejas: {matched.length} de {PAIRS}</span>
        <span>Jugadas: {moves}</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
        {deck.map((card, i) => {
          const isMatched = matched.includes(card.sign.id)
          const isOpen = isMatched || flipped.includes(i)
          return (
            <button
              key={card.key}
              onClick={() => flip(i)}
              aria-label={isOpen ? card.sign.name : 'Carta tapada'}
              className={`flip-card aspect-[3/4] ${isOpen ? 'is-flipped' : ''}`}
            >
              <div className="flip-inner">
                <div className="flip-face bg-gradient-to-br from-brand-blue to-brand-dark text-white
                                flex flex-col items-center justify-center shadow-md hover:shadow-lg">
                  <i className="fa-solid fa-road text-2xl opacity-60 mb-1" />
                  <span className="font-heading font-bold text-3xl">?</span>
                </div>
                <div className={`flip-face flip-front bg-white border-2 flex flex-col items-center justify-center
                                 gap-2 p-2 shadow-md ${isMatched ? 'border-brand-green' : 'border-slate-200'}`}>
                  <TrafficSign sign={card.sign} className="w-3/5" />
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-600 text-center leading-tight">
                    {card.sign.name}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
