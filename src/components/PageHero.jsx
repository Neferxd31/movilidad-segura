import { Link } from 'react-router-dom'

export default function PageHero({ badge, badgeIcon, title, description, breadcrumb }) {
  return (
    <header className="relative bg-gradient-to-br from-brand-dark via-brand-blue to-blue-500 pt-32 pb-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-brand-yellow/10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full
                        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <i className="fa-solid fa-chevron-right text-[10px]" />
            <span className="text-white/90">{breadcrumb}</span>
          </nav>
        )}

        {/* Badge */}
        <span className="badge-white mb-4 inline-flex">
          <i className={`fa-solid ${badgeIcon}`} />
          {badge}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </header>
  )
}
