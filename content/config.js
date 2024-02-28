import { PhoneIcon, BoltIcon, ChartBarIcon, RocketLaunchIcon, ChartPieIcon, UserGroupIcon } from '@heroicons/vue/20/solid'
import { SparklesIcon, UsersIcon, PresentationChartLineIcon } from '@heroicons/vue/24/outline'

const globalConfig = {
  title: 'Agencia de Automatización de Procesos - AAP',
  description: 'Agencia de Automatización de Procesos (AAP), es una startup dedicada a transformar la forma en que las empresas operan.',
  navigation: false,
  hero: {
    title: 'Transformando tu Negocio con IA',
    description: 'En AAP, transformamos tu empresa integrando IA. Nuestro equipo de expertos te guía en la emocionante travesía de la automatización.',
    headline: {
      label: 'Made with Nuxt UI Pro',
      to: 'https://ui.nuxt.com/pro',
      icon: 'i-heroicons-arrow-top-right-on-square-20-solid'
    },
    links: [
      {
        label: 'Comenzar',
        to: 'mailto:mcaligares@gmail.com',
        size: 'xl',
        color: 'black',
        icon: 'i-heroicons-arrow-right-20-solid',
        trailing: true
      }
    ]
  },
  sections: [
    {
      title: 'Potencia tu Negocio con Chatbot',
      description: 'Descubre las ventajas de contar con nuestro servicio de chatbot, diseñado para elevar la eficiencia operativa y mejorar la experiencia del cliente. Con tecnología avanzada de IA, estamos aquí para llevar tu empresa al siguiente nivel.',
      id: 'features',
      align: 'left',
      image: '/image2.jpg',
      features: [
        {
          name: 'Atención 24/7',
          description: 'Ofrecemos asistencia 24/7 para respuestas rápidas y satisfacción constante del cliente.',
          icon: PhoneIcon,
        },
        {
          name: 'Eficiencia Operativa Ágil',
          description: 'Libera a tu equipo de tareas repetitivas, acelerando la resolución de problemas y permitiendo un enfoque estratégico.',
          icon: BoltIcon
        },
        {
          name: 'Datos y Análisis',
          description: 'Recopilamos datos durante las interacciones para personalizar servicios y facilitar decisiones informadas.',
          icon: ChartBarIcon
        }
      ],
      links: [
        {
          label: 'Explore components',
          to: '/pro/components',
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          trailing: true,
          size: 'md',
          class: 'ml-8'
        }
      ]
    },
    {
      title: 'Automatización de Procesos con IA',
      description: 'Experimenta un salto cuántico en la eficiencia operativa al automatizar con inteligencia artificial. Toma decisiones basadas en datos y mejora la experiencia del cliente a través de la personalización. Descubre el futuro empresarial con nuestra solución de automatización avanzada.',
      align: 'right',
      image: '/image3.jpg',
      features: [
        {
          name: 'Automatización',
          description: 'Automatiza tareas repetitivas con precisión, liberando tiempo para actividades más estratégicas y acelerando los procesos empresariales.',
          icon: RocketLaunchIcon
        },
        {
          name: 'Herramientas para toma de decisiones',
          description: 'La IA proporciona análisis detallados en tiempo real, permitiendo decisiones informadas y estratégicas respaldadas por datos precisos.',
          icon: ChartPieIcon
        },
        {
          name: 'Experiencia del cliente personalizada',
          description: 'Utiliza la IA para interactuar y personalizar servicios según las necesidades del cliente, mejorando la satisfacción y fomentando la lealtad del cliente.',
          icon: UserGroupIcon
        }
      ],
      links: [
        {
          label: 'Learn more',
          to: '/pro/guide/content',
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          trailing: true,
          size: 'md',
          class: 'ml-8'
        }
      ]
    }
  ],
  features: {
    title: 'Por qué elegirnos?',
    description: 'En la Agencia de Automatización de Procesos (AAP), ofrecemos soluciones personalizadas, guiando a tu negocio en la emocionante travesía de la automatización con innovación, acompañamiento especializado y un compromiso duradero para alcanzar nuevos niveles de éxito.',
    items: [
      {
        title: 'Innovación Personalizada',
        description: 'Soluciones a medida que maximizan la eficiencia de tu negocio con tecnologías innovadoras.',
        icon: SparklesIcon
      },
      {
        title: 'Acompañamiento Especializado',
        description: 'Guiamos tu travesía de automatización, desde la optimización hasta decisiones respaldadas por datos.',
        icon: UsersIcon
      },
      {
        title: 'Compromiso con el Éxito Duradero',
        description: 'Construimos asociaciones a largo plazo, priorizando tu éxito en la innovación, eficiencia y crecimiento sostenible.',
        icon: PresentationChartLineIcon
      }
    ]
  },
  testimonials: {
    headline: 'Testimonios',
    title: 'Lo que nuestros clientes están diciendo.',
    description: 'Clientes satisfechos nos elogian por nuestro enfoque personalizado, implementación sin complicaciones de tecnologías innovadoras, transformación efectiva de desafíos en oportunidades, y la construcción de asociaciones duraderas que impulsan el crecimiento sostenible de sus negocios.',
    items: [
      {
        quote: 'La AAP realmente entendió las necesidades únicas de nuestro negocio. Su enfoque personalizado en la automatización nos ha permitido maximizar la eficiencia y la productividad. ¡Una asociación que ha marcado la diferencia!',
        author: {
          name: 'Sandra G.',
          description: 'CEO at Company',
          avatar: {
            src: 'https://i.pravatar.cc/120?img=1',
            loading: 'lazy'
          }
        }
      },
      {
        quote: 'El equipo de AAP hizo que la implementación de la inteligencia artificial fuera completamente sin complicaciones. Desde la optimización de flujos de trabajo hasta tomar decisiones respaldadas por datos, su enfoque experto nos llevó a nuevos niveles de éxito.',
        author: {
          name: 'Juan R.',
          description: 'CEO at Company',
          avatar: {
            src: 'https://i.pravatar.cc/120?img=7',
            loading: 'lazy'
          }
        }
      },
      {
        quote: 'La innovación que AAP trajo a nuestra empresa fue asombrosa. Automatizaron nuestros procesos de una manera que nunca imaginamos, transformando desafíos en oportunidades tangibles. Una elección increíble para cualquier empresa que busque crecimiento sostenible.',
        author: {
          name: 'Carlos L.',
          description: 'CEO at Company',
          avatar: {
            src: 'https://i.pravatar.cc/120?img=3',
            loading: 'lazy'
          }
        }
      },
      {
        quote: 'La Agencia de Automatización de Procesos no solo implementó tecnología, construyeron una relación duradera. Su compromiso con nuestro éxito es evidente en cada paso de nuestro viaje hacia la eficiencia. ¡Gracias AAP por ser nuestro socio confiable!.',
        author: {
          name: 'Ana M.',
          description: 'CEO at Company',
          avatar: {
            src: 'https://i.pravatar.cc/120?img=5',
            loading: 'lazy'
          }
        }
      }
    ]
  },
  cta: {
    title: 'Empecemos hoy mismo',
    description: '¡Haz de la innovación tu aliada, únete hoy a la Agencia de Automatización de Procesos!',
    links: [
      {
        label: 'Contactanos',
        size: 'xl',
        color: 'black',
        to: 'mailto:mcaligares@gmail.com'
      }
    ]
  }
}

export default globalConfig
