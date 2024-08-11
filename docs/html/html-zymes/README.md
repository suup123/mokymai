# HTML Žymės (Tags)

HTML žymės yra esminiai interneto puslapių kūrimo elementai. Žymės naudojamos struktūrizuoti turinį, apibrėžti jo elgseną ir pateikti jį naršyklėje. Suprasti ir tinkamai naudoti HTML žymes yra pirmas žingsnis kuriant veikiančius ir efektyvius tinklalapius.

## Kas yra HTML žymė?

HTML žymė yra specialus žodžių rinkinys, įrašytas tarp kampinių skliaustų `< >`, kuris nurodo naršyklei, kaip elgtis su tam tikru turiniu. Dauguma žymių turi atidarančiąją ir uždarančiąją dalis.

## HTML Žymių Struktūra

HTML žymės paprastai sudaro atidarančiąją žymę, turinį ir uždarančiąją žymę.

```html
<p>Šis tekstas yra paragrafas.</p>
```

## Pagrindinės HTML Žymės
`<!DOCTYPE html>` žymė nurodo naršyklei, kad dokumentas yra HTML5 formato. Tai privaloma žymė, kuri turėtų būti kiekvieno HTML dokumento pradžioje.

`<html>` žymė nurodo pradžią viso HTML dokumento turinio. Ji yra pagrindinė šakninė žymė, kurioje yra visas dokumento turinys.

`<head>` žymė apibrėžia dokumento metaduomenis, tokius kaip puslapio pavadinimas, simbolių kodavimas, ir kitus svarbius elementus, kuriuos naršyklė naudoja, bet kurių nemato puslapio lankytojai.

`<title>` žymė apibrėžia dokumento pavadinimą, kuris rodomas naršyklės skirtuke arba lange. Ši žymė yra privaloma ir visada turėtų būti head sekcijoje.

`<body>` žymė apibrėžia visą matomą tinklalapio turinį. Viskas, kas yra šios žymės viduje, bus rodoma naršyklėje kaip puslapio turinys.

`<h1> – <h6>` žymės apibrėžia antraštes tinklalapyje. `<h1>` yra svarbiausia antraštė, o `<h6>` – mažiausiai svarbi.

`<p>` žymė naudojama kurti paragrafus. Tai yra pagrindinė žymė tekstui atskirti į atskirus blokus.

`<a>` žymė naudojama hipernuorodoms kurti. Naudojant href atributą, galima nurodyti nuorodos tikslą.

`<img>` žymė naudojama vaizdams įterpti į puslapį. src atributas nurodo vaizdo failo kelią, o alt atributas pateikia alternatyvų tekstą.

`<ul>` žymė apibrėžia nenurodytą sąrašą, o `<ol>` – numeruotą sąrašą. Kiekvienas sąrašo elementas yra apibrėžiamas naudojant `<li>` žymę.

`<div>` žymė yra naudojama blokuotiems turiniui apibrėžti ir grupuoti kitus HTML elementus į vieną bloką.

`<span>` žymė naudojama teksto dalims pažymėti ir stilizuoti. Ji yra inline žymė ir neturi blokuojančių savybių kaip `<div>`.

`<strong>` žymė naudojama tekstui paryškinti (semantiškai svarbus tekstas), o `<em>` – pabrėžti tekstą naudojant kursyvą.

`<br>` žymė naudojama norint įterpti linijos pertrauką (newline) tekste.

`<hr>` žymė įterpia horizontalią liniją, kuri naudojama turinio atskyrimui.

`<table>` žymė naudojama lentelėms kurti. Eilutės lentelėje yra apibrėžiamos naudojant `<tr>`, duomenų langeliai – `<td>`, o antraštės langeliai – `<th>`.