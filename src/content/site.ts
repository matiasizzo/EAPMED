/*
 * Contenido de la web EAPMED, según la maqueta de Framer.
 * Los títulos legibles del print se copiaron literalmente; los párrafos
 * que no se distinguen en la captura son placeholders editables.
 * Las imágenes son placeholders de Unsplash/randomuser: sustituir por las reales.
 */

export const SITE = {
  name: 'EAPMED',
  fullName: 'European Academy of Personalized Medicine',
  email: 'info@eapmed.org',
  address: 'Carrer del Carme 47, Barcelona',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Inscripción', href: '/checkout' },
  { label: 'Temas', href: '/#temas' },
  { label: 'Alojamiento', href: '/#sede' },
  { label: 'Contacto', href: '/#contacto' },
]

export const SOCIALS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
]

export const HERO = {
  badge: 'TOUR EAPMED · Barcelona 2025',
  titlePrefix: '1',
  titleOrdinal: 'st',
  title: 'EAPMED',
  subtitle: 'Vision of the Experts',
  primaryCta: 'Hacer inscripción',
  secondaryCta: 'Temas abordados',
  expertsCard: { value: '+40', label: 'Experts' },
  images: [
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1583912267550-d44c9c31f6cb?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=900&q=80',
  ],
}

export const ABOUT = {
  title: 'EAPMED | European Academy of Personalized Medicine',
  description:
    'Un evento médico, dinámico y vanguardista, diseñado por el Dr. Vinnerson Dall\'Ó y la Dra. Andréia Sánchez, los organizadores del evento TOUR, su sello inspirador de la medicina.',
  cards: [
    {
      title: 'Entrevistas con expertos seleccionados',
      description:
        'Un formato de entrevistas con los expertos disponibles de las especialidades, para responder preguntas y ofrecer charlas inspiradoras.',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Lugar del evento',
      description:
        'El evento tendrá lugar en la Real Academia de Medicina de Cataluña, donde el público presencial y los asistentes online podrán vivir la experiencia del encuentro.',
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Programa',
      description:
        'Sesiones destacadas con invitados médicos internacionales de gran relevancia en sus especialidades, medicina regenerativa y medicina estética personalizada.',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
  ],
}

export const EXPERTS = {
  title: 'Experts',
  description:
    'Nombres líderes en referentes académicos internacionales con una trayectoria destacada en sus respectivas carreras.',
  cta: 'Hacer inscripción',
  // Headshots placeholder: sustituir por las fotos reales del claustro.
  images: [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/women/12.jpg',
    'https://randomuser.me/api/portraits/men/76.jpg',
    'https://randomuser.me/api/portraits/women/33.jpg',
    'https://randomuser.me/api/portraits/men/22.jpg',
    'https://randomuser.me/api/portraits/women/56.jpg',
    'https://randomuser.me/api/portraits/men/61.jpg',
    'https://randomuser.me/api/portraits/women/21.jpg',
    'https://randomuser.me/api/portraits/men/14.jpg',
    'https://randomuser.me/api/portraits/women/79.jpg',
    'https://randomuser.me/api/portraits/men/52.jpg',
    'https://randomuser.me/api/portraits/women/90.jpg',
  ],
}

export const TOUR = {
  titleLead: 'Inscripciones abiertas para el',
  titleHighlight: 'TOUR EAPMED: Vision of the Experts',
  titleYear: '2025',
  rows: [
    {
      title: 'Real Academia De Medicina da Cataluña',
      description: '',
      image:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
      imageSide: 'right' as const,
    },
    {
      title: 'Expertos de diversas disciplinas',
      description:
        'Este encuentro reunirá a expertos, científicos y tecnólogos de diversas disciplinas para explorar los avances más innovadores en la búsqueda de una vida más saludable y de calidad, más allá de la estética física.',
      image:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
      imageSide: 'left' as const,
    },
    {
      title: '"Guía EAPMED Vision of the Expert"',
      description:
        'Un libro que no solo informa, sino que también actúa como una guía práctica para quienes desean transformar su vida profesional y personal. Este recurso es esencial para vivir y aplicar el conocimiento compartido por nuestros seleccionados expertos en 2024.',
      image:
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
      imageSide: 'right' as const,
    },
    {
      title: '¡La inscripción ya está abierta!',
      description:
        'Las temáticas más aludidas y de destaque en el mundo médico. Asegura tu plaza hoy mismo.',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
      imageSide: 'left' as const,
      link: { label: 'Temas abordados', href: '/#temas' },
    },
  ],
}

export const PARTICIPANTS = {
  titleLead: 'Quem pode',
  titleHighlight: 'participar?',
  items: [
    {
      label: 'Medicina de Precisión',
      color: '#4b7bf5',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Medicina Estética',
      color: '#93a7fd',
      image:
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Cirugía Plástica',
      color: '#c4b5fd',
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Dermatología',
      color: '#2dd4bf',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Ginecología',
      color: '#f9a8d4',
      image:
        'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Medicina Deportiva',
      color: '#3b82f6',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Nutriología',
      color: '#14b8a6',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Endocrinología',
      color: '#7dd3fc',
      image:
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Medicina Preventiva',
      color: '#22d3ee',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
    },
  ],
}

export const VENUE = {
  title: 'Real Academia de Medicina da Cataluña',
  address: 'Dirección: Carrer del Carme 47, Barcelona',
  description:
    'Teatro del 6 de Noviembre a 1700, celebraremos una noche mágica con nuestros profesores y expertos para estrechar alianzas sólidas.',
  images: [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=700&q=80',
  ],
}

export const ORGANIZERS = {
  title: 'Organizadores',
  description:
    'Reunieron sus sueños y experiencias para seguir una historia en la medicina.',
  items: [
    {
      name: "Dr. Vinnerson Dall'Ó, MD, MSc",
      role: 'CEO EAPMED',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dra. Andréia Sánchez García, MD',
      role: 'Directora EAPMED',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    },
  ],
}

export const COORDINATOR = {
  title: 'Coordenadora Científica',
  name: 'Dra. Maíra Gonzalez, PhD',
  image:
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
}

export const FINAL_CTA = {
  textLead: 'Oportunidad única para elevar sus experiencias junto a',
  textHighlight: 'los mejores expertos',
  textTail: 'y líderes de la industria.',
  cta: 'Hacer inscripción',
  image:
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80',
}

/* Resumen mostrado en el checkout */
export const INSCRIPTION = {
  includes: [
    'Acceso completo al TOUR EAPMED 2025',
    'Sesiones y entrevistas con +40 expertos',
    'Guía EAPMED "Vision of the Expert"',
    'Certificado de asistencia',
  ],
  note: 'Recibirás el recibo y la confirmación de tu plaza por email.',
}
