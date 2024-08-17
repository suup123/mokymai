# HTML pradmenys

HTML (Hypertext Markup Language) yra esminė interneto kūrimo kalba, naudojama kurti struktūruotus dokumentus, kurie pateikiami žiniatinklyje. Šis vadovas apima visus pagrindinius HTML aspektus, pradedant nuo redaktorių pasirinkimo iki pagrindinių HTML elementų naudojimo.

## HTML redaktoriai

Norėdami kurti ir redaguoti HTML failus, jums reikia teksto redaktoriaus. Yra daugybė redaktorių, kuriuos galite naudoti, pradedant nuo paprasčiausių ir baigiant pažangesniais įrankiais, kurie suteikia papildomų funkcijų, tokių kaip sintaksės paryškinimas, automatinis užbaigimas ir klaidų patikrinimas.

### Paprasti teksto redaktoriai

- **Notepad (Windows)** - Tai paprasčiausias teksto redaktorius, kuris yra įdiegiamas su Windows operacine sistema. Nors jis neturi jokių pažangių funkcijų, jis puikiai tinka HTML kodo rašymui pradedantiesiems.
- **TextEdit (macOS)** - Tai pagrindinis teksto redaktorius, įdiegtas su macOS. Jei naudojate TextEdit HTML redagavimui, turite įsitikinti, kad dokumento formatas yra nustatytas į "Plain Text" režimą.

### Pažangesni redaktoriai

- **Visual Studio Code** - Vienas iš populiariausių atvirojo kodo redaktorių, turintis sintaksės paryškinimą, automatinį užbaigimą, įskiepių palaikymą ir daugelį kitų funkcijų. Visual Studio Code yra puikus pasirinkimas tiek pradedantiesiems, tiek pažengusiems vartotojams.
- **Sublime Text** - Greitas ir lengvas redaktorius, turintis daugybę funkcijų, įskaitant sintaksės paryškinimą, daugiakalbių projektų palaikymą ir labai lanksčius pritaikymo nustatymus.
- **Atom** - Kitas populiarus atvirojo kodo redaktorius, kurį sukūrė GitHub. Atom turi daugybę įskiepių, kurie padeda pritaikyti redaktorių pagal jūsų poreikius.

### Kodavimo aplinkos

- **CodePen** - Tai internetinė platforma, kuri leidžia tiesiogiai redaguoti HTML, CSS ir JavaScript kodą bei matyti realaus laiko rezultatus. Tai puiki priemonė eksperimentavimui ir dalinimuisi su kitais kūrėjais.
- **JSFiddle** - Kita internetinė aplinka, kuri palaiko HTML, CSS ir JavaScript kodavimą ir leidžia testuoti kodą realiu laiku.

## HTML failo struktūra

HTML failas turi standartinę struktūrą, kurią sudaro HTML elementai, kurių kiekvienas aprašomas atitinkamais žymenimis (tags). Žymenys apibrėžia dokumento struktūrą ir turinį.

```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mano pirmasis puslapis</title>
</head>
<body>
    <h1>Sveiki atvykę į mano puslapį!</h1>
    <p>Čia yra mano pirmasis HTML dokumentas.</p>
</body>
</html>
```
## HTML elementai

HTML elementai yra pagrindiniai blokai, iš kurių sudaromas HTML dokumentas. Kiekvienas elementas yra apibrėžiamas žymenimis (tags), kurie dažniausiai turi atidarantį ir uždarantį žymenį.

### Antraštės (Headings)

Antraštės naudojamos tekstui struktūrizuoti ir pabrėžti skirtingus turinio skyrius. HTML turi šešis antraščių lygius, pradedant nuo `<h1>` iki `<h6>`. `<h1>` yra svarbiausia antraštė, dažniausiai naudojama pagrindiniam puslapio pavadinimui, o `<h6>` – mažiausiai svarbi.

```html
<h1>Pagrindinė antraštė</h1>
<h2>Antraštė 2 lygio</h2>
<h3>Antraštė 3 lygio</h3>
<h4>Antraštė 4 lygio</h4>
<h5>Antraštė 5 lygio</h5>
<h6>Antraštė 6 lygio</h6>
```
## HTML Paragrafai

Paragrafai yra vienas iš pagrindinių HTML elementų, skirtų tekstui pateikti tinklalapyje. Paragrafai leidžia grupuoti ir struktūrizuoti tekstą, kad jis būtų lengvai skaitomas ir suprantamas.

## Paragrafo žymuo `<p>`

Paragrafai HTML dokumente yra kuriami naudojant `<p>` žymenį. Visas tekstas, įterptas tarp atidarančiojo `<p>` ir uždarančiojo `</p>` žymenų, bus rodomas kaip paragrafas.

### Pavyzdys

```html
<p>Tai yra paprastas HTML paragrafas. Jis rodomas kaip teksto blokas su standartiniu tarpu virš ir po teksto.</p>
```

## HTML Nuorodos (Links)

Nuorodos yra vienas iš pagrindinių HTML elementų, leidžiančių susieti skirtingus tinklalapius, dokumentus ar išteklius internete. Naudodami nuorodas, galite lengvai naršyti tarp puslapių ir teikti prieigą prie kitų šaltinių.

## Nuorodų sukūrimas naudojant `<a>` žymenį

HTML nuorodos sukuriamos naudojant `<a>` žymenį. `href` atributas nurodo nuorodos tikslinį adresą (URL).

### Pagrindinis nuorodos pavyzdys

```html
<a href="https://www.google.com">Apsilankykite "Google" svetainėje</a>
```

## HTML Vaizdai (Images)

Vaizdai yra esminis tinklalapių turinio elementas, leidžiantis vizualiai praturtinti puslapį ir perteikti informaciją efektyviau nei vien tekstu. HTML suteikia paprastą būdą įterpti vaizdus naudojant `<img>` žymenį.

## Vaizdo įterpimas naudojant `<img>` žymenį

Norint įterpti vaizdą į HTML dokumentą, naudojamas `<img>` žymuo. Šis žymuo yra vienas iš savarankiškų žymenų (self-closing tags), todėl jis neturi uždarančiojo žymens. Pagrindinis atributas, naudojamas su `<img>`, yra `src`, kuris nurodo vaizdo failo kelią.

### Pagrindinis vaizdo įterpimo pavyzdys

```html
<img src="vaizdas.jpg" alt="Aprašomasis vaizdo tekstas">
```

## HTML Sąrašai (Lists)

Sąrašai yra svarbi HTML dalis, leidžianti struktūrizuotai pateikti informaciją, pvz., punktus, veiksmų seką, ar elementų rinkinį. HTML palaiko kelis sąrašų tipus, iš kurių dažniausiai naudojami yra nenurodyti (bulleted) sąrašai, numeruoti (ordered) sąrašai ir apibrėžimų (definition) sąrašai.

## Nenurodyti sąrašai (Unordered Lists)

Nenurodyti sąrašai naudojami, kai elementų eiliškumas nėra svarbus. Šie sąrašai paprastai rodomi su ženkleliais (bullet points). Jie yra kuriami naudojant `<ul>` žymenį, o kiekvienas sąrašo elementas yra apibrėžiamas `<li>` žymeniu.

### Pavyzdys

```html
<ul>
    <li>Pirmas elementas</li>
    <li>Antras elementas</li>
    <li>Trečias elementas</li>
</ul>
```
## HTML Lentelės (Tables)

Lentelės yra HTML elementai, leidžiantys pateikti duomenis struktūrizuotu formatu, naudodami eilutes ir stulpelius. Lentelės dažnai naudojamos rodyti duomenų rinkinį, tokius kaip kainų sąrašai, kalendoriai, tvarkaraščiai ir kita informacija, kurią patogu matyti lentelės formatu.

## Lentelės struktūra

Lentelė HTML dokumente yra kuriama naudojant `<table>` žymenį. Lentelės struktūrą sudaro eilutės (`<tr>` – table row) ir langeliai (`<td>` – table data), kurie apibrėžia atitinkamus duomenis.

### Pagrindinis lentelės pavyzdys

```html
<table>
    <tr>
        <td>Produktas</td>
        <td>Kaina</td>
    </tr>
    <tr>
        <td>Produktas A</td>
        <td>10 €</td>
    </tr>
    <tr>
        <td>Produktas B</td>
        <td>15 €</td>
    </tr>
</table>
```