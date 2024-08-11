const { description } = require('../../package')

module.exports = {

  publicPath: process.env.NODE_ENV === "production" ? "/mokymai/" : "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'IT Mokymai',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'icon', href: '/logo.png' }] // favicon
    // ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-XDVTG3JS66' }],
    // ['script', {}, `window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'G-XDVTG3JS66');`]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '/mokymai/',
    // repoLabel: 'Contribute!',
    docsDir: 'docs',
    smoothScroll: true,
    nav: [
      { text: 'Pradžia', link: '/' },
      // { text: 'Testas', link: '/testas/' },
      // { text: 'Word', link: '/word/' },
      // { text: 'Excel', link: '/excel/' },
      // { text: 'Programavimas C++', link: '/programavimas-cpp/' },
      {
        text: 'Programavimas',
        items: [
          { text: 'Python', link: '/programavimas-python/' },
          { text: 'C++', link: '/programavimas-cpp/' },
          { text: 'Golang', link: '/programavimas-go/' },
        ]
      },
      {
        text: 'Front-end pradmenys',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/' },
        ]
      },
      { text: 'Paskaitos', link: '/paskaitos/2021-2022/' },
      // { text: 'Egzaminų užduotys', link: '/egzaminu-uzduotys/' },
      { text: 'Pasiūlymai', link: '/pasiulymai/' },
      { text: 'Apie mus',
        items: [
          // { text: 'Apie mus', link: '/apie-mus/' },
          { text: 'Tikslas', link: '/tikslas/' },
          { text: 'Kontaktai', link: '/kontaktai/' },
        ]
      },
    ],
    sidebar: {
      '/programavimas-python/': [
        {
          title: 'Programavimas Python',
          children: [
            '/programavimas-python/',
          ]
        },
        {
          title: 'Darbo aplinka',
          children: [
            '/programavimas-python/darbo-aplinka/aplinkos-pasiruosimas/',
            '/programavimas-python/darbo-aplinka/interpretitoriaus-ir-darbo-faile-skirtumai/',
          ]
        },
        {
          title: 'Skaičiai ir matematika (1)',
          children: [
            '/programavimas-python/skaiciai-ir-matematika-1/'
          ]
        },
        {
          title: 'Kodo tvarkingumas',
          children: [
            '/programavimas-python/kodo-tvarkingumas/'
          ]
        },
        {
          title: 'Kintamieji ir duomenų tipai',
          children: [
            '/programavimas-python/kintamieji-ir-duomenu-tipai/'
          ]
        },
        {
          title: 'Informacijos išvedimas į konsolę',
          children: [
            '/programavimas-python/informacijos-isvedimas-i-konsole/'
          ]
        },
        {
          title: 'Skaičiai ir matematika (2) / Aritmetiniai veiksmai',
          children: [
            '/programavimas-python/skaiciai-ir-matematika-2/'
          ]
        },
        {
          title: 'Informacijos nuskaitymas iš konsolės',
          children: [
            '/programavimas-python/informacijos-nuskaitymas-is-konsoles/',
          ]
        },
        {
          title: 'Patikrinimo sąlygos (if, loginiai operatoriai)',
          children: [
            '/programavimas-python/patikrinimo-salygos/if/',
            '/programavimas-python/patikrinimo-salygos/if/if-dalis/',
            '/programavimas-python/patikrinimo-salygos/if/elif-dalis/',
            '/programavimas-python/patikrinimo-salygos/if/else-dalis/',
            '/programavimas-python/patikrinimo-salygos/if/pilna-if-salyga/',
            '/programavimas-python/patikrinimo-salygos/loginiai-patikrinimo-operatoriai/',
          ]
        },
        {
          title: 'Žinių užtvirtinimas (1)',
          children: [
            '/programavimas-python/ziniu-uztvirtinimas-1/',
          ]
        },
        {
          title: 'range() arba ranges',
          children: [
            '/programavimas-python/range/',
          ]
        },
        {
          title: 'Ciklai (for, while)',
          children: [
            '/programavimas-python/ciklai/',
            '/programavimas-python/ciklai/for/',
            '/programavimas-python/ciklai/while/',
          ]
        },
        {
          title: 'Sąrašai (lists)',
          children: [
            '/programavimas-python/lists/'
          ]
        },
        {
          title: 'Žodynai (dictionaries)',
          children: [
            '/programavimas-python/dictionaries/'
          ]
        },
        {
          title: 'Nekeičiami sąrašai (tuples)',
          children: [
            '/programavimas-python/tuples/'
          ]
        },
        {
          title: 'Rinkiniai (sets)',
          children: [
            '/programavimas-python/sets/'
          ]
        },
        {
          title: 'Darbas su failais',
          children: [
            '/programavimas-python/darbas-su-failais/',
            '/programavimas-python/darbas-su-failais/nuskaitymas/',
            '/programavimas-python/darbas-su-failais/isvedimas/',
            '/programavimas-python/darbas-su-failais/darbas-su-keliais-failais/',
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-python/funkcijos/',
            '/programavimas-python/funkcijos/paprasciausios-funkcijos/',
            '/programavimas-python/funkcijos/funkcijos-su-argumentais/',
            '/programavimas-python/funkcijos/funkcijos-su-grazinimo-tipu/',
          ]
        },
        {
          title: 'Objektinis programavimas',
          children: [
            '/programavimas-python/objektinis-programavimas/',
            // '/programavimas-python/objektinis-programavimas/strukturos/',
            // '/programavimas-python/objektinis-programavimas/strukturos/kurimas-ivedimas-isvedimas/',
            // '/programavimas-python/objektinis-programavimas/strukturos/funkcijos-metodai/',
            // '/programavimas-python/objektinis-programavimas/strukturos/konstruktoriai/',
            // '/programavimas-python/objektinis-programavimas/strukturos/objektu-masyvai/ivedimas-isvedimas/',
            // '/programavimas-python/objektinis-programavimas/strukturos/objektu-masyvai/skaiciavimai/',
            // '/programavimas-python/objektinis-programavimas/strukturos/objektu-masyvai/rikiavimas/',
            // '/programavimas-python/objektinis-programavimas/klases/',
          ]
        },
        {
          title: 'Pasiruošimas informatikos VBE',
          children: [
            '/programavimas-python/pasiruosimas-informatikos-vbe/',
          ]
        },
        // {
        //   title: 'Papildomai: GUI (Grafinė vartotojo sąsaja)',
        //   children: [
        //     // '/programavimas-python/gui/',
        //     '/programavimas-python/gui/aplinkos-pasiruosimas/',
        //     '/programavimas-python/gui/1-dalis/',
        //     '/programavimas-python/gui/2-dalis/',
        //   ]
        // },
        // {
        //   title: 'aaaaa',
        //   children: [
        //     '/programavimas-python/aaaaa/',
        //   ]
        // },
      ],
      '/programavimas-go/': [
        {
          title: 'Programavimas Golang',
          children: [
            '/programavimas-go/',
          ]
        },
        {
          title: 'Aritmetiniai veiksmai',
          children: [
            '/programavimas-go/aritmetiniai-veiksmai/',
          ]
        },
      ],
      '/programavimas-cpp/': [
        {
          title: 'Programavimas C++',
          children: [
            '/programavimas-cpp/',
          ]
        },
        {
          title: 'Darbo aplinka',
          children: [
            '/programavimas-cpp/darbo-aplinka/',
          ]
        },
        {
          title: 'Kodo tvarkingumas',
          children: [
            '/programavimas-cpp/kodo-tvarkingumas/',
          ]
        },
        {
          title: 'Kintamieji',
          children: [
            '/programavimas-cpp/kintamieji/',
          ]
        },
        {
          title: 'Informacijos išvedimas į konsolę (cout)',
          children: [
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/paprasto-teksto-isvedimas/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/kintamuju-isvedimas/',
            '/programavimas-cpp/informacijos-isvedimas-i-konsole/teksto-ir-kintamuju-isvedimas/',
          ]
        },
        {
          title: 'C++ programos struktūra',
          children: [
            '/programavimas-cpp/cpp-programos-struktura/'
          ]
        },
        {
          title: 'Aritmetiniai veiksmai',
          children: [
            '/programavimas-cpp/aritmetiniai-veiksmai/',
          ]
        },
        {
          title: 'Informacijos nuskaitymas iš konsolės (cin, getline, get)',
          children: [
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/paprasto-teksto-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/skaiciu-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/tiesos-netiesos-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/simbolio-nuskaitymas/',
            '/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/papildomos-uzduotys/',
          ]
        },
        {
          title: 'Patikrinimo sąlygos (if, switch)',
          children: [
            '/programavimas-cpp/patikrinimo-salygos/if/',
            '/programavimas-cpp/patikrinimo-salygos/if/if-dalis/',
            '/programavimas-cpp/patikrinimo-salygos/if/else-if-dalis/',
            '/programavimas-cpp/patikrinimo-salygos/if/else-dalis/',
            '/programavimas-cpp/patikrinimo-salygos/if/pilna-if-salyga/',
            '/programavimas-cpp/patikrinimo-salygos/loginiai-patikrinimo-operatoriai/',
            '/programavimas-cpp/patikrinimo-salygos/switch/',
          ]
        },
        {
          title: 'Ciklai (for, while, do while)',
          children: [
            '/programavimas-cpp/ciklai/',
            '/programavimas-cpp/ciklai/for/',
            '/programavimas-cpp/ciklai/while/',
            '/programavimas-cpp/ciklai/do-while/',
          ]
        },
        {
          title: 'Papildomos užduotys',
          children: [
            '/programavimas-cpp/papildomos-uzduotys-1/'
          ]
        },
        {
          title: 'Masyvai ir algoritmai',
          children: [
            '/programavimas-cpp/masyvai-ir-algoritmai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/ivedimas-isvedimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/algoritmai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/skaiciavimai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/atrinkimas-filtravimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/paieska/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/rikiavimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vienmaciai/keitimas/',
            '/programavimas-cpp/masyvai-ir-algoritmai/dvimaciai/',
            '/programavimas-cpp/masyvai-ir-algoritmai/vektoriai/',
          ]
        },
        {
          title: 'Papildomos užduotys',
          children: [
            '/programavimas-cpp/papildomos-uzduotys-2/'
          ]
        },
        {
          title: 'Darbas su duomenų failais',
          children: [
            '/programavimas-cpp/darbas-su-duomenu-failais/',
            '/programavimas-cpp/darbas-su-duomenu-failais/nuskaitymas/',
            '/programavimas-cpp/darbas-su-duomenu-failais/isvedimas/',
            '/programavimas-cpp/darbas-su-duomenu-failais/darbas-su-keliais-failais/',
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-cpp/funkcijos/',
            '/programavimas-cpp/funkcijos/paprasciausios-funkcijos/',
            '/programavimas-cpp/funkcijos/funkcijos-su-argumentais/',
            '/programavimas-cpp/funkcijos/funkcijos-su-grazinimo-tipu/',
            '/programavimas-cpp/funkcijos/reiksmiu-grazinimas-per-funkcijos-parametrus/',
            '/programavimas-cpp/funkcijos/bendravardes-funkcijos/',
          ]
        },
        {
          title: 'Objektinis programavimas',
          children: [
            '/programavimas-cpp/objektinis-programavimas/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/kurimas-ivedimas-isvedimas/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/funkcijos-metodai/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/konstruktoriai/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/objektu-masyvai/ivedimas-isvedimas/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/objektu-masyvai/skaiciavimai/',
            '/programavimas-cpp/objektinis-programavimas/strukturos/objektu-masyvai/rikiavimas/',
            '/programavimas-cpp/objektinis-programavimas/klases/',
          ]
        },
        {
          title: 'Pasiruošimas informatikos VBE',
          children: [
            '/programavimas-cpp/pasiruosimas-informatikos-vbe/',
          ]
        },
        {
          title: 'Papildomai: GUI (Grafinė vartotojo sąsaja)',
          children: [
            // '/programavimas-cpp/gui/',
            '/programavimas-cpp/gui/aplinkos-pasiruosimas/',
            '/programavimas-cpp/gui/1-dalis/',
            '/programavimas-cpp/gui/2-dalis/',
          ]
        },
      ],
      '/html': [
        {
          title: 'HTML istorija',
          children: [
            '/html/html-istorija/',
          ]
        },
        {
          title: 'HTML pradmenys',
          children: [
            '/html/html-pradmenys/',
          ]
        },
        {
          title: 'HTML žymės',
          children: [
            '/html/html-zymes/',
          ]
        },
        {
          title: 'HTML atributai',
          children: [
            '/html/html-atributai/',
          ]
        },
        {
          title: 'HTML spalvos',
          children: [
            '/html/html-spalvos/',
          ]
        },
        {
          title: 'HTML formos',
          children: [
            '/html/html-formos/',
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          children: [
            '/css/',
          ]
        },
        // {
        //   title: 'Įvadas į Microsoft Excel (skirtumai tarp skirtingų Office versijų)',
        //   children: [
        //     '/css/ivadas-i-css/',
        //   ]
        // },
        {
          title: 'Santykinės, absoliučiosios ir mišriosios langelių koordinatės',
          children: [
            '/css/santykines-absoliuciosios-ir-misriosios-langeliu-koordinates/',
          ]
        },
        {
          title: 'Matematinės funkcijos',
          children: [
            '/css/matematines-funkcijos/',
            // '/css/matematines-funkcijos/sum-funkcija/',
            // '/css/matematines-funkcijos/abs-funkcija/',
            // '/css/matematines-funkcijos/sqrt-funkcija/',
            // '/css/matematines-funkcijos/trunc-funkcija/',
            // '/css/matematines-funkcijos/round-funkcija/',
            // '/css/matematines-funkcijos/count-funkcija/',
          ]
        },
        {
          title: 'Trigonometrinės funkcijos',
          children: [
            '/css/trigonometrines-funkcijos/',
            // '/css/trigonometrines-funkcijos/pi-funkcija/',
            // '/css/trigonometrines-funkcijos/radians-funkcija/',
            // '/css/trigonometrines-funkcijos/sin-funkcija/',
            // '/css/trigonometrines-funkcijos/cos-funkcija/',
            // '/css/trigonometrines-funkcijos/cot-funkcija/',
            // '/css/trigonometrines-funkcijos/tan-funkcija/',
            // '/css/trigonometrines-funkcijos/log-funkcija/',
          ]
        },
        {
          title: 'Statistinės funkcijos',
          children: [
            '/css/statistines-funkcijos/',
            // '/css/statistines-funkcijos/average-funkcija/',
            // '/css/statistines-funkcijos/min-funkcija/',
            // '/css/statistines-funkcijos/max-funkcija/',
          ]
        },
        {
          title: 'Datos ir laiko funkcijos',
          children: [
            '/css/datos-ir-laiko-funkcijos/',
            // '/css/datos-ir-laiko-funkcijos/today-funkcija/',
            // '/css/datos-ir-laiko-funkcijos/date-funkcija/',
          ]
        },
        {
          title: 'Sudėtingesnės (loginės) matematinės funkcijos',
          children: [
            '/css/sudetingesnes-logines-matematines-funkcijos/',
            // '/css/sudetingesnes-logines-matematines-funkcijos/countif-funkcija/',
            // '/css/sudetingesnes-logines-matematines-funkcijos/sumif-funkcija/',
          ]
        },
        {
          title: 'Loginės funkcijos',
          children: [
            '/css/logines-funkcijos/',
            '/css/logines-funkcijos/if-funkcija/',
            '/css/logines-funkcijos/and-funkcija/',
            '/css/logines-funkcijos/or-funkcija/',
            '/css/logines-funkcijos/not-funkcija/',
          ]
        },
        {
          title: 'Duomenų rikiavimas pagal kelis raktus',
          children: [
            '/css/duomenu-rikiavimas-pagal-kelis-raktus/',
          ]
        },
        {
          title: 'Filtravimas',
          children: [
            '/css/filtravimas/',
          ]
        },
        {
          title: 'Duomenų atvaizdavimas diagramomis',
          children: [
            '/css/duomenu-atvaizdavimas-diagramomis/',
          ]
        },
        {
          title: 'Dokumento paruošimas spausdinimui',
          children: [
            '/css/dokumento-paruosimas-spausdinimui/',
          ]
        },
      ],
      // '/egzaminu-uzduotys/': [
      //   {
      //     title: 'Egzaminų užduotys',
      //     path: '/egzaminu-uzduotys/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // '/apie-projekta/': [
      //   {
      //     title: 'Apie projektą',
      //     path: '/apie-projekta/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // Saugus ir teisėtas informacijos ir interneto naudojimas (testas)
      // '/testas/': [
      //   {
      //     title: 'Testas',
      //     path: '/testas/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // Tekstinių dokumentų maketavimas (Microsoft Word)
      // '/word/': [
      //   {
      //     title: 'Microsoft Word',
      //     path: '/word/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      // Skaitinės informacijos apdorojimas skaičiuokle (Microsoft Excel)
      // '/excel/': [
      //   {
      //     title: 'Microsoft Excel',
      //     path: '/excel/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
      '/paskaitos/': [
        {
          title: 'Paskaitos',
          path: '/paskaitos/',
          children: [
            // '/paskaitos/',
            '/paskaitos/2021-2022/',
            '/paskaitos/2020-2021/',
          ]
        }
      ],
      // '/naujienos/': [
      //   {
      //     title: 'Naujienos',
      //     path: '/naujienos/',
      //     children: [
      //       '',
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [
    // ['@vuepress/plugin-back-to-top'],
    // ['@vuepress/plugin-medium-zoom'],
  // ]
}
