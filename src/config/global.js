export default {
  global: {
    componenteFormativo:
      '<span1><em>Let’s talk and report about work topics the polite way </em></span1><br><span>Hablemos e informemos sobre temas de trabajo de manera educada</span>',
    descripcionCurso:
      'Este componente se enfocará en el discurso indirecto, o sea en cómo reportar información con diferentes verbos informativos, en diferentes tiempos gramaticales y hasta con diferentes verbos modales. También se aprenderán diferentes aspectos del discurso conectado, que nos indican cuándo juntar las palabras o cuándo no.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<i>Use of reporting verbs in the past, present, and future tenses</i> (Uso de los verbos para reportar en los tiempos pasado, presente y futuro)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Modal verbs</i> (verbos modales)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<i>Blending sounds like a native</i> (Ligando sonidos como un nativo)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '<i>Use of reporting verbs in the past, present and future tenses</i> (Uso de los verbos para reportar en los tiempos pasado, presente y futuro)',
      referencia:
        'BBC Learning English. (2021). <i>Live English Class - Reporting Verbs</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zIJeDh3e6G0',
    },
    {
      tema:
        '<i>Blending sounds like a native</i> (Ligando sonidos como un nativo)',
      referencia:
        'BBC Learning English. (2017). <i>Pronunciation: Consonant - vowel linking</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mV_CEIroJs8',
    },
    {
      tema:
        '<i>Blending sounds like a native</i> (Ligando sonidos como un nativo)',
      referencia:
        'BBC Learning English. (2020a). <i>Mini English Lessons: Connected Speech (part 1)</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=N2Au0UdymCU',
    },
    {
      tema:
        ' <i>Blending sounds like a native</i> (Ligando sonidos como un nativo)',
      referencia:
        'BBC Learning English. (2020b). <i>Mini English Lessons: Connected Speech (part 2)</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uzlIcTJyJ1s',
    },
  ],
  glosario: [
    {
      termino: '<i>Blending sounds</i> / Sonidos combinados',
      significado:
        'mezclar sonidos fonéticos, bien sea para formar una palabra a la hora de aprender a leerla, o mezclar el último sonido de una palabra con el primero de la palabra siguiente para “conectar el discurso”, de la misma forma que lo hacen los hablantes nativos cuando hablan con naturalidad en sus conversaciones cotidianas.',
    },
    {
      termino: '<i>Modal verbs</i> / Verbos modales',
      significado:
        'verbos que le dan a la oración un sentido extra de capacidad, posibilidad, certeza, permiso, requisitos, sugerencias y consejos. Se usan en conjunto con otros verbos principales (no modales), que son los que nos dicen cuál es la acción principal que se realiza.',
    },
    {
      termino: '<i>Reporting verbs</i> / Verbos para reportar',
      significado:
        'verbos usados para presentar la información (que alguien más ya dijo) que se va a reportar o retransmitir. Por ejemplo “<i><b>say</i></b>” (decir), “<i><b>tell</i></b>” (contar), “<i><b>ask</i></b>” (preguntar), “<i><b>explain</i></b>” (explicar), “<i><b>comment</i></b>” (comentar), etc.',
    },
    {
      termino: '<i>Verb tenses</i> / Tiempos verbales',
      significado: 'indican cuándo ocurrió la acción o condición del verbo.',
    },
  ],
  referencias: [
    {
      referencia:
        'BBC. (s. f.-a). <i>Unit 14: Towards Advanced. Grammar, news, vocabulary and pronunciation</i>. Learning English.',
      link:
        'https://www.bbc.co.uk/learningenglish/course/towards-advanced/unit-14/session-5#:~:text=Catenation%20%2D%20linking%20sounds%20together,had%20to%20give%20up%20jogging.',
    },
    {
      referencia:
        'BBC. (s. f.-b). <i>Learning English.  &#39Must&#39,  &#39need&#39 and &#39used to&#39 in reported speech</i>. BBC World Service.',
      link:
        'https://www.bbc.co.uk/worldservice/learningenglish/youmeus/learnit/learnitv3.shtml#:~:text=must%2C%20ought%20to%2C%20used%20to,exists%20only%20in%20the%20negative.',
    },
    {
      referencia:
        'British Council. (s. f.). <i>Reported speech 3 - reporting verbs</i>. British Council.',
      link:
        'https://learnenglish.britishcouncil.org/es/grammar/b1-b2-grammar/reported-speech-3-reporting-verbs',
    },
    {
      referencia:
        'New Castle University. (s. f.). <i>Reporting Verbs. Explore different ways of referring to literature and foregrounding your voice</i>. Academic Skills Kit.',
      link:
        'https://www.ncl.ac.uk/academic-skills-kit/writing/academic-writing/reporting-verbs/',
    },
    {
      referencia:
        'Steele, V. (s. f.). <i>Connected speech</i> 2. British Council TeachingEnglish.',
      link: 'https://www.teachingenglish.org.uk/article/connected-speech-2',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experto temático',
        centro:
          'CENIGRAF - Centro para la industria de la Comunicación Gráfica, Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
