# Spalvos ir Fonai

Spalvos ir fonai yra svarbūs elementai, kurie suteikia tinklalapiui vizualinį identitetą ir padeda sukurti tam tikrą nuotaiką ar temą. Naudojant CSS, galite lengvai pritaikyti fono spalvas, nustatyti spalvas įvairiais formatais, pridėti fono vaizdus ir kontroliuoti jų išvaizdą bei padėtį tinklalapyje.

## Fono Spalvų Nustatymas

Fono spalvos nustatymas yra vienas iš paprasčiausių ir dažniausiai naudojamų būdų, kaip pakeisti elementų išvaizdą tinklalapyje. Norėdami pritaikyti fono spalvą, naudojate `background-color` savybę.

### Pavyzdys:

```css
body {
    background-color: lightblue;
}
```
Šis kodas nurodo, kad viso tinklalapio fono spalva bus šviesiai mėlyna. Fono spalvas galite pritaikyti bet kuriam HTML elementui, pvz., antraštėms, pastraipoms ar div elementams.

## Spalvų Apibrėžimas naudojant Hex, RGB ir Spalvų Pavadinimus
CSS suteikia keletą būdų apibrėžti spalvas, kad galėtumėte tiksliai kontroliuoti, kaip jūsų tinklalapis atrodys.

## Hex Spalvos
Hex spalvos yra apibrėžiamos šešioliktainiu formatu, naudojant # simbolį ir šešis simbolius, kurie nurodo spalvos komponentus (raudoną, žalią ir mėlyną).

Pavyzdys:
```css
h1 {
    color: #ff5733;
}
```
Čia #ff5733 apibrėžia spalvą, kurioje daugiausia yra raudonos, mažiau žalios ir šiek tiek mėlynos.

## RGB Spalvos
RGB spalvos yra apibrėžiamos nurodant raudonos, žalios ir mėlynos spalvų komponentus skaitmeniniu formatu (nuo 0 iki 255).

Pavyzdys:
```css
p {
    color: rgb(255, 87, 51);
}
```
Šis kodas nurodo, kad pastraipos tekstas bus tokios pačios spalvos kaip ir hex #ff5733.

## Spalvų Pavadinimai
CSS taip pat leidžia naudoti spalvų pavadinimus, kurie yra lengvai atpažįstami ir prisimenami. Tai paprastas būdas greitai apibrėžti spalvas.

Pavyzdys:
```css
div {
    background-color: blue;
}
```
Čia blue nurodo mėlyną spalvą, ir ji bus pritaikyta div elemento fonui.

## Fono Vaizdų Pridėjimas
Be spalvų, galite pridėti vaizdus kaip foną, naudodami background-image savybę. Tai suteikia tinklalapiui unikalumo ir gali padėti sukurti tam tikrą atmosferą ar stilių.

Pavyzdys:
```css
body {
    background-image: url('images/background.jpg');
}
```
Šis kodas nurodo, kad viso tinklalapio fonui bus naudojamas vaizdas background.jpg, kuris yra išsaugotas images aplanke.

# Fono Dydžio ir Padėties Kontrolė
Kai naudojate vaizdą kaip foną, svarbu valdyti jo dydį ir padėtį, kad jis atrodytų gerai įvairiuose ekranuose ir situacijose.

## Fono Dydis
Naudodami background-size savybę, galite kontroliuoti, kaip vaizdas užpildo elementą. Dažniausiai naudojamos vertės yra cover, contain ir konkretūs dydžiai, pvz., 100%.

- cover: Užpildo visą elementą, išlaikant vaizdo proporcijas.
- contain: Užtikrina, kad visas vaizdas bus matomas, bet gali palikti tuščias vietas.
- konkretus dydis: Galite nurodyti tikslų dydį, pvz., background-size: 100px 50px;.

Pavyzdys:
```css
body {
    background-image: url('images/background.jpg');
    background-size: cover;
}
```

## Fono Padėtis
Naudodami background-position savybę, galite nustatyti, kur vaizdas bus išdėstytas elemente. Dažniausiai naudojamos vertės yra center, top, bottom, left, ir right.

Pavyzdys:
```css
body {
    background-image: url('images/background.jpg');
    background-size: cover;
    background-position: center;
}
```
Šis kodas užtikrina, kad vaizdas bus centruotas tinklalapyje.

## Fono Kartojimas
Jei vaizdas yra mažesnis nei elementas, galite pasirinkti, ar jį kartoti, naudodami background-repeat savybę.

- repeat: Kartojamas vaizdas tiek horizontaliai, tiek vertikaliai.
- repeat-x: Kartojamas tik horizontaliai.
- repeat-y: Kartojamas tik vertikaliai.
- no-repeat: Nekartojamas.

### Pavyzdys:
```css
body {
    background-image: url('images/background.jpg');
    background-repeat: no-repeat;
    background-position: center;
}
```
Šis kodas nustato, kad vaizdas bus rodomas tik vieną kartą, centruotas ir nekartojamas.