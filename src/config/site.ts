export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    logo: string;
    logoInverted: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  ghlCalendarId: string;
  calendarBaseUrl: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
    canonicalUrl: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    trust: string;
    ctaPrimary: string;
  };
  trustIndicators: {
    logos: string[];
    metrics: string;
    objections: string[];
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      icon: string;
      description: string;
    }>;
    cta: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  infrastructure: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  educational: {
    title: string;
    subtitle: string;
    youtubeLink: string;
    videoUrl: string;
  };
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      description: string;
      image: string;
    }>;
  };
  testimonials: {
    title: string;
    items: Array<{
      quote: string;
      author: string;
      date: string;
      stars: number;
    }>;
  };
  loyalty: {
    title: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    questions: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    title: string;
    location: string;
    mapUrl: string;
    videoUrl: string;
    reasons: string[];
  };
  footer: {
    tagline: string;
    navLinks: string[];
    copyright: string;
  };
  social: {
    linkedin: string;
    facebook: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Dra. Clara Elisa Uribe Herrera',
    tagline: 'Psicología clínica con enfoque sistémico y holístico. Neuropsicología, terapia infantil y familiar.',
    logo: '/images/logo.svg',
    logoInverted: '/images/logo-inverted.svg',
  },
  whatsapp: {
    number: '+573143286618',
    defaultMessage: 'Hola Dra. Clara Elisa, me gustaría agendar una consulta psicológica.',
  },
  ghlCalendarId: 'lRPFwJAjpYNAAI66BHlY',
  calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/',
  seo: {
    title: 'Dra. Clara Elisa Uribe Herrera | Psicóloga Clínica en Bogotá',
    description: 'Psicóloga clínica con 22 años de experiencia. Especialista en neuropsicología, terapia infantil, autismo y terapia familiar. Consultas presenciales en Kennedy, Bogotá.',
    ogImage: '/og-image.jpeg',
    canonicalUrl: 'https://doctoraeileynne.co',
  },
  hero: {
    headline: 'Psicología con amor,\nexperiencia y propósito.',
    subheadline: 'Acompañamiento terapéutico con enfoque sistémico y holístico para niños, familias y adultos. 22 años de experiencia en neuropsicología, terapia infantil, evaluación de inteligencia y resolución de conflictos.',
    trust: '★ · Psicóloga Clínica | Núm. Colegiado: 252093',
    ctaPrimary: 'Agendar',
  },
  trustIndicators: {
    logos: ['Psicóloga Clínica', 'Terapia Sistémica', 'Neuropsicología'],
    metrics: '22 años de experiencia acompañando niños, familias y adultos',
    objections: ['Niños, adolescentes y adultos', 'Efectivo o Tarjeta de crédito', 'Consultas presenciales · Kennedy, Bogotá'],
  },
  services: {
    title: 'Especialidades',
    items: [
      {
        title: 'Consulta Psicológica',
        icon: '01',
        description: 'Diagnóstico inicial y acompañamiento en ansiedad, depresión, duelo y dependencia emocional. Desde $100.000',
      },
      {
        title: 'Psicoterapia Infantil',
        icon: '02',
        description: 'Acompañamiento para niños con dificultades emocionales, conductuales o de desarrollo. Desde $250.000',
      },
      {
        title: 'Asesoría en Autismo y Familias',
        icon: '03',
        description: 'Evaluación, acompañamiento y orientación para personas con autismo y sus familias. Desde $250.000',
      },
      {
        title: 'Terapia de Pareja',
        icon: '04',
        description: 'Mediación en conflictos, comunicación y resolución de conflictos de pareja. Desde $100.000',
      },
      {
        title: 'Evaluación Neuropsicológica',
        icon: '05',
        description: 'Evaluación integral en adolescentes y adultos. Incluye coeficiente intelectual y perfil neuropsicológico. Desde $200.000',
      },
      {
        title: 'Psicoterapia Adulto Mayor',
        icon: '06',
        description: 'Acompañamiento terapéutico y certificados de lucidez mental para adulto mayor. Desde $150.000',
      },
      {
        title: 'Terapia Familiar',
        icon: '07',
        description: 'Orientación y fortalecimiento de vínculos familiares con enfoque sistémico. Desde $100.000',
      },
    ],
    cta: 'Agenda tu consulta. Escríbenos por WhatsApp.',
  },
  process: {
    title: 'Metodología Clínica',
    subtitle: 'Un proceso cálido, riguroso e integrado con enfoque sistémico y holístico.',
    steps: [
      {
        number: '01',
        title: 'Agendas',
        description: 'Contacto sencillo y discreto. Tu cita coordinada de forma rápida presencial o en línea desde cualquier lugar.',
      },
      {
        number: '02',
        title: 'Evaluamos',
        description: 'Historia clínica profunda y evaluación psicológica integral con formación en neuropsicología y enfoque sistémico, en un entorno seguro y sin juicios.',
      },
      {
        number: '03',
        title: 'Tratamos',
        description: 'Psicoterapia individual, familiar o de pareja integrando terapia sistémica, holística y herramientas basadas en evidencia.',
      },
      {
        number: '04',
        title: 'Seguimos',
        description: 'Acompañamiento continuo con amor, empatía y propósito. Revisión de avances hasta restaurar el bienestar emocional y fortalecer los vínculos.',
      },
    ],
  },
  infrastructure: {
    title: 'Modalidades de Atención',
    items: [
      {
        title: 'Consulta Presencial',
        description: 'Atención en consultorio ubicado en Kennedy, Bogotá. Ambiente cálido, confidencial y profesional para niños, adolescentes y adultos.',
        image: '/infra-1.jpeg',
      },
      {
        title: 'Enfoque Sistémico y Holístico',
        description: 'Integración de terapia sistémica, terapia familiar y herramientas basadas en evidencia. Atención que reconoce la dimensión emocional, relacional y social.',
        image: '/infra-2.jpeg',
      },
      {
        title: 'Especialización en Niños y Neuropsicología',
        description: '22 años acompañando procesos de familias con niños y adolescentes. Evaluación neuropsicológica, CI, orientación vocacional y diagnóstico de autismo.',
        image: '/infra-3.jpeg',
      },
    ],
  },
  educational: {
    title: 'Psicología con propósito',
    subtitle: 'Conocimiento para el bienestar emocional y el fortalecimiento de familias.',
    youtubeLink: 'https://youtube.com',
    videoUrl: '/video-intro.mp4',
  },
  team: {
    title: 'Quién te acompaña',
    members: [
      {
        name: 'Dra. Clara Elisa Uribe Herrera',
        role: 'Psicóloga Clínica | Neuropsicología, Terapia Sistémica y Terapia Infantil',
        description: 'Soy psicóloga clínica con 22 años de experiencia acompañando procesos de familias con niños, niñas y adolescentes. Mi práctica integra la terapia sistémica, el enfoque holístico y la neuropsicología para brindar atención integral a niños, adultos y adultos mayores. Me he desempeñado en el Hospital del Sur E.S.E., Hospital Vista Hermosa E.S.E., Profamilia y la Gobernación del Meta. Cuento con reconocimientos de ONG Compassion International y UNICEF por mi labor con la infancia. Formación: Psicóloga de la Universidad Antonio Nariño, Especialista en Docencia Universitaria (Universidad Cooperativa de Colombia), Magíster en Neuropsicología con énfasis en Educación y Magíster en Mediación y Resolución de Conflictos (Universidad TECH). Núm. Colegiado: 252093.',
        image: '/hero.jpg',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen mis pacientes',
    items: [
      {
        quote: 'Todo el trabajo que ha tenido con mi hijo me ha gustado bastante. Hace muy buena terapia.',
        author: 'Lina R.',
        date: '28 de agosto de 2024',
        stars: 5,
      },
      {
        quote: 'Es una mujer muy íntegra e inteligente y amante de su profesión. Sabe tratar muy bien a los niños y les demuestra cariño y afecto.',
        author: 'Bibiana V.',
        date: '26 de agosto de 2024',
        stars: 5,
      },
      {
        quote: 'Excelencia en la consulta. Me parece súper la forma tan detallada del proceso.',
        author: 'Marlon S.',
        date: '24 de agosto de 2024',
        stars: 5,
      },
      {
        quote: 'Excelente. Buen trato con mi niño paciente, empática y muy atenta.',
        author: 'Nidya H.',
        date: '21 de agosto de 2024',
        stars: 5,
      },
      {
        quote: 'Es una profesional muy cálida, conoce mucho de su campo y acompaña muy bien cada proceso.',
        author: 'Carmen y Jorge',
        date: '13 de agosto de 2024',
        stars: 5,
      },
      {
        quote: 'Es una persona muy profesional, me hizo sentir a gusto.',
        author: 'L.M.',
        date: '15 de agosto de 2024',
        stars: 5,
      },
    ],
  },
  loyalty: {
    title: 'Nuestros Beneficios',
    benefits: [
      {
        title: '50% OFF',
        description: 'Por un referido',
      },
      {
        title: '1 Sesión Gratis',
        description: 'Por dos referidos',
      },
      {
        title: '15% OFF',
        description: 'En tu mes de cumpleaños',
      },
    ],
  },
  faq: {
    title: 'Preguntas Frecuentes',
    questions: [
      {
        q: '¿Cuáles son las especialidades principales de la Dra. Clara Elisa?',
        a: 'La Dra. Clara Elisa es Psicóloga Clínica y Neuropsicóloga con enfoque sistémico y holístico. Ofrece: Consulta Psicológica, Psicoterapia Infantil, Asesoría en Autismo, Terapia de Pareja, Evaluación Neuropsicológica, Evaluación de Inteligencia (CI), Psicoterapia para Adulto Mayor y Terapia Familiar.',
      },
      {
        q: '¿En dónde está ubicado el consultorio?',
        a: 'La Dra. Clara Elisa atiende en: Calle 8 #86-65 Apartamento 504 Torre 1, Kennedy, Bogotá 110110.',
      },
      {
        q: '¿Puedo tener la consulta en línea sin desplazarme?',
        a: 'Sí, la Dra. Clara Elisa ofrece consulta en línea. Consulta disponibilidad y agenda tu cita a través del formulario o por WhatsApp.',
      },
      {
        q: '¿Cómo se realiza el pago al finalizar la consulta?',
        a: 'La Dra. Clara Elisa recibe los siguientes métodos de pago: Efectivo y Tarjeta de crédito.',
      },
      {
        q: '¿Qué idiomas habla la Dra. Clara Elisa?',
        a: 'Puedes comunicarte con la Dra. Clara Elisa en Español.',
      },
      {
        q: '¿Cómo puedo reservar una cita?',
        a: 'Puedes agendar directamente desde el calendario en esta página o contactar por WhatsApp para ver disponibilidad. La reserva es gratuita y recibirás un recordatorio antes de la consulta.',
      },
      {
        q: '¿Atiende niños y adultos?',
        a: 'Sí. La Dra. Clara Elisa tiene 22 años de experiencia con niños, niñas, adolescentes y adultos. También ofrece servicios especializados para adulto mayor.',
      },
      {
        q: '¿Acepta aseguradoras?',
        a: 'Se aceptan aseguradoras, pero la cobertura varía según el servicio. Contáctanos directamente para confirmar. También se atienden pacientes particulares.',
      },
    ],
  },
  contact: {
    title: 'Agenda tu consulta',
    location: 'Calle 8 #86-65 Apt. 504 Torre 1, Kennedy, Bogotá 110110',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6789912345678!2d-74.15944932346816!3d4.701234496556217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7f5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sCalle%208%20%23%2086-65%2C%20Kennedy%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1718000000000',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reasons: ['Ansiedad o depresión', 'Terapia de pareja', 'Psicología infantil', 'Autismo', 'Neuropsicología', 'Adulto mayor', 'Duelo', 'Otro'],
  },
  footer: {
    tagline: 'Psicología clínica con amor y propósito. 22 años acompañando familias, niños y adultos.',
    navLinks: ['Especialidades', 'Proceso', 'Sobre mí', 'Reseñas', 'Ubicación'],
    copyright: '© 2026 Dra. Clara Elisa Uribe Herrera. Todos los derechos reservados.',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/clara-elisa-uribe-herrera-5131a423a/',
    facebook: 'https://www.facebook.com/Psicologaclaritauribe/',
  },
};
