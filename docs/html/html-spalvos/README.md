# HTML Spalvos (Colors)

Spalvos yra esminė HTML elementų dalis, leidžianti vizualiai pagerinti tinklalapių dizainą ir padaryti turinį patrauklesnį. HTML spalvas galima nustatyti įvairiais būdais, įskaitant spalvų pavadinimus, heksadecimalinius kodus, RGB, RGBA, HSL ir HSLA formatus.

## Spalvų nustatymas HTML

Spalvos HTML elementams dažniausiai priskiriamos naudojant CSS (`style` atributą arba išorinius CSS failus). Spalvos gali būti naudojamos įvairiuose kontekstuose, tokiuose kaip teksto spalva, fono spalva, rėmeliai ir kt.

### Pavyzdys su `style` atributu:

```html
<p style="color: blue;">Šis tekstas yra mėlynos spalvos.</p>
<p style="background-color: yellow;">Šis tekstas turi geltoną foną.</p>
```

## Spalvų pavadinimai (Color Names)
HTML palaiko daugybę spalvų pavadinimų, kuriuos galima tiesiogiai naudoti CSS. Tai yra patogus būdas greitai nustatyti spalvas.

Pavyzdys:
```html
<p style="color: red;">Raudona</p>
<p style="color: green;">Žalia</p>
<p style="color: blue;">Mėlyna</p>
```

### Populiariausi spalvų pavadinimai:

- red
- green
- blue
- black
- white
- yellow
- purple
- pink
- orange
- gray

## Heksadecimaliniai spalvų kodai
Heksadecimaliniai spalvų kodai yra dar vienas būdas nurodyti spalvas HTML ir CSS. Heksadecimalinis kodas prasideda ženklu # ir yra sudarytas iš šešių simbolių: pirmieji du simboliai nurodo raudoną, antrieji du – žalią, o paskutiniai du – mėlyną spalvas.

Pavyzdys:
```html
<p style="color: #FF0000;">Raudona</p>
<p style="color: #00FF00;">Žalia</p>
<p style="color: #0000FF;">Mėlyna</p>
```

Dažniausiai naudojami heksadecimaliniai kodai:
- #FFFFFF – Balta
- #000000 – Juoda
- #FF0000 – Raudona
- #00FF00 – Žalia
- #0000FF – Mėlyna
- #FFFF00 – Geltona
- #FFA500 – Oranžinė
- #800080 – Violetinė

## RGB spalvų modelis
RGB spalvų modelis remiasi trimis pagrindinėmis spalvomis – raudona (Red), žalia (Green), mėlyna (Blue). RGB vertės nurodomos skaičiais nuo 0 iki 255.

Pavyzdys:
```html
<p style="color: rgb(255, 0, 0);">Raudona</p>
<p style="color: rgb(0, 255, 0);">Žalia</p>
<p style="color: rgb(0, 0, 255);">Mėlyna</p>
```

## RGBA spalvų modelis
RGBA modelis yra panašus į RGB, bet pridėta ketvirta vertė – skaidrumas (Alpha). Alpha vertė yra nuo 0.0 (visiškai skaidri) iki 1.0 (visiškai nepermatoma).

Pavyzdys:
```html
<p style="color: rgba(255, 0, 0, 0.5);">Pusiau permatoma raudona</p>
<p style="background-color: rgba(0, 0, 255, 0.3);">Pusiau permatomas mėlynas fonas</p>
```

## HSL spalvų modelis
HSL spalvų modelis reiškia Hue (atspalvį), Saturation (sodrumą) ir Lightness (šviesumą). Atspalvis nurodomas laipsniais nuo 0 iki 360, o sodrumas ir šviesumas – procentais.

Pavyzdys:
```html
<p style="color: hsl(0, 100%, 50%);">Raudona</p>
<p style="color: hsl(120, 100%, 50%);">Žalia</p>
<p style="color: hsl(240, 100%, 50%);">Mėlyna</p>
```

## HSLA spalvų modelis
HSLA yra HSL modelio išplėtimas, kuris apima Alpha kanalą (skaidrumą). Tai veikia taip pat kaip ir RGBA, suteikiant galimybę nustatyti spalvos permatomumą.

Pavyzdys:
```html
<p style="color: hsla(0, 100%, 50%, 0.5);">Pusiau permatoma raudona</p>
<p style="background-color: hsla(240, 100%, 50%, 0.3);">Pusiau permatomas mėlynas fonas</p>
```

## Skaidrumas (Opacity)
Be RGBA ir HSLA modelių, skaidrumą galima reguliuoti naudojant opacity savybę CSS. Ji veikia su visais elementais, ne tik su spalvomis.

Pavyzdys:
```html
<p style="opacity: 0.5;">Pusiau permatomas tekstas</p>
<p style="background-color: black; opacity: 0.3;">Pusiau permatomas juodas fonas</p>
```

## Gradientai
Gradientai leidžia sukurti pereinamas spalvas tarp dviejų ar daugiau spalvų. CSS suteikia galimybę naudoti linijinius ir radialinius gradientus.

Linijinis gradientas:
```html
<div style="background: linear-gradient(to right, red, yellow); height: 100px;"></div>
```

Radialinis gradientas:
```html
<div style="background: radial-gradient(circle, red, yellow); height: 100px;"></div>
```

## Spalvų geriausios praktikos
- Kontrastas: Užtikrinkite, kad teksto ir fono spalvų kontrastas būtų pakankamas, kad tekstas būtų lengvai skaitomas.
- Prieinamumas: Naudokite spalvų derinius, kurie yra lengvai suprantami ir žmonėms su regos sutrikimais.
- Nuoseklumas: Stenkitės naudoti nuoseklų spalvų derinį visame tinklalapyje, kad vartotojui būtų lengviau naviguoti ir suprasti turinį.
- Spalvų testavimas: Išbandykite savo spalvų schemą įvairiuose ekranuose ir įrenginiuose, kad įsitikintumėte, jog ji veikia visur.