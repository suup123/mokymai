# HTML Atributai (Attributes)

HTML atributai suteikia papildomą informaciją HTML žymėms. Atributai naudojami modifikuoti žymės elgesį, nurodyti tam tikras savybes arba pateikti papildomą informaciją apie elementą. Kiekvienas atributas yra priskiriamas žymei naudojant vardas="vertė" formatą.

## Atributų naudojimas

Atributai paprastai rašomi atidarančiojo žymens viduje, po žymės pavadinimo. Dauguma atributų turi vardą ir reikšmę, kurie nurodo konkrečią savybę ir jos reikšmę.

```html
<a href="https://www.example.com">Aplankykite mūsų svetainę</a>
```

Certainly! Here’s everything a student needs to know about HTML attributes, written entirely in README.md format:

markdown
Kopijuoti kodą
# HTML Atributai (Attributes)

HTML atributai suteikia papildomą informaciją HTML žymėms. Atributai naudojami modifikuoti žymės elgesį, nurodyti tam tikras savybes arba pateikti papildomą informaciją apie elementą. Kiekvienas atributas yra priskiriamas žymei naudojant vardas="vertė" formatą.

## Atributų naudojimas

Atributai paprastai rašomi atidarančiojo žymens viduje, po žymės pavadinimo. Dauguma atributų turi vardą ir reikšmę, kurie nurodo konkrečią savybę ir jos reikšmę.

```html
<a href="https://www.example.com">Aplankykite mūsų svetainę</a>
```
Šiame pavyzdyje href yra atributas, kurio vertė yra https://www.example.com.

## Pagrindiniai HTML atributai

`id` atributas suteikia elementui unikalų identifikatorių. Šis identifikatorius naudojamas CSS ir JavaScript, norint tiksliai pasirinkti ar valdyti konkretų elementą.

```html
<p id="unikalus">Tai yra unikalus paragrafas.</p>
```

`class` atributas leidžia priskirti elementui vieną ar kelias klases. Tai naudinga grupuojant elementus, kuriems reikia pritaikyti vienodus stilius arba juos valdyti JavaScript pagalba.

```html
<p class="melynas-tekstas">Šis tekstas yra mėlynos spalvos.</p>
```

`style` atributas leidžia taikyti inline stilius konkrečiam elementui. Nors jis yra patogus, geriau stilius apibrėžti išoriniame CSS faile, kad būtų lengviau prižiūrėti kodą.

```html
<p style="color: red;">Šis tekstas yra raudonas.</p>
```

`href` atributas naudojamas su `<a>` žyme nurodyti nuorodos tikslą. Tai gali būti URL, el. pašto adresas arba vietinė failo nuoroda.

```html
<a href="https://www.example.com">Aplankykite mūsų svetainę</a>
```

`src` atributas naudojamas su `<img>` žyme nurodyti vaizdo failo šaltinį. Be src atributo, vaizdas negalės būti rodomas.

```html
<img src="vaizdas.jpg" alt="Aprašomasis vaizdas">
```

`alt` atributas naudojamas apibrėžti alternatyvų tekstą vaizdui, kuris bus rodomas, jei vaizdas negali būti įkeltas. Šis atributas taip pat pagerina svetainės prieinamumą.

```html
<img src="logo.png" alt="Įmonės logotipas">
```

`title` atributas suteikia papildomą informaciją apie elementą. Ši informacija rodoma kaip patarimas (tooltip), kai vartotojas užveda pelės žymeklį ant elemento.

```html
<p title="Tai yra papildoma informacija">Užveskite pelę ant šio teksto.</p>
```

`target` atributas naudojamas su `<a>` žyme nurodyti, kaip nuoroda turėtų būti atidaryta. Dažniausiai naudojama vertė yra `_blank`, kuri nurodo atidaryti nuorodą naujame lange ar skirtuke.

```html
<a href="https://www.example.com" target="_blank">Atidaryti naujame skirtuke</a>
```

`rel` atributas nurodo santykį tarp dabartinio dokumento ir nuorodos tikslo. Dažniausiai naudojamas su target="_blank" norint pridėti noopener ir noreferrer vertes, kurios pagerina saugumą.

```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Saugus nuorodos atidarymas</a>
```

`type` atributas naudojamas su formos įvesties `<input>` žymenimis nurodyti įvesties tipą. Pavyzdžiui, tekstas, slaptažodis, mygtukas ir kt.

```html
<input type="text" name="vardas">
<input type="submit" value="Pateikti">
```

`value` atributas naudojamas su formos elementais, tokiais kaip `<input>`, norint apibrėžti numatytąją įvesties reikšmę.

```html
<input type="text" name="vardas" value="Jūsų vardas">
```

`name` atributas suteikia formos elementui pavadinimą, kuris naudojamas duomenims siųsti serveriui. Tai leidžia serveriui identifikuoti, kokį duomenį vartotojas įvedė į formą.

```html
<input type="text" name="el_pastas">
```

`placeholder` atributas pateikia užuominą vartotojui, kokią informaciją reikia įvesti į laukelį. Tekstas išnyksta, kai vartotojas pradeda įvesti duomenis.

```html
<input type="text" name="vardas" placeholder="Įveskite savo vardą">
```

`maxlength` atributas apriboja maksimalų simbolių skaičių, kurį vartotojas gali įvesti į tekstinį lauką.

```html
<input type="text" name="telefonas" maxlength="10">
```

## Universalūs atributai
Yra keletas atributų, kurie gali būti naudojami beveik su bet kuria HTML žyme:

- id: Unikalus elementas identifikavimui.
- class: Elementų grupavimui stiliaus ar logikos tikslais.
- style: Inline stiliaus taikymas.
- title: Papildomos informacijos pateikimas kaip tooltip.
- lang: Nurodo elemento kalbą.

## Atributų geriausios praktikos
- Prasmė ir kontekstas: Visada naudokite atributus, kurie prideda prasmę ir kontekstą elementui.
- Prieinamumas: Naudokite alt atributą vaizdams, kad pagerintumėte svetainės prieinamumą.
- ID unikalumas: Įsitikinkite, kad kiekvienas id atributas yra unikalus visame puslapyje.
- Stiliaus taisyklės: Venkite pernelyg daug naudoti style atributą, nes tai apsunkina kodo priežiūrą. Geriau naudoti išorinius ar vidinius CSS failus.