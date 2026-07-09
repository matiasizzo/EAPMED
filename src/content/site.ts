/*
 * Contenido de la web EAPMED.
 * Todos los textos son placeholders editables: al comparar con la maqueta
 * de Framer, basta con ajustar este archivo (y los tokens de globals.css)
 * sin tocar los componentes.
 */

export const SITE = {
  name: 'EAPMED',
  fullName: 'Academia Europea de Medicina',
  tagline: 'Formación médica de excelencia, avalada en Europa',
  email: 'info@eapmed.org',
  phone: '+34 900 000 000',
  address: 'Madrid · España',
}

export const NAV_LINKS = [
  { label: 'Programa', href: '/#programa' },
  { label: 'Metodología', href: '/#metodologia' },
  { label: 'Profesorado', href: '/#profesorado' },
  { label: 'Opiniones', href: '/#opiniones' },
  { label: 'FAQ', href: '/#faq' },
]

export const HERO = {
  badge: 'Convocatoria abierta — plazas limitadas',
  title: 'Impulsa tu carrera médica con formación de nivel europeo',
  subtitle:
    'Curso online de la Academia Europea de Medicina: aprende de especialistas en activo, a tu ritmo y con certificación al finalizar. Diseñado para médicos, residentes y estudiantes de ciencias de la salud.',
  primaryCta: 'Inscribirme ahora',
  secondaryCta: 'Ver el programa',
  image:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
  imageAlt: 'Profesional médico durante una formación clínica',
}

export const STATS = [
  { value: '+2.500', label: 'Alumnos formados' },
  { value: '40 h', label: 'De contenido en vídeo' },
  { value: '12', label: 'Módulos especializados' },
  { value: '4,9/5', label: 'Valoración media' },
]

export const FEATURES = {
  eyebrow: 'Metodología',
  title: 'Una formación pensada para profesionales de la salud',
  subtitle:
    'Combinamos rigor académico, casos clínicos reales y flexibilidad total para que puedas formarte sin dejar tu práctica.',
  items: [
    {
      title: '100 % online y a tu ritmo',
      description:
        'Accede a las clases cuando quieras, desde cualquier dispositivo, con acceso de por vida al contenido y sus actualizaciones.',
      icon: 'laptop',
    },
    {
      title: 'Casos clínicos reales',
      description:
        'Cada módulo se apoya en casos reales comentados por especialistas, para llevar la teoría directamente a la consulta.',
      icon: 'stethoscope',
    },
    {
      title: 'Certificación al finalizar',
      description:
        'Obtén un certificado de la Academia Europea de Medicina que acredita las horas y competencias adquiridas.',
      icon: 'certificate',
    },
    {
      title: 'Tutorías con especialistas',
      description:
        'Resuelve tus dudas en sesiones en directo y en el foro privado del curso, con respuesta garantizada del equipo docente.',
      icon: 'chat',
    },
    {
      title: 'Material descargable',
      description:
        'Guías de práctica, protocolos y resúmenes descargables en PDF para consultar en tu día a día profesional.',
      icon: 'download',
    },
    {
      title: 'Comunidad profesional',
      description:
        'Forma parte de una red europea de médicos y estudiantes con los que compartir experiencia y oportunidades.',
      icon: 'community',
    },
  ],
}

export const CURRICULUM = {
  eyebrow: 'Programa',
  title: 'Plan de estudios del curso',
  subtitle:
    '12 módulos progresivos, de los fundamentos a la práctica clínica avanzada. Contenido placeholder: sustituir por el temario real.',
  modules: [
    {
      number: '01',
      title: 'Fundamentos y bases científicas',
      lessons: ['Introducción y objetivos del curso', 'Bases fisiopatológicas', 'Evidencia científica actual'],
      duration: '3 h',
    },
    {
      number: '02',
      title: 'Diagnóstico clínico',
      lessons: ['Historia clínica y exploración', 'Pruebas complementarias', 'Diagnóstico diferencial'],
      duration: '4 h',
    },
    {
      number: '03',
      title: 'Abordaje terapéutico',
      lessons: ['Tratamiento de primera línea', 'Manejo farmacológico', 'Seguimiento del paciente'],
      duration: '4 h',
    },
    {
      number: '04',
      title: 'Casos clínicos comentados',
      lessons: ['Caso clínico I', 'Caso clínico II', 'Discusión y conclusiones'],
      duration: '3 h',
    },
    {
      number: '05',
      title: 'Práctica avanzada',
      lessons: ['Técnicas avanzadas', 'Situaciones especiales', 'Complicaciones frecuentes'],
      duration: '4 h',
    },
    {
      number: '06',
      title: 'Evaluación final y certificación',
      lessons: ['Repaso general', 'Examen final', 'Obtención del certificado'],
      duration: '2 h',
    },
  ],
}

export const INSTRUCTORS = {
  eyebrow: 'Profesorado',
  title: 'Aprende de especialistas en activo',
  subtitle:
    'Un claustro de médicos con trayectoria asistencial, docente e investigadora en hospitales y universidades europeas.',
  items: [
    {
      name: 'Dra. Nombre Apellido',
      role: 'Directora académica · Especialista',
      bio: 'Más de 20 años de experiencia asistencial y docente. Placeholder de biografía.',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Nombre Apellido',
      role: 'Coordinador docente · Especialista',
      bio: 'Investigador y profesor universitario. Placeholder de biografía.',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dra. Nombre Apellido',
      role: 'Profesora · Especialista',
      bio: 'Experta en su área con amplia actividad congresual. Placeholder de biografía.',
      image:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    },
  ],
}

export const TESTIMONIALS = {
  eyebrow: 'Opiniones',
  title: 'Lo que dicen nuestros alumnos',
  items: [
    {
      quote:
        'El mejor curso online que he hecho: contenido riguroso, casos reales y un profesorado siempre disponible. Lo recomiendo a cualquier compañero.',
      name: 'Nombre Apellido',
      role: 'Médica de familia',
    },
    {
      quote:
        'La flexibilidad fue clave para mí durante la residencia. Pude avanzar a mi ritmo y el certificado me sirvió para mi currículum.',
      name: 'Nombre Apellido',
      role: 'Residente de medicina interna',
    },
    {
      quote:
        'Material de altísima calidad y una plataforma muy cuidada. Se nota el nivel académico de la institución detrás.',
      name: 'Nombre Apellido',
      role: 'Estudiante de 6.º de Medicina',
    },
  ],
}

export const PRICING = {
  eyebrow: 'Inscripción',
  title: 'Una única matrícula, acceso completo',
  subtitle: 'Sin cuotas ni sorpresas. Pago único y seguro con tarjeta a través de Stripe.',
  includes: [
    'Acceso de por vida a los 12 módulos',
    '40 horas de vídeo y material descargable',
    'Tutorías y foro privado con el profesorado',
    'Casos clínicos comentados',
    'Certificado oficial de la Academia',
    'Actualizaciones del contenido incluidas',
  ],
  guarantee: 'Garantía de devolución de 14 días. Si el curso no es para ti, te devolvemos el importe íntegro.',
  cta: 'Inscribirme ahora',
}

export const FAQ = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas',
  items: [
    {
      question: '¿A quién va dirigido el curso?',
      answer:
        'A médicos, residentes y estudiantes de ciencias de la salud que quieran actualizar y profundizar sus conocimientos con una formación online de nivel europeo.',
    },
    {
      question: '¿Cuánto tiempo tengo para completarlo?',
      answer:
        'El acceso es de por vida: puedes completar el curso a tu ritmo, sin fechas límite, y volver al contenido siempre que lo necesites.',
    },
    {
      question: '¿Obtendré un certificado?',
      answer:
        'Sí. Al superar la evaluación final recibirás un certificado digital de la Academia Europea de Medicina que acredita las horas y competencias del curso.',
    },
    {
      question: '¿Cómo se realiza el pago?',
      answer:
        'El pago es único y se realiza de forma segura con tarjeta a través de Stripe. Recibirás la confirmación y el recibo por correo electrónico automáticamente.',
    },
    {
      question: '¿Hay garantía de devolución?',
      answer:
        'Sí, dispones de 14 días desde la compra para solicitar la devolución íntegra del importe si el curso no cumple tus expectativas.',
    },
    {
      question: '¿Cuándo empiezo tras inscribirme?',
      answer:
        'Inmediatamente. Tras confirmarse el pago recibirás un correo con tus credenciales de acceso al campus virtual.',
    },
  ],
}

export const FINAL_CTA = {
  title: 'Da el siguiente paso en tu carrera médica',
  subtitle:
    'Únete a los más de 2.500 profesionales que ya se han formado con la Academia Europea de Medicina.',
  cta: 'Inscribirme ahora',
}

export const FOOTER = {
  description:
    'La Academia Europea de Medicina imparte formación online de excelencia para profesionales y estudiantes de ciencias de la salud.',
  columns: [
    {
      title: 'Curso',
      links: [
        { label: 'Programa', href: '/#programa' },
        { label: 'Metodología', href: '/#metodologia' },
        { label: 'Profesorado', href: '/#profesorado' },
        { label: 'Inscripción', href: '/#inscripcion' },
      ],
    },
    {
      title: 'Academia',
      links: [
        { label: 'Opiniones', href: '/#opiniones' },
        { label: 'Preguntas frecuentes', href: '/#faq' },
        { label: 'Contacto', href: 'mailto:info@eapmed.org' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Aviso legal', href: '#' },
        { label: 'Política de privacidad', href: '#' },
        { label: 'Condiciones de compra', href: '#' },
      ],
    },
  ],
}
