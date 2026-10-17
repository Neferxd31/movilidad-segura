// Álbumes de la galería: los usan la página Galería y el carrusel de Inicio
// Fotos de un álbum: /img/galeria/<slug>/<slug>-01.jpg y su miniatura en thumbs/
const photos = (slug, count) =>
  Array.from({ length: count }, (_, i) => {
    const name = `${slug}-${String(i + 1).padStart(2, '0')}.jpg`
    return { src: `/img/galeria/${slug}/${name}`, thumb: `/img/galeria/${slug}/thumbs/${name}` }
  })

export const albums = [
  {
    slug: 'charlas',
    label: 'Charlas educativas',
    desc: 'Jornadas con los agentes de tránsito en los salones de clase',
    icon: 'fa-chalkboard-user',
    gradient: 'from-brand-blue to-blue-400',
    context: {
      badge: 'badge-blue', icon: 'fa-microphone', label: 'Charla',
      title: 'Charla de Inicio: Importancia de la Movilidad Segura – Grado 6°',
      desc:  'Sesión introductoria con los estudiantes de grado 6°. Presentación del proyecto y sus objetivos a la comunidad escolar. Participaron docentes, estudiantes y directivos.',
    },
    items: [
      ...photos('charlas', 9),
      {
        src: '/img/galeria/charlas/charlas-video.mp4',
        thumb: '/img/galeria/charlas/thumbs/charlas-video.jpg',
        poster: '/img/galeria/posters/charlas-video.jpg',
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
    context: {
      badge: 'badge-green', icon: 'fa-hands-holding-child', label: 'Taller',
      title: 'Taller de Señales de Tránsito – Grado 6°',
      desc:  'Actividad práctica donde los estudiantes construyeron y colorearon señales de tránsito, identificando señales preventivas, reglamentarias e informativas.',
    },
    items: photos('taller-senales', 4),
  },
  {
    slug: 'taller-practico',
    label: 'Taller práctico',
    desc: 'Dinámica en el aula donde los estudiantes exponen lo aprendido sobre seguridad vial',
    icon: 'fa-people-group',
    gradient: 'from-teal-600 to-teal-400',
    context: {
      badge: 'badge-red', icon: 'fa-gamepad', label: 'Actividad lúdica',
      title: 'Juego Interactivo de Movilidad Vial',
      desc:  'Dinámica en el aula con un juego interactivo proyectado en el televisor, donde los estudiantes pusieron a prueba lo aprendido sobre seguridad vial.',
    },
    items: photos('taller-practico', 8),
  },
  {
    slug: 'simulacro-peatonal',
    label: 'Simulacro peatonal',
    desc: 'Estudiantes guiando el cruce seguro en las calles del colegio',
    icon: 'fa-person-walking',
    gradient: 'from-brand-green to-green-400',
    context: {
      badge: 'badge-yellow', icon: 'fa-person-walking', label: 'Actividad',
      title: 'Simulacro de Cruce Peatonal – Colegio General Santander',
      desc:  'Caminata educativa por las calles cercanas al colegio, donde los estudiantes guiaron el cruce de peatones con señales de PARE y SIGA.',
    },
    items: photos('simulacro-peatonal', 5),
  },
  {
    slug: 'concurso-dibujo',
    label: 'Concurso de dibujo',
    desc: 'Mi Ciudad Segura — los estudiantes dibujando sus propuestas',
    icon: 'fa-palette',
    gradient: 'from-pink-500 to-rose-400',
    context: {
      badge: 'badge-yellow', icon: 'fa-palette', label: 'Actividad',
      title: 'Concurso de Dibujo: "Mi Ciudad Segura"',
      desc:  'Los estudiantes plasmaron su visión de una ciudad con movilidad segura. Los mejores trabajos fueron expuestos en el colegio y en esta página web.',
    },
    items: photos('concurso-dibujo', 10),
  },
  {
    slug: 'entrevistas',
    label: 'Entrevistas',
    desc: 'Testimonios de la comunidad educativa sobre el proyecto',
    icon: 'fa-microphone',
    gradient: 'from-purple-600 to-purple-400',
    context: {
      badge: 'badge-blue', icon: 'fa-microphone-lines', label: 'Entrevista',
      title: 'Entrevistas a la Comunidad Educativa',
      desc:  'Registro en video de los testimonios de estudiantes y docentes sobre el proyecto y lo aprendido durante las actividades.',
    },
    items: [
      {
        src: '/img/galeria/entrevistas/entrevistas-01.mp4',
        thumb: '/img/galeria/entrevistas/thumbs/entrevistas-01.jpg',
        poster: '/img/galeria/posters/entrevistas-01.jpg',
        video: true,
      },
      {
        src: '/img/galeria/entrevistas/entrevistas-02.mp4',
        thumb: '/img/galeria/entrevistas/thumbs/entrevistas-02.jpg',
        poster: '/img/galeria/posters/entrevistas-02.jpg',
        video: true,
      },
    ],
  },
]
