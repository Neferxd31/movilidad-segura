// Formas oficiales dibujadas en un lienzo de 100 × 100
const SHAPES = {
  octagon: (
    <>
      <polygon points="29,2 71,2 98,29 98,71 71,98 29,98 2,71 2,29" fill="#E53935" />
      <polygon points="31,7 69,7 93,31 93,69 69,93 31,93 7,69 7,31" fill="none" stroke="#fff" strokeWidth="2.5" />
    </>
  ),
  triangle: (
    <>
      <polygon points="4,10 96,10 50,94" fill="#E53935" strokeLinejoin="round" />
      <polygon points="19,19 81,19 50,74" fill="#fff" />
    </>
  ),
  circle: <circle cx="50" cy="50" r="45" fill="#fff" stroke="#E53935" strokeWidth="9" />,
  diamond: (
    <>
      <polygon points="50,2 98,50 50,98 2,50" fill="#1E293B" strokeLinejoin="round" />
      <polygon points="50,8 92,50 50,92 8,50" fill="#FFC107" />
    </>
  ),
  square: (
    <>
      <rect x="4" y="4" width="92" height="92" rx="10" fill="#1E73BE" />
      <rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#fff" strokeWidth="2.5" />
    </>
  ),
}

const CONTENT_COLOR = {
  octagon:  'text-white',
  triangle: 'text-slate-900',
  circle:   'text-slate-900',
  diamond:  'text-slate-900',
  square:   'text-white',
}

export default function TrafficSign({ sign, className = '' }) {
  const { shape, icon, text, crossed } = sign
  // El texto largo (PARE) necesita letra más pequeña que un número o una letra sola
  const textSize = text && text.length > 2 ? '22cqw' : '42cqw'

  return (
    <div className={`relative aspect-square ${className}`} style={{ containerType: 'inline-size' }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md" aria-hidden="true">
        {SHAPES[shape]}
      </svg>

      <div className={`absolute inset-0 flex items-center justify-center font-heading font-bold ${CONTENT_COLOR[shape]}`}>
        {icon && <i className={`fa-solid ${icon}`} style={{ fontSize: '36cqw' }} />}
        {text && <span style={{ fontSize: textSize, lineHeight: 1 }}>{text}</span>}
      </div>

      {crossed && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <line x1="20" y1="20" x2="80" y2="80" stroke="#E53935" strokeWidth="9" strokeLinecap="round" />
        </svg>
      )}
    </div>
  )
}
