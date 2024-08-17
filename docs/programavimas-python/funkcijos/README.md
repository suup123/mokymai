# Funkcijos

Funkcijos yra vienas iš svarbiausių programavimo konceptų, leidžiančių struktūrizuoti ir pernaudoti kodą. Funkcijos leidžia suskirstyti programą į mažesnes, lengviau valdomas dalis, taip pat padeda išvengti kodo pasikartojimo. Šiame skyriuje aptarsime, kaip kurti ir naudoti funkcijas, kaip dirbti su funkcijų parametrais ir grąžinamosiomis reikšmėmis, bei kaip integruoti ankstesnes žinias į funkcijas.

## Funkcijų Kūrimas: Kaip Kurti ir Naudoti Funkcijas

Funkcija yra kodo blokas, kuris atlieka tam tikrą užduotį. Python kalboje funkcijos kuriamos naudojant `def` raktažodį, po kurio eina funkcijos pavadinimas ir skliaustai. 

### Pavyzdys:

```python
def pasisveikinimas():
    print("Labas, pasauli!")
```

### Kaip tai veikia?
- def raktažodis: Tai raktažodis, naudojamas funkcijai apibrėžti.
- Funkcijos pavadinimas: Kiekviena funkcija turi pavadinimą, kuris padeda ją atpažinti. Šiame pavyzdyje funkcijos pavadinimas yra pasisveikinimas.
- Kodo blokas: Kodo blokas, esantis po funkcijos apibrėžimo, yra funkcijos turinys. Šis kodas bus vykdomas, kai funkcija bus iškviesta.

Norėdami iškviesti funkciją ir ją vykdyti, tiesiog parašykite funkcijos pavadinimą su skliaustais:
```python
pasisveikinimas()  # Iškviečia funkciją ir atspausdina "Labas, pasauli!"
```
Funkcijos leidžia jums suskirstyti programą į atskiras dalis, kurios atlieka konkrečias užduotis.

## Funkcijų Parametrai ir Grąžinamosios Reikšmės: Funkcijų Išplėtimas
Funkcijų parametrai leidžia perduoti informaciją į funkciją, o grąžinamosios reikšmės leidžia funkcijai grąžinti rezultatą. Tai padidina funkcijų lankstumą ir naudingumą.

## Funkcijų Parametrai
Funkcijų parametrai yra kintamieji, kuriuos galite perduoti funkcijai, kad ji galėtų atlikti operacijas su jais.

### Pavyzdys:
```python
def pasisveikinimas(vardas):
    print("Labas, " + vardas + "!")

pasisveikinimas("Jonas")  # Iškviečia funkciją su parametru "Jonas"
pasisveikinimas("Agnė")   # Iškviečia funkciją su parametru "Agnė"
```
### Kaip tai veikia?
- Parametras: Funkcijos apibrėžime nurodytas kintamasis (šiuo atveju vardas) yra funkcijos parametras.
- Perduodama reikšmė: Kai iškviečiate funkciją, galite perduoti reikšmę parametrui. Ši reikšmė naudojama funkcijos viduje.

## Grąžinamosios Reikšmės
Grąžinamosios reikšmės leidžia funkcijai grąžinti rezultatą atgal į programą, kad jį būtų galima toliau naudoti.

### Pavyzdys:
```python
def sudeti(a, b):
    suma = a + b
    return suma

rezultatas = sudeti(5, 3)
print("Suma yra:", rezultatas)
```

### Kaip tai veikia?
- return raktažodis: return grąžina reikšmę iš funkcijos. Po return esanti reikšmė tampa funkcijos rezultatu.
- Funkcijos iškvietimas: Kai iškviečiate funkciją sudeti(5, 3), rezultatas yra grąžinamas ir saugomas kintamajame rezultatas.
- Grąžinamosios reikšmės yra naudingos, kai norite, kad funkcija atliktų skaičiavimus ar kitus veiksmus ir grąžintų rezultatą, su kuriuo galite dirbti toliau.

## Ankstesnių Žinių Integravimas Į Funkcijas: Matematikos ir Duomenų Tipų Panaudojimas Funkcijose
Funkcijos leidžia integruoti visas jūsų iki šiol įgytas žinias apie matematiką, duomenų tipus ir valdymo struktūras, kad galėtumėte kurti sudėtingesnes ir galingesnes programas.

### Pavyzdys:
Sukurkime funkciją, kuri apskaičiuoja stačiakampio plotą:

```python
def staciakampio_plotas(ilgis, plotis):
    plotas = ilgis * plotis
    return plotas

ilgis = 5
plotis = 3
rezultatas = staciakampio_plotas(ilgis, plotis)
print("Stačiakampio plotas yra:", rezultatas)
```
### Kaip tai veikia?
- Matematika: Funkcija naudoja daugybos operaciją (ilgis * plotis), kad apskaičiuotų stačiakampio plotą.
- Duomenų tipai: Funkcija dirba su sveikaisiais skaičiais (int) ir grąžina rezultatą taip pat kaip sveikąjį skaičių.
- Grąžinamosios reikšmės naudojimas: Funkcija grąžina apskaičiuotą plotą, kurį vėliau galime naudoti programoje.

## Kompleksinis Pavyzdys:
Naudojant kelis parametrus, sąlyginį teiginį ir matematinę operaciją, sukuriame funkciją, kuri nustato, ar skaičius yra lyginis ar nelyginis:

``python
def lyginis_ar_nelyginis(skaicius):
    if skaicius % 2 == 0:
        return "Lyginis"
    else:
        return "Nelyginis"

skaicius = 7
rezultatas = lyginis_ar_nelyginis(skaicius)
print(skaicius, "yra", rezultatas)
```
### Kaip tai veikia?
-  Modulis: Naudojame modulio operatorių (%), kad nustatytume, ar skaičius dalijasi iš 2 be liekanos.
-  Sąlyginiai teiginiai: Funkcija naudoja if/else, kad nustatytų, kurią reikšmę grąžinti – „Lyginis“ arba „Nelyginis“.
-  Integracija: Ši funkcija naudoja jūsų ankstesnes žinias apie matematiką, logiką ir funkcijų kūrimą, kad atliktų užduotį.
