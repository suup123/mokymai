# Teksto Stiliavimas

Teksto stiliavimas yra viena iš pagrindinių CSS funkcijų, kuri leidžia jums sukurti aiškų, patrauklų ir lengvai skaitomą tinklalapio turinį. Naudodami CSS galite keisti teksto spalvą, šriftą, dydį, lygiavimą ir pridėti dekoracijas bei transformacijas, kad jūsų tekstas atrodytų būtent taip, kaip norite.

## Teksto Spalvos Keitimas

Teksto spalva yra vienas iš paprasčiausių ir dažniausiai naudojamų CSS nustatymų. Norėdami pakeisti teksto spalvą, naudojate `color` savybę. Galite nurodyti spalvą naudodami spalvų pavadinimus (pvz., `red`, `blue`), heksadecimalines reikšmes (pvz., `#ff0000`), RGB ar HSL formatus.

### Pavyzdys:

```css
p {
    color: blue;
}
```
Šis kodas nurodo, kad viso p elemento tekstas bus mėlynas.

## Šrifto Šeima ir Dydis
Šriftai yra labai svarbūs kuriant tinklalapio išvaizdą. Naudojant CSS, galite pasirinkti norimą šriftą (šrifto šeimą) ir nustatyti jo dydį.

## Šrifto Šeima
Šrifto šeima nurodo, kokį šriftą norite naudoti. CSS leidžia nurodyti kelis šriftus kaip atsarginius variantus, jei pirmasis pasirinktas šriftas nėra prieinamas.

Pavyzdys:
```css
p {
    font-family: Arial, sans-serif;
}
```
Čia pirmasis pasirinkimas yra „Arial“ šriftas, o jei jis nėra prieinamas, bus naudojamas bet koks „sans-serif“ tipo šriftas.

## Šrifto Dydis
Šrifto dydis nustatomas naudojant font-size savybę. Dydis gali būti nurodytas pikseliais (pvz., 16px), em vienetais, procentais ar kitomis matavimo vienetais.

Pavyzdys:
```css
p {
    font-size: 18px;
}
```
Šis kodas nustato, kad p elemento šrifto dydis bus 18 pikselių.

## Teksto Lygiavimas
Teksto lygiavimas yra dar viena svarbi CSS funkcija, leidžianti valdyti, kurioje vietoje tekstas bus rodomas elemente. Naudojant text-align savybę, galite lygiuoti tekstą kairėje, dešinėje, centre arba išskleisti jį per visą plotį.

Pavyzdys:
```css
p {
    text-align: center;
}
```
Šis kodas nustato, kad p elemento tekstas bus centruotas.

### Galimos Vertės:
- left: Lygiuoja tekstą kairėje pusėje.
- right: Lygiuoja tekstą dešinėje pusėje.
- center: Centruoja tekstą.
- justify: Išskleidžia tekstą, kad jis užimtų visą eilutės plotį.

# Teksto Dekoracijos ir Transformacijos
Teksto dekoracijos ir transformacijos leidžia jums pridėti papildomų efektų tekstui, pavyzdžiui, pabraukimus, paryškinimus, pasvirimus ar teksto kapitalizaciją.

## Teksto Dekoracijos
Naudojant text-decoration savybę, galite pridėti pabraukimą, perbraukimą ar kitas dekoracijas tekstui.

Pavyzdys:
```css
p {
    text-decoration: underline;
}
```
Šis kodas nustato, kad p elemento tekstas bus pabrauktas.

### Galimos Vertės:
- underline: Pabraukia tekstą.
- overline: Nubrėžia liniją virš teksto.
- line-through: Perbraukia tekstą per vidurį.
- none: Pašalina bet kokias dekoracijas.

## Teksto Transformacijos
Teksto transformacijos keičia teksto raidžių dydį ar formą, naudodamos text-transform savybę.

Pavyzdys:
```css
p {
    text-transform: uppercase;
}
```
Šis kodas nustato, kad p elemento tekstas bus rodomas tik didžiosiomis raidėmis.

### Galimos Vertės:
- uppercase: Paverčia tekstą į didžiąsias raides.
- lowercase: Paverčia tekstą į mažąsias raides.
- capitalize: Kapitalizuoja kiekvieną žodį (pirmoji raidė bus didžioji).