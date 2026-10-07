// Señales de tránsito colombianas que usan los juegos de la página de Actividades
export const SIGNS = [
  { id: 'pare',          name: 'Pare',                            type: 'Reglamentaria', shape: 'octagon',  text: 'PARE' },
  { id: 'ceda',          name: 'Ceda el paso',                    type: 'Reglamentaria', shape: 'triangle' },
  { id: 'no-parquear',   name: 'Prohibido parquear',              type: 'Reglamentaria', shape: 'circle',   text: 'E', crossed: true },
  { id: 'velocidad',     name: 'Velocidad máxima 30 km/h',        type: 'Reglamentaria', shape: 'circle',   text: '30' },
  { id: 'no-bicicletas', name: 'Prohibido el paso de bicicletas', type: 'Reglamentaria', shape: 'circle',   icon: 'fa-bicycle', crossed: true },
  { id: 'no-pitar',      name: 'Prohibido pitar',                 type: 'Reglamentaria', shape: 'circle',   icon: 'fa-bullhorn', crossed: true },
  { id: 'zona-escolar',  name: 'Zona escolar',                    type: 'Preventiva',    shape: 'diamond',  icon: 'fa-children' },
  { id: 'peatones',      name: 'Paso peatonal',                   type: 'Preventiva',    shape: 'diamond',  icon: 'fa-person-walking' },
  { id: 'semaforo',      name: 'Semáforo adelante',               type: 'Preventiva',    shape: 'diamond',  icon: 'fa-traffic-light' },
  { id: 'ciclistas',     name: 'Ciclistas en la vía',             type: 'Preventiva',    shape: 'diamond',  icon: 'fa-bicycle' },
  { id: 'hospital',      name: 'Hospital',                        type: 'Informativa',   shape: 'square',   text: 'H' },
  { id: 'parqueadero',   name: 'Parqueadero',                     type: 'Informativa',   shape: 'square',   text: 'P' },
  { id: 'gasolina',      name: 'Estación de servicio',            type: 'Informativa',   shape: 'square',   icon: 'fa-gas-pump' },
  { id: 'paradero',      name: 'Paradero de bus',                 type: 'Informativa',   shape: 'square',   icon: 'fa-bus' },
]

// Qué enseña cada tipo de señal, para la retroalimentación de los juegos
export const SIGN_TYPES = {
  Reglamentaria: 'Indica una obligación o una prohibición. Es roja y blanca.',
  Preventiva:    'Avisa de un peligro más adelante. Es amarilla y negra.',
  Informativa:   'Da información útil en la vía. Es azul.',
}

export function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
