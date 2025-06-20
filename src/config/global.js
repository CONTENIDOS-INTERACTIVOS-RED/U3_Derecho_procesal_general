export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Procesos en el Código General del Proceso',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clases de procesos y estructura general del proceso civil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de los procesos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura del proceso civil',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La prueba en el proceso civil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios rectores y carga de la prueba',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medios de prueba y procedimiento probatorio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Valoración de la prueba',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Decisiones judiciales y recursos procesales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de decisiones judiciales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Recursos ordinarios',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Recursos extraordinarios',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Reynal Querol, N. (2008). La prejudicialidad en el proceso civil. J. M. BOSCH EDITOR. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/52261?page=1',
    },
    {
      referencia:
        'Gómez Sánchez, J. (2004). Los procesos civiles declarativos. Dykinson. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60825?page=33',
    },
    {
      referencia:
        'Gómez Sánchez, J. (2006). Los procesos civiles especiales. Dykinson. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60898?page=1',
    },
    {
      referencia:
        'Morello, A. M. (2001). El proceso civil moderno. Librería Editora Platense S.R.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66581',
    },
    {
      referencia:
        'Muñoz Sabaté, L. (2018). Summa de probática civil: cómo probar los hechos en el proceso civil. (3a ed.). LA LEY Soluciones Legales S.A. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/56019?page=61',
    },
    {
      referencia:
        'Picó i Junoy, J. (2008). La prueba pericial en el proceso civil español: Ley 1/2000, de Enjuiciamiento Civil. J.M. BOSCH EDITOR. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/36671?page=48',
    },
    {
      referencia:
        'Gaceta Jurídica, G. (2014). Jurisprudencia procesal civil: medios probatorios. El Cid Editor. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/30519?page=66',
    },
    {
      referencia:
        'Navarro Albiña, R. D. (2014). Bases Para una Sana Crítica: Lógica, Interpretación, Argumentación, Máximas De La Experiencia, Conocimiento Científico. RiL editores. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67319?page=40',
    },
    {
      referencia:
        'Ortells Ramos, M. & Bellido Penadés, R. (2016). Los recursos en el proceso civil: continuidad y reforma. Dykinson. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58796?page=23',
    },
    {
      referencia:
        'Ormazabal Sánchez, G. (2011). Discriminación y carga de la prueba en el proceso civil. Marcial Pons. Ediciones Jurídicas y Sociales. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58728?page=1',
    },
    {
      referencia:
        'Yuquilema Gavilanes, J. I. & Flor Rubianes, J. M. (2016). Teoría general de recursos procesales (5 ed.). Corporación de Estudios y Publicaciones. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/115669?page=8',
    },
    {
      referencia:
        'Cifuentes Muñoz, E. (2005). Tutela contra sentencias (el caso colombiano). Red Ius et Praxis. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/11092?page=26',
    },
    {
      referencia:
        'Hitters, J. C. (2007). Técnica de los recursos extraordinarios y de la casación. Librería Editora Platense S. R. L. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/66571?page=172',
    },
  ],
  glosario: [
    {
      termino: 'Auto interlocutorio',
      significado:
        'Decisión judicial que resuelve aspectos relevantes del proceso sin decidir sobre el fondo del litigio.',
    },
    {
      termino: 'Auto de sustanciación',
      significado:
        'Providencia judicial que permite el desarrollo procesal sin resolver temas sustanciales.',
    },
    {
      termino: 'Carga de la prueba',
      significado:
        'Obligación procesal de una parte de demostrar los hechos en los que basa sus pretensiones o defensas.',
    },
    {
      termino: 'Confesión',
      significado:
        'Declaración voluntaria de una parte sobre hechos que le son desfavorables y favorables a la contraparte.',
    },
    {
      termino: 'Dictamen pericial',
      significado:
        'Informe técnico o científico presentado por un experto sobre hechos que requieren conocimiento especializado.',
    },
    {
      termino: 'Inspección judicial',
      significado:
        'Medio probatorio que permite al juez examinar directamente personas, lugares, cosas o documentos.',
    },
    {
      termino: 'Jurisdicción voluntaria',
      significado:
        'Tipo de proceso donde no existe conflicto entre partes y se solicita intervención judicial para validar actos jurídicos.',
    },
    {
      termino: 'Medios de prueba',
      significado:
        'Instrumentos procesales utilizados para demostrar los hechos afirmados en el proceso.',
    },
    {
      termino: 'Principio de contradicción',
      significado:
        'Garantía que permite a las partes conocer, controvertir y participar en la práctica de las pruebas.',
    },
    {
      termino: 'Principio de inmediación',
      significado:
        'Requiere que el juez que valora las pruebas sea el mismo que las practica y decide el caso.',
    },
    {
      termino: 'Principio de legalidad probatoria',
      significado:
        'Prohíbe la admisión o valoración de pruebas obtenidas con violación de derechos fundamentales.',
    },
    {
      termino: 'Proceso declarativo',
      significado:
        'Proceso judicial orientado a obtener del juez una declaración sobre una relación jurídica.',
    },
    {
      termino: 'Proceso ejecutivo',
      significado:
        'Procedimiento judicial que busca hacer efectiva una obligación contenida en un título ejecutivo.',
    },
    {
      termino: 'Proceso liquidatorio',
      significado:
        'Proceso que busca distribuir ordenadamente un patrimonio común en casos como sucesión o disolución.',
    },
    {
      termino: 'Recurso de apelación',
      significado:
        'Medio procesal que permite que un juez superior revise una decisión de primera instancia.',
    },
    {
      termino: 'Recurso de casación',
      significado:
        'Recurso extraordinario para corregir errores jurídicos y garantizar la uniformidad en la interpretación del derecho.',
    },
    {
      termino: 'Recurso de revisión',
      significado:
        'Procedimiento extraordinario para impugnar sentencias firmes obtenidas con fraude o violación de garantías.',
    },
    {
      termino: 'Sentencia',
      significado:
        'Decisión judicial definitiva que resuelve el fondo del litigio y pone fin a la instancia.',
    },
    {
      termino: 'Testimonio',
      significado:
        'Declaración de un tercero sobre hechos relevantes del caso, prestada bajo juramento.',
    },
    {
      termino: 'Valoración de la prueba',
      significado:
        'Análisis racional y motivado que el juez realiza sobre los medios de prueba presentados.',
    },
  ],
}
