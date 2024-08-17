# Išdėstymo Pagrindai

Išdėstymas yra viena iš svarbiausių CSS dalių, leidžianti tiksliai kontroliuoti, kaip elementai bus išdėstyti tinklalapyje. Šiame skyriuje susipažinsime su „Box Model“ koncepcija, elementų dydžio nustatymu, „float“ ir „clear“ technikomis bei elementų pozicionavimu naudojant reliatyvų, absoliutų, fiksuotą ir „sticky“ pozicionavimą.

## Supratimas apie „Box Model“

CSS „Box Model“ yra pagrindinė koncepcija, kurią reikia suprasti, norint valdyti elementų išdėstymą tinklalapyje. Kiekvienas HTML elementas gali būti suprantamas kaip dėžutė, turinti turinį, užpildą (padding), rėmelį (border) ir tarpelį (margin).

### „Box Model“ Elementai:

- **Turinys:** Tikrasis elementų turinys, pvz., tekstas ar vaizdas.
- **Užpildas (padding):** Erdvinė zona tarp turinio ir rėmelio.
- **Rėmelis (border):** Linija aplink užpildą, kuri gali turėti spalvą, storį ir stilių.
- **Tarpelis (margin):** Erdvinė zona tarp rėmelio ir gretimų elementų.

### „Box Model“ Paaiškinimas:

Pavyzdžiui, jei turite elementą su nustatytu pločiu ir aukščiu, užpildas, rėmelis ir tarpelis gali padidinti bendrą elementų dydį, todėl svarbu suprasti, kaip šios dalys sąveikauja.

```css
div {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 5px solid black;
    margin: 20px;
}
```
Bendras elemento plotis būtų 250px (200px + 10px užpildas iš kiekvienos pusės + 5px rėmelis iš kiekvienos pusės), o bendras aukštis – 150px.

## Plotis ir Aukštis
CSS leidžia tiksliai nustatyti elementų plotį ir aukštį, naudodami width ir height savybes. Šios savybės gali būti apibrėžtos pikseliais, procentais, em vienetais ar kitais matavimo vienetais.

### Pavyzdys:
```css
div {
    width: 50%;
    height: 300px;
}
```
Šis kodas nustato, kad elementas užims 50% savo tėvinio elemento pločio ir turės 300 pikselių aukštį.

Svarbu Atminti:
- Procentai: Nustatant plotį procentais, jis bus apskaičiuojamas pagal tėvinio elemento plotį.
- Automatinis Aukštis: Jei nenurodysite aukščio, elementas automatiškai prisitaikys prie savo turinio aukščio.

## „Float“ ir „Clear“
„Float“ yra CSS technika, leidžianti elementus „išplukdyti“ į kairę arba dešinę pusę, leidžiant kitiems elementams apvynioti aplink juos. Tai dažnai naudojama, norint sukurti teksto apvyniojimą aplink vaizdus arba sukurti kelių stulpelių išdėstymus.

### Pavyzdys:
```css
img {
    float: left;
    margin-right: 10px;
}
```
Šis kodas nustato, kad vaizdas bus išplukdytas į kairę, o tekstas apvynios vaizdą iš dešinės.

## „Clear“ Savybė
„Clear“ savybė naudojama norint užkirsti kelią elementams apvynioti aplink išplukdytus elementus. Dažnai naudojama po plaukiojančių elementų, kad sekantys elementai pradėtų naują eilutę.

### Pavyzdys:
```css
div.clearfix {
    clear: both;
}
```
Šis kodas užtikrina, kad po plaukiojančių elementų esantys elementai bus išdėstyti po jais, o ne šalia.

# Elementų Padėties Nustatymas
CSS taip pat leidžia tiksliai nustatyti elementų padėtį tinklalapyje, naudojant įvairius pozicionavimo metodus. Yra keturi pagrindiniai pozicionavimo tipai: reliatyvus, absoliutus, fiksuotas ir „sticky“.

## Reliatyvus Pozicionavimas
Reliatyvus pozicionavimas leidžia jums perkelti elementą iš jo pradinės vietos, naudojant top, right, bottom, arba left savybes. Reliatyviai pozicionuotas elementas vis dar užima vietą normaliame sraute.

### Pavyzdys:
```css
div {
    position: relative;
    top: 10px;
    left: 20px;
}
```
Šis kodas perkelia elementą 10 pikselių žemyn ir 20 pikselių į dešinę nuo pradinės vietos.

## Absoliutus Pozicionavimas
Absoliutus pozicionavimas leidžia jums visiškai pašalinti elementą iš normalaus srauto ir pozicionuoti jį tiksliai pagal nurodytus taškus tėviniame elemente (kuris turi būti pozicionuotas).

### Pavyzdys:
```css
div {
    position: absolute;
    top: 50px;
    right: 30px;
}
```
Šis kodas perkelia elementą 50 pikselių žemyn ir 30 pikselių į kairę nuo tėvinio elemento dešiniojo krašto.

## Fiksuotas Pozicionavimas
Fiksuotas pozicionavimas leidžia elementui likti toje pačioje vietoje, net kai vartotojas slenka tinklalapį. Elementas yra pozicionuojamas pagal naršyklės lango kraštus.

### Pavyzdys:
```css
div {
    position: fixed;
    bottom: 0;
    left: 0;
}
```
Šis kodas fiksuoja elementą tinklalapio apačioje, kairėje pusėje.

## „Sticky“ Pozicionavimas
„Sticky“ pozicionavimas yra mišri technika tarp reliatyvaus ir fiksuoto pozicionavimo. Elementas išlieka reliatyvioje padėtyje, kol pasiekiamas tam tikras slenkamas taškas, po kurio jis tampa fiksuotu.

### Pavyzdys:
```css
div {
    position: sticky;
    top: 0;
}
```
Šis kodas užtikrina, kad elementas liks matomas tinklalapio viršuje, kai vartotojas slenka žemyn, kol jis pasieks tam tikrą tašką.