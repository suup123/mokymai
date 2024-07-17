(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{478:function(i,a,s){"use strict";s.r(a);var e=s(14),t=Object(e.a)({},(function(){var i=this,a=i._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("h1",{attrs:{id:"pasiulymai-it-vbe-susitarimams-2021-22-mokslo-metams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pasiulymai-it-vbe-susitarimams-2021-22-mokslo-metams"}},[i._v("#")]),i._v(" Pasiūlymai IT VBE susitarimams 2021/22 mokslo metams")]),i._v(" "),a("p",[i._v("Susitarimai turi skatinti mokinių algoritminį mąstymą, kadangi pasiruošimas VBE yra svarbi mokymo dalis. Šiuo metu de facto yra nusistovėję susitarimai ankstesnių VBE pagrindu, dalis jų yra pagrįsti mokymo efektyvumo prasme, pvz. duomenyse nenaudojami lietuviški simboliai su nosinėmis ir varnelėmis ir tai gali toliau likti mokymo ir VBE metu. Kiti jau tampa neaktualūs   ir nėra efektyvūs mokymo eigoje.")]),i._v(" "),a("p",[i._v("Aptariant VBE užduotis yra remiamasi NŠA pateikiama informacija "),a("a",{attrs:{href:"https://www.nsa.smm.lt/stebesenos-ir-vertinimo-departamentas/pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/",target:"_blank",rel:"noopener noreferrer"}},[i._v("https://www.nsa.smm.lt/stebesenos-ir-vertinimo-departamentas/pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/"),a("OutboundLink")],1),i._v(".")]),i._v(" "),a("p",[a("strong",[i._v("1. Programavimo vardų susitarimai (Naming conventions)")])]),i._v(" "),a("p",[i._v('Siūlymo argumentai: lig šiol mokyklose nebuvo aiškaus vieningo stiliaus kaip konstruoti įvairių tipų kintamųjų, masyvų, struktūrų funkcijų vardus, todėl kai kurie vertinimo kriterijai yra abstraktūs, kaip "Prasmingai pavadinti kintamieji. Komentuojamos programos dalys, laikomasi rašybos taisyklių". Susitarimas palengvins mokytojų darbą aiškinant apie programavimo rašymo stilių.')]),i._v(" "),a("p",[i._v("Metodiniai sprendimai: yra pakankamai įvairių susitarimų pavyzdžių, reikėtų unifikuoti jau esamus stilius ir pritaikyti prie mūsų mokyklų poreikių.")]),i._v(" "),a("p",[i._v("Argumentai prieš: ...")]),i._v(" "),a("p",[a("strong",[i._v("2. Tekstinius duomenis VBE užduotyse rekomenduojama pateikti skyriklių pagalba, atsisakant vyravusio pozicinio pateikimo.")])]),i._v(" "),a("p",[i._v("Siūlymo argumentai: naudotas pozicinis teksto pateikimas yra neaktualus duomenų pasikeitimo sistemose, jo programavimui mokiniai turi naudoti senosios C kalbos stiliumi tarpinį "),a("code",[i._v("char")]),i._v(" masyvą. Mokymo eigoje veltui gaištamas laikas specifinio šablono įsiminimui. Dar papildomai reikėtų nukirpti baigiamuosius tarpus.")]),i._v(" "),a("p",[i._v("Metodiniai sprendimai: paieškos uždaviniuose reikia naudoti vieną žodį, tuo atveju skyriklis bus tarpas "),a("code",[i._v("cin >> vardas;")]),i._v(". Norint sujungti kelis vardus naudojami taškai, brūkšneliai. Uždaviniuose, kur naudojamos frazės, (pvz. knygos pavadinimas) naudojama "),a("code",[i._v("getline(cin, pavadinimas, ';')")]),i._v(" tiesiogiai nurodant skyriklį.")]),i._v(" "),a("p",[i._v("Argumentai prieš: ...")]),i._v(" "),a("p",[a("strong",[i._v("3. Sąrašo tipo duomenis rekomenduojama pateikti be perteklinio sąrašo elementų skaičiaus.")])]),i._v(" "),a("p",[i._v("Siūlymo argumentai: sąrašo pateikimas be pertekliaus yra natūralus, lengviau suprantama užduoties sąlyga. Elementų skaičiaus pateikimas prieš elementus prieštarauja sprendimo logikai, todėl mokiniams turi kilti klausimas kodėl tą daryti ruošiant duomenis.")]),i._v(" "),a("p",[i._v("Metodiniai sprendimai: kai duomenys pateikiami eilutėmis, naudojamas ciklas "),a("code",[i._v("while(!cin.eof()) { … }")]),i._v(". Kai sąrašo elementai pateikiami vienoje eilutėje, naudojamas "),a("code",[i._v("while()")]),i._v(" ciklas, įvertinantis konkrečius skyriklius, tame tarpe ir eilutės pabaigos simbolį "),a("code",[i._v("'\\n'.")]),i._v(". Apibendrinti atvejai yra pateikiami plačiau.")]),i._v(" "),a("p",[i._v("Argumentai prieš: ...")]),i._v(" "),a("p",[a("strong",[i._v("4. VBE užduotyse reikalavimuose rekomenduojama vector traktuoti kaip masyvo sinonimą.")])]),i._v(" "),a("p",[i._v("Siūlymo argumentai: C++ "),a("code",[i._v("vector")]),i._v(" tipas faktiškai atitinka dabartinėse programavimo kalbose naudojamą sąrašo sąvoką. Lig šiol mokyklose praktikuojamas masyvas poroje su elementų skaičiumi yra senosios C kalbos palikimas ir metodiškai nenaudotinas, kadangi reikia iš anksto rezervuoti atmintį. Jau daug metų pažangesni mokiniai kelia šį klausimą, neformaliai lyg tai leidžiama "),a("code",[i._v("vector")]),i._v(" naudoti, bet gali būti mažinami balai dėl VBE reikalavimų. Naudojant masyvus mokiniai praranda galimybę naudoti "),a("code",[i._v("foreach")]),i._v(" tipo ciklus. Pats uždavinių su sąrašais mokymas masyvų pagalba yra nerekomenduojamas programavimo edukologijos specialistų. C++ standartizavimo komitetas rekomenduoja naudoti vektorius vietoj masyvų. Taip pat, rekomenduojama vietoj vektoriaus "),a("code",[i._v("operator[]")]),i._v(" naudoti "),a("code",[i._v("at()")]),i._v(" metodą, nes jis tikrina ar argumentas yra tinkamame rėžyje. Žiūr.: "),a("a",{attrs:{href:"http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p1231r0.pdf",target:"_blank",rel:"noopener noreferrer"}},[i._v("http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p1231r0.pdf"),a("OutboundLink")],1),i._v(".")]),i._v(" "),a("p",[i._v("Metodiniai sprendimai: perėjimo metodika nuo masyvų prie "),a("code",[i._v("vector")]),i._v(" jau buvo pristata FB mokytojų grupėje pavyzdžių pagalba ir dar bus pateikiama atskirai.")]),i._v(" "),a("p",[i._v("Argumentai prieš: "),a("code",[i._v("vector")]),i._v(" nenaudojamas oficialiuose LT vadovėliuose.")])])}),[],!1,null,null,null);a.default=t.exports}}]);