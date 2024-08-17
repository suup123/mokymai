# Duomenų Tipai

Python kalboje yra keletas pagrindinių duomenų tipų, kuriuos naudojame informacijai saugoti ir apdoroti. Kiekvienas duomenų tipas turi savo specifinę paskirtį ir yra svarbus, norint kurti funkcionalias programas. Šiame skyriuje aptarsime svarbiausius Python duomenų tipus: sveikuosius ir realiuosius skaičius, tekstą (string'us), sąrašus, žodynus ir rinkinius.

## Sveikieji ir Realieji Skaičiai: Numerių Tipai Python Kalboje

Skaičiai Python kalboje yra padalinti į dvi pagrindines kategorijas: sveikuosius ir realiuosius skaičius.

### Sveikieji Skaičiai (int)

Sveikieji skaičiai, arba `int`, yra visi skaičiai be dešimtainės dalies, tiek teigiami, tiek neigiami.

### Pavyzdys:

```python
a = 10   # Sveikasis skaičius
b = -5   # Neigiamas sveikasis skaičius
c = 0    # Nulis taip pat yra sveikasis skaičius

print("a =", a)
print("b =", b)
print("c =", c)
```

## Realieji Skaičiai (float)
Realieji skaičiai, arba float, yra skaičiai su dešimtainėmis dalimis. Jie naudojami ten, kur reikalingas tikslumas, pavyzdžiui, atliekant mokslinius skaičiavimus ar dirbant su pinigais.

### Pavyzdys:
```python
a = 3.14   # Realusis skaičius
b = -2.5   # Neigiamas realusis skaičius
c = 0.0    # Realusis skaičius taip pat gali būti nulis

print("a =", a)
print("b =", b)
print("c =", c)
```

## Sveikųjų ir Realųjų Skaičių Naudojimas
Sveikuosius skaičius naudosite, kai jums nereikia dešimtainių dalių, pavyzdžiui, skaičiuodami žmonių skaičių ar amžių. Realieji skaičiai yra naudingi, kai reikalingas tikslumas, kaip dirbant su temperatūra, pinigais ar kitais skaičiais, turinčiais dešimtainę dalį.

## Tekstas (String'ai): Darbas Su Tekstu ir Teksto Operacijos
Teksto duomenų tipas Python kalboje vadinamas „string“ (arba „str“). String'as yra eilutė simbolių, kuri gali būti naudojama saugoti vardus, adresus, žodžius ar net sakinius.

### Pavyzdys:
```python
sveikinimas = "Labas pasauli!"
vardas = "Jonas"
pranesimas = "Sveiki, " + vardas + "!"

print(sveikinimas)
print(pranesimas)
```

## Kaip veikia String'ai?
- Kabutės: String'ai visada rašomi tarp viengubų arba dvigubų kabučių, pvz., "Labas" arba 'Sveiki'.
- Sujungimas: Naudojant + operatorių, galite sujungti kelis string'us į vieną, kaip pavyzdyje su pranesimas.
- Ilgis: Galite sužinoti string'o ilgį naudodami len() funkciją, pvz., len(sveikinimas).
### Pavyzdys:
```python
tekstas = "Python mokymasis"
ilgis = len(tekstas)

print("Teksto ilgis yra:", ilgis)
```
String'ai yra labai galingi ir leidžia atlikti įvairias operacijas su tekstu, tokias kaip paieška, pakeitimas, dalijimas ir kt.

## Sąrašai: Kaip Saugoti ir Tvarkyti Duomenis Sąrašuose
Sąrašai, arba list, yra vienas iš pagrindinių Python duomenų tipų, leidžiantis saugoti kelis elementus viename kintamajame. Sąrašai gali turėti skirtingų tipų elementus, pvz., skaičius, string'us ar net kitus sąrašus.

### Pavyzdys:
```python
vaisiai = ["obuolys", "bananas", "vyšnia"]
skaiciai = [1, 2, 3, 4, 5]

print("Vaisių sąrašas:", vaisiai)
print("Skaičių sąrašas:", skaiciai)
```

## Kaip veikia Sąrašai?
Indeksavimas: Elementai sąraše yra indeksuojami nuo 0, t. y., pirmasis elementas turi indeksą 0, antrasis – 1 ir t. t.
Prieiga prie elemento: Norėdami pasiekti konkretų sąrašo elementą, galite naudoti jo indeksą, pvz., vaisiai[0] grąžins „obuolys“.
Elemento pridėjimas: Galite pridėti naujus elementus į sąrašą naudodami append() funkciją, pvz., vaisiai.append("apelsinas").
### Pavyzdys:
```python
vaisiai = ["obuolys", "bananas", "vyšnia"]

# Pridėti naują vaisių
vaisiai.append("apelsinas")

print("Atnaujintas vaisių sąrašas:", vaisiai)
```
Sąrašai yra labai lankstūs ir dažnai naudojami, kai reikia dirbti su keliais duomenimis vienu metu.

## Žodynai ir Rinkiniai: Duomenų Saugojimas Raktų-Vertės Poromis
## Žodynai (Dictionary)
Žodynas, arba dict, yra duomenų struktūra, kuri leidžia saugoti duomenis raktų-vertės poromis. Tai reiškia, kad kiekvienas elementas turi raktą (unikalų identifikatorių) ir vertę.

### Pavyzdys:
```python
studentas = {
    "vardas": "Jonas",
    "amžius": 21,
    "kursas": "Informatika"
}

print("Studento vardas:", studentas["vardas"])
print("Studento amžius:", studentas["amžius"])
```
### Kaip veikia Žodynai?
- Raktai ir Vertės: Žodynuose kiekvienas raktas turi priskirtą vertę. Raktai turi būti unikalūs ir dažniausiai yra string'ai.
- Prieiga prie vertės: Norėdami pasiekti vertę, naudojate raktą, pvz., studentas["vardas"] grąžins „Jonas“.
- Naujo elemento pridėjimas: Galite pridėti naują raktą su verte, pvz., studentas["miestas"] = "Vilnius".
### Pavyzdys:
```python
studentas = {
    "vardas": "Jonas",
    "amžius": 21,
    "kursas": "Informatika"
}

# Pridėti miestą
studentas["miestas"] = "Vilnius"

print("Atnaujinta studento informacija:", studentas)
```

## Rinkiniai (Set)
Rinkinys, arba set, yra unikalių elementų kolekcija. Tai reiškia, kad rinkinyje negali būti pasikartojančių elementų.

### Pavyzdys:
```python
skaiciai = {1, 2, 3, 4, 5}
vaisiai = {"obuolys", "bananas", "vyšnia"}

print("Skaičių rinkinys:", skaiciai)
print("Vaisių rinkinys:", vaisiai)
```

### Kaip veikia Rinkiniai?
- Unikalumas: Rinkiniuose negali būti pasikartojančių elementų. Jei bandysite pridėti pasikartojantį elementą, Python jį tiesiog ignoruos.
- Elemento pridėjimas: Galite pridėti naujus elementus į rinkinį naudodami add() funkciją, pvz., skaiciai.add(6).
### Pavyzdys:
```python
skaiciai = {1, 2, 3, 4, 5}

# Pridėti naują skaičių
skaiciai.add(6)

print("Atnaujintas skaičių rinkinys:", skaiciai)
```
Rinkiniai yra naudingi, kai reikia užtikrinti, kad visi elementai būtų unikalūs, pvz., dirbant su duomenų bazėmis ar analizuojant duomenis.