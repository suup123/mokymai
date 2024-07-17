(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{505:function(a,t,s){"use strict";s.r(t);var i=s(14),r=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"darbas-su-duomenu-failais"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#darbas-su-duomenu-failais"}},[a._v("#")]),a._v(" Darbas su duomenų failais")]),a._v(" "),t("h2",{attrs:{id:"vaizdo-pamoka"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vaizdo-pamoka"}},[a._v("#")]),a._v(" Vaizdo pamoka")]),a._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/QpBZFGF49J4?start=308&end=774",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a._v(" "),t("h2",{attrs:{id:"apie-darba-su-duomenu-failais"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apie-darba-su-duomenu-failais"}},[a._v("#")]),a._v(" Apie darbą su duomenų failais")]),a._v(" "),t("ul",[t("li",[a._v("Norint nuskaityti informaciją iš failo arba išvesti informaciją į failą, reikės susikurti norimos krypties srauto operatorių, atsidaryti failą, atlikti nuskaitymo ar įrašymo veiksmus ir uždaryti failą.")]),a._v(" "),t("li",[a._v("Nuskaitymas ar išvedimas į failą bus labai panašus į nuskaitymą ar išvedimą į konsolę, kuomet teko naudoti "),t("code",[a._v("cin")]),a._v(" ir "),t("code",[a._v("cout")]),a._v(", vienintelis skirtumas - jūs susikursite savo srauto operatorių ir naudosite jį.")]),a._v(" "),t("li",[a._v("Su tuo pačiu failu vienu metu galite atlikti tik nuskaitymo arba išvedimo veiksmą.")])]),a._v(" "),t("h2",{attrs:{id:"naudojama-biblioteka"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naudojama-biblioteka"}},[a._v("#")]),a._v(" Naudojama biblioteka")]),a._v(" "),t("p",[a._v("Norint nuskaityti informaciją iš failo ar išvesti ką nors į failą, bus reikalinga "),t("code",[a._v("fstream")]),a._v(" biblioteka:")]),a._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("<fstream>")])]),a._v("\n")])])]),t("h2",{attrs:{id:"sintakse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sintakse"}},[a._v("#")]),a._v(" Sintaksė")]),a._v(" "),t("p",[a._v("Norint nuskaityti kažką iš failo arba kažką išvesti į failą, reikės susikurti atititinkamo tipo srauto operatorių, atsidaryti failą. O toliau, šių operatorių naudojimas yra toks pats kaip "),t("code",[a._v("cout")]),a._v(" ir "),t("code",[a._v("cin")]),a._v(" naudojimas dirbant su informacija iš ar į konsolę.")]),a._v(" "),t("p",[a._v("Nuskaitymo iš failo srauto operatoriaus kūrimas:")]),a._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[a._v("ifstream nuskaitymo_srautas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Išvedimo į failą srauto operatoriaus kūrimas:")]),a._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[a._v("ofstream isvedimo_srautas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Failo atsidarymas:")]),a._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[a._v("srauto_operatorius"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"failas.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Failo uždarymas:")]),a._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[a._v("srauto_operatorius"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Galima naudoti ir trumpesnę sintaksę. Srauto operatoriaus sukūrimas ir failo atsidarymas darbui:")]),a._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// failas nuskaitymui")]),a._v("\nifstream "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("operatorius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"failas.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// failas išvedimui")]),a._v("\nofstream "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("operatorius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"failas.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);