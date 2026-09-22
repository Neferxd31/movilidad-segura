import { useEffect, useState } from 'react'
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

// Fotos de un álbum: /img/galeria/<slug>/<slug>-01.jpg y su miniatura en thumbs/
const photos = (slug, count) =>
  Array.from({ length: count }, (_, i) => {
    const name = `${slug}-${String(i + 1).padStart(2, '0')}.jpg`
    return { src: `/img/galeria/${slug}/${name}`, thumb: `/img/galeria/${slug}/thumbs/${name}` }
  })

const albums = [
  {
    slug: 'charlas',
    label: 'Charlas educativas',
    desc: 'Jornadas con los agentes de tránsito en los salones de clase',
    icon: 'fa-chalkboard-user',
    gradient: 'from-brand-blue to-blue-400',
    items: [
      ...photos('charlas', 9),
      {
        src: '/img/galeria/charlas/charlas-video.mp4',
        thumb: '/img/galeria/charlas/thumbs/charlas-video.jpg',
        video: true,
      },
    ],
  },
  {
    slug: 'taller-senales',
    label: 'Taller de señales',
    desc: 'Reconocimiento de las señales reglamentarias, preventivas e informativas',
    icon: 'fa-traffic-light',
    gradient: 'from-amber-500 to-yellow-400',
    items: photos('taller-senales', 4),
  },
  {
    slug: 'concurso-dibujo',
    label: 'Concurso de dibujo',
    desc: 'Mi Ciudad Segura — los estudiantes dibujando sus propuestas',
    icon: 'fa-palette',
    gradient: 'from-pink-500 to-rose-400',
    items: photos('concurso-dibujo', 10),
  },
]

function Lightbox({ album, index, onClose, onMove }) {
  // Flechas para pasar de una foto a otra y Escape para cerrar
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft')  onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onMove])

  const item = album.items[index]

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm" onClick={onClose}>

      {/* Encabezado */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-4 text-white">
        <div className="flex items-center gap-3 min-w-0">
          <i className={`fa-solid ${album.icon} text-brand-yellow`} />
          <span className="font-heading font-semibold truncate">{album.label}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm tabular-nums">{index + 1} / {album.items.length}</span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </div>

      {/* Flechas fijas a los lados: no se mueven con el tamaño de la foto */}
      <button
        onClick={e => { e.stopPropagation(); onMove(-1) }}
        aria-label="Anterior"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                   bg-white/15 hover:bg-white/30 text-white text-lg transition-colors"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button
        onClick={e => { e.stopPropagation(); onMove(1) }}
        aria-label="Siguiente"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                   bg-white/15 hover:bg-white/30 text-white text-lg transition-colors"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-28 pt-20 pb-8">
        {item.video ? (
          <video
            key={item.src}
            src={item.src}
            controls
            className="max-h-full max-w-full rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={`${album.label} — foto ${index + 1}`}
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        )}
      </div>
    </div>
  )
}

export default function Galeria() {
  const [albumIndex, setAlbumIndex] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(null)

  const album = albumIndex === null ? null : albums[albumIndex]

  const move = step =>
    setPhotoIndex(i => {
      const total = album.items.length
      return (i + step + total) % total
    })

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

          {album ? (
            <>
              {/* Cabecera del álbum */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${album.gradient}
                                    flex items-center justify-center text-white text-xl`}>
                    <i className={`fa-solid ${album.icon}`} />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-xl">{album.label}</h3>
                    <p className="text-slate-500 text-sm">{album.items.length} elementos</p>
                  </div>
                </div>
                <button
                  onClick={() => setAlbumIndex(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200
                             text-brand-dark text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  <i className="fa-solid fa-arrow-left" />
                  Volver a los álbumes
                </button>
              </div>

              {/* Fotos del álbum */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {album.items.map((item, i) => (
                  <button
                    key={item.src}
                    onClick={() => setPhotoIndex(i)}
                    className="group relative block w-full overflow-hidden rounded-xl shadow-sm
                               hover:shadow-lg transition-all duration-300 aspect-square"
                  >
                    <img
                      src={item.thumb}
                      alt={`${album.label} — foto ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform
                                 duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors
                                    duration-300 flex items-center justify-center">
                      <i className={`fa-solid ${item.video ? 'fa-play' : 'fa-expand'} text-white text-2xl
                                     ${item.video ? 'opacity-90' : 'opacity-0 group-hover:opacity-100'}
                                     drop-shadow-lg transition-opacity duration-300`} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Info note */}
              <FadeIn>
                <div className="aviso-blue mb-12">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-camera text-brand-blue text-lg" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-brand-dark mb-1">Álbumes del proyecto</h4>
                    <p className="text-slate-600 text-base leading-relaxed">
                      Abre un álbum para ver todas sus fotos y selecciona una para ampliarla.
                      Dentro del carrusel puedes pasar de una foto a otra con las flechas.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Álbumes */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((a, i) => (
                  <FadeIn key={a.slug} delay={i * 50}>
                    <button
                      onClick={() => setAlbumIndex(i)}
                      className="group relative block w-full text-left overflow-hidden rounded-2xl shadow-sm
                                 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3]"
                    >
                      {/* Portada */}
                      <img
                        src={`/img/galeria/portadas/${a.slug}.jpg`}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform
                                   duration-500 group-hover:scale-105"
                      />

                      {/* Color del álbum */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-80
                                       group-hover:opacity-70 transition-opacity duration-300`} />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Contenido */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10">
                        <i className={`fa-solid ${a.icon} text-4xl mb-4 drop-shadow
                                       group-hover:scale-110 transition-transform duration-300`} />
                        <h4 className="font-heading font-bold text-lg text-center mb-1 drop-shadow">{a.label}</h4>
                        <p className="text-white/85 text-xs text-center leading-relaxed drop-shadow">{a.desc}</p>
                      </div>

                      {/* Cantidad de fotos */}
                      <span className="absolute top-4 right-4 z-20 bg-black/35 backdrop-blur-sm text-white text-xs
                                       font-semibold px-3 py-1 rounded-full">
                        <i className="fa-solid fa-images mr-1.5" />{a.items.length}
                      </span>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100
                                      transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm
                                         font-semibold px-4 py-2 rounded-full">
                          <i className="fa-solid fa-expand mr-2" />Ver álbum
                        </span>
                      </div>
                    </button>
                  </FadeIn>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {album && photoIndex !== null && (
        <Lightbox
          album={album}
          index={photoIndex}
          onClose={() => setPhotoIndex(null)}
          onMove={move}
        />
      )}
    </>
  )
}
