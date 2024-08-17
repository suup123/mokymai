# Pagrindinė CSS Sintaksė

CSS sintaksė yra pagrindinis būdas, kaip aprašyti stilius HTML elementams. Norint efektyviai naudoti CSS, svarbu suprasti, kaip veikia selektoriai, savybės ir reikšmės, bei kaip rašyti tvarkingą ir suprantamą kodą, naudojant komentarus.

## CSS Sintaksės Apžvalga

CSS sintaksė susideda iš trijų pagrindinių dalių: selektorių, savybių ir reikšmių.

### Selektoriai

**Selektorius** nurodo, kuriam HTML elementui bus taikomos CSS taisyklės. Tai yra pirmasis CSS taisyklės elementas, kuris „pasirenka“ HTML elementą pagal jo tipą, klasę, ID ar kitą savybę.

- **Elementų selektorius** nurodo konkretų HTML elementą, pvz., `h1`, `p`, `div`.
- **Klasės selektorius** naudoja tašką prieš klasės pavadinimą, pvz., `.kategorija`, kad taikytų stilius visiems elementams su ta pačia klase.
- **ID selektorius** naudoja groteles prieš ID pavadinimą, pvz., `#antraste`, kad taikytų stilius vienam konkrečiam elementui su unikaliu ID.

### Savybės ir Reikšmės

Kiekviena CSS taisyklė turi **savybę**, kuri nurodo, kokį stiliaus aspektą norite pakeisti, ir **reikšmę**, kuri nurodo, kaip tą savybę pakeisti.

- **Savybė:** Tai gali būti spalva, šrifto dydis, plotis, aukštis ir t.t. Pvz., `color`, `font-size`, `margin`.
- **Reikšmė:** Tai yra konkretus savybės nustatymas, pvz., `red` (spalvai), `16px` (šrifto dydžiui), `10px` (tarpeliui).

Taisyklė rašoma taip: 

```css
selektorius {
    savybė: reikšmė;
}
```

## Sintaksės Pavyzdys
Jei norite, kad visi HTML p elementai būtų mėlyni ir su 20 pikselių tarpu viršuje, taisyklė atrodytų taip:

```css
p {
    color: blue;
    margin-top: 20px;
}
```

### Kaip Rašyti Paprastas CSS Taisykles
Rašant CSS taisykles svarbu laikytis tvarkos, kad kodas būtų lengvai skaitomas ir suprantamas tiek jums, tiek kitiems, kurie gali dirbti su jūsų projektu.

Žingsnis po Žingsnio:
- Nustatykite selektorių: Nuspręskite, kurį HTML elementą norite stilizuoti. Tai gali būti elementas pagal jo tipą, klasę ar ID.

- Pvz., pasirinkite h1 antraštės elementą.

- Pasirinkite savybes: Nuspręskite, kuriuos stiliaus aspektus norite pakeisti (spalva, dydis, tarpeliai ir t.t.).

- Pvz., norite pakeisti spalvą ir šrifto dydį.

- Priskirkite reikšmes: Nustatykite tinkamas reikšmes pasirinktoms savybėms.

- Pvz., spalva bus raudona, o šrifto dydis – 24 pikseliai.

- Parašykite CSS taisyklę: Sujunkite selektorių, savybes ir reikšmes į vieną taisyklę.

- Pvz.:

```css
h1 {
    color: red;
    font-size: 24px;
}
```

## Kelių Savybių Rašymas
Galite rašyti kelias savybes viename selektoriuje, kiekvieną savybę atskirdami kableliu.

Pvz., jei norite, kad visi p ir h1 elementai turėtų tą pačią spalvą ir šrifto dydį:

```css
p, h1 {
    color: blue;
    font-size: 18px;
}
```

## Komentarai CSS: Kaip Pridėti Komentarus Kode
Komentarai yra teksto dalys, kurios nėra vykdomos naršyklės ir naudojamos paaiškinti kodą arba palikti žinutes sau ar kitiems kūrėjams. Komentarai padeda organizuoti ir suprasti kodą, ypač kai projektas tampa didesnis ar kai dirba keli žmonės.

### Kaip Rašyti Komentarus:
Komentarai CSS rašomi tarp /* ir */ simbolių. Viskas, kas yra tarp šių simbolių, bus ignoruojama naršyklės.

- Pvz., galite pridėti komentarą, kuris paaiškina, kodėl nustatėte tam tikrą spalvą:

```css
h1 {
    color: red; /* Tai pabrėžia antraštę */
}
```
Arba galite naudoti komentarus, kad atskirtumėte skirtingas kodo dalis:

```css
/* Antraščių stiliavimas */
h1 {
    color: red;
    font-size: 24px;
}

/* Pastraipų stiliavimas */
p {
    color: black;
    line-height: 1.5;
}
```
Komentarai yra labai naudingi, kai reikia paaiškinti, kodėl pasirinktas tam tikras stilius, ar kai norite laikinai pašalinti tam tikrą kodą iš vykdymo.