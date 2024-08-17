# HTML Formos (Forms)

HTML formos yra esminė interneto puslapių dalis, leidžianti vartotojams įvesti ir siųsti duomenis serveriui. Formos naudojamos įvairiuose kontekstuose, nuo paprastų prisijungimo puslapių iki sudėtingų užsakymų sistemų.

## Formos struktūra

Formos HTML dokumente yra apibrėžiamos naudojant `<form>` žymenį. Viduje galima naudoti įvairius įvesties elementus, tokius kaip tekstiniai laukai, mygtukai, žymės langeliai ir pasirinkimo meniu.

### Pagrindinė formos struktūra

```html
<form action="/submit" method="post">
    <label for="vardas">Vardas:</label>
    <input type="text" id="vardas" name="vardas">

    <label for="el_pastas">El. paštas:</label>
    <input type="email" id="el_pastas" name="el_pastas">

    <input type="submit" value="Siųsti">
</form>
```

## Atributai
- action: Nurodo URL, į kurį bus siunčiami formos duomenys.
- method: Nurodo HTTP metodą, kuris bus naudojamas duomenims siųsti. Dažniausiai naudojami metodai yra GET ir POST.

## Įvesties laukai (Input Fields)
Įvesties laukai naudojami gauti duomenis iš vartotojo. Dažniausiai naudojamas `<input>` žymuo, kuris turi daug skirtingų tipų.

## Tekstiniai laukai
```html
<input type="text" id="vardas" name="vardas">
```

## Slaptažodžio laukas
```html
<input type="password" id="slaptazodis" name="slaptazodis">
```

## El. pašto laukas
```html
<input type="email" id="el_pastas" name="el_pastas">
```

## Skaičiaus įvestis
```html
<input type="number" id="kiekis" name="kiekis" min="1" max="10">
```

## Paslėptas laukas
```html
<input type="hidden" name="user_id" value="12345">
```

## Mygtukai (Buttons)
Formose mygtukai naudojami duomenims pateikti, formos atstatymui ar kitų veiksmų atlikimui.

### Pateikimo mygtukas
```html
<input type="submit" value="Pateikti">
```

### Atstatymo mygtukas
```html
<input type="reset" value="Atstatyti">
```

### Paprastas mygtukas
```html
<button type="button" onclick="alert('Mygtukas paspaustas!')">Spausk mane</button>
```

## Žymės langeliai (Checkboxes)
Žymės langeliai leidžia vartotojui pasirinkti vieną ar kelis variantus.

```html
<label for="sutikimas">
    <input type="checkbox" id="sutikimas" name="sutikimas" value="taip"> Sutinku su sąlygomis
</label>
```

## Radijo mygtukai (Radio Buttons)
Radijo mygtukai leidžia vartotojui pasirinkti vieną variantą iš kelių galimų. Visi radijo mygtukai, turintys tą patį name atributą, yra grupuojami.

```html
<label for="vyras">
    <input type="radio" id="vyras" name="lytis" value="vyras"> Vyras
</label>
<label for="moteris">
    <input type="radio" id="moteris" name="lytis" value="moteris"> Moteris
</label>
```

## Pasirinkimo meniu (Dropdown Menus)
Pasirinkimo meniu leidžia vartotojui pasirinkti vieną variantą iš išskleidžiamojo sąrašo.

```html
<label for="miestas">Pasirinkite miestą:</label>
<select id="miestas" name="miestas">
    <option value="vilnius">Vilnius</option>
    <option value="kaunas">Kaunas</option>
    <option value="klaipeda">Klaipėda</option>
</select>
```

## Tekstų sritis (Textarea)
`<textarea>` žymė naudojama, kai reikia didesnio teksto lauko, pvz., komentarams ar aprašymams įvesti.

```html
<label for="komentarai">Jūsų komentarai:</label>
<textarea id="komentarai" name="komentarai" rows="4" cols="50"></textarea>
```

## Formos elementų išdėstymas
Elementų išdėstymas formoje yra svarbus norint užtikrinti jos naudojimo patogumą. Dažnai naudojamas label žymuo, kuris yra susietas su įvesties laukeliu, nurodant jo atributą for, kuris atitinka įvesties lauko id.

Pavyzdys su label žyma
```html
<form action="/submit" method="post">
    <label for="vardas">Vardas:</label>
    <input type="text" id="vardas" name="vardas">

    <label for="el_pastas">El. paštas:</label>
    <input type="email" id="el_pastas" name="el_pastas">

    <input type="submit" value="Siųsti">
</form>
```

## Formos duomenų validacija
HTML5 suteikia galimybę naudoti įmontuotą formos duomenų validaciją, siekiant užtikrinti, kad vartotojai pateiktų reikiamą ir teisingą informaciją.

Privalomi laukai
```html
<input type="text" id="vardas" name="vardas" required>
```

### Minimalus ir maksimalus ilgis
```html
<input type="text" id="slaptazodis" name="slaptazodis" minlength="8" maxlength="20">
```

### Modelio atitikimas (Pattern Matching)
```html
<input type="text" id="telefonas" name="telefonas" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
```