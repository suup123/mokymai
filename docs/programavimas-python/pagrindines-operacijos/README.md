# Pirmoji Python Programa: "Hello, World!"

Sveikiname su pirmosios Python programos kūrimu! „Hello, World!“ yra klasikinė pradedančiųjų programa, kurią rašo beveik kiekvienas, mokydamasis naujos programavimo kalbos. Ši programa atspausdina žinutę „Hello, World!“ ekrane.

## Kodėl „Hello, World!“?

Ši programa yra puikus būdas pamatyti, kaip veikia programavimo kalba, ir įsitikinti, kad viskas yra teisingai sukonfigūruota jūsų kompiuteryje. Ji taip pat yra paprasta, todėl puikiai tinka pradedantiesiems.

## Programos Kodo Pavyzdys

Štai kaip atrodo „Hello, World!“ programa Python kalboje:

```python
print("Hello, World!")
```

## Kaip Tai Veikia?
- print() funkcija: Python kalboje print() funkcija yra naudojama tam, kad atspausdintų tekstą ekrane. Tai reiškia, kad ji paima tai, kas yra skliausteliuose, ir parodo tai vartotojui.
- Tekstas („Hello, World!“): Tekstas, kurį norite atspausdinti, turi būti uždarytas kabutėse. Python atpažins, kad tai yra tekstas (arba string'as) ir atspausdins jį tiksliai taip, kaip parašyta.

Kai paleisite šią programą, ekrane pamatysite šį rezultatą:

```plaintext
Hello, World!
```

## Kaip Paleisti Šią Programą?
- Parašykite kodą: Įveskite aukščiau pateiktą kodą į savo Python redaktorių arba teksto redaktorių.
- Išsaugokite failą: Išsaugokite failą su plėtiniu .py (pvz., hello_world.py).
- Paleiskite programą: Naudokite Python interpretatorių, kad paleistumėte savo programą. Tai galite padaryti komandinėje eilutėje, įvesdami:
```plaintext
python hello_world.py
```
- Pamatykite rezultatą: Jei viskas veikia teisingai, ekrane turėtumėte matyti „Hello, World!“.
## Išvada
„Hello, World!“ yra jūsų pirmasis žingsnis mokantis Python. Nors tai paprasta programa, ji parodo, kaip Python veikia ir kaip lengva pradėti kurti programas su šia kalba. Dabar, kai žinote, kaip parašyti ir paleisti paprastą programą, esate pasiruošę žengti kitą žingsnį savo mokymosi kelyje!

# 2. Pagrindinės Operacijos

Matematinės operacijos yra vienas iš pagrindinių dalykų, kuriuos reikia išmokti programavimo kalboje. Šiame skyriuje aptarsime, kaip Python kalboje atliekama sudėtis ir atimtis. Tai yra pagrindinės operacijos, kurios naudojamos daugelyje programų.

## Sudėtis

Python kalboje sudėtis atliekama naudojant `+` operatorių. Šis operatorius prideda vieną skaičių prie kito. Pažiūrėkime, kaip tai veikia:

### Pavyzdys:

```python
# Dviejų skaičių sudėtis
a = 5
b = 3
rezultatas = a + b
print("Rezultatas:", rezultatas)
```

## Kaip tai veikia?
- a = 5: Čia mes sukuriame kintamąjį a ir priskiriame jam vertę 5.
- b = 3: Sukuriame kitą kintamąjį b su verte 3.
- rezultatas = a + b: Pridedame a ir b reikšmes ir rezultatą išsaugome kintamajame rezultatas.
- print("Rezultatas:", rezultatas): Atspausdiname rezultatą ekrane. Šiuo atveju, ekrane matysite „Rezultatas: 8“.
- Sudėtis yra labai paprasta ir yra viena iš dažniausiai naudojamų operacijų Python kalboje.

## Atimtis
Atimtis Python kalboje atliekama naudojant - operatorių. Šis operatorius atima vieną skaičių iš kito.

Pavyzdys:
```python
# Dviejų skaičių atimtis
a = 10
b = 4
rezultatas = a - b
print("Rezultatas:", rezultatas)
```

## Kaip tai veikia?
- a = 10: Sukuriame kintamąjį a ir priskiriame jam vertę 10.
- b = 4: Sukuriame kitą kintamąjį b su verte 4.
- rezultatas = a - b: Atliekame a ir b reikšmių atimtį ir rezultatą išsaugome kintamajame rezultatas.
- print("Rezultatas:", rezultatas): Atspausdiname rezultatą ekrane. Šiuo atveju, ekrane matysite „Rezultatas: 6“.
- Atimtis taip pat yra labai paprasta operacija ir ją dažnai naudosite programuodami.

## Papildomi Pavyzdžiai:
Pridėjimas ir atėmimas iš nulio:
```python
a = 5
b = 0
```

## Sudėtis su nuliu
```python
rezultatas = a + b
print("5 + 0 =", rezultatas)  # Rezultatas bus 5
```

## Atimtis iš nulio
```python
rezultatas = a - b
print("5 - 0 =", rezultatas)  # Rezultatas bus 5
```

## Daugyba

Python kalboje daugyba atliekama naudojant `*` operatorių. Šis operatorius padaugina vieną skaičių iš kito.

### Pavyzdys:

```python
# Dviejų skaičių daugyba
a = 7
b = 6
rezultatas = a * b
print("Rezultatas:", rezultatas)
```

## Kaip tai veikia?
- a = 7: Sukuriame kintamąjį a ir priskiriame jam vertę 7.
- b = 6: Sukuriame kitą kintamąjį b su verte 6.
- rezultatas = a * b: Padauginame a ir b reikšmes, o rezultatą išsaugome kintamajame rezultatas.
- print("Rezultatas:", rezultatas): Atspausdiname rezultatą ekrane. Šiuo atveju, ekrane matysite „Rezultatas: 42“.
- Daugyba yra paprasta ir dažnai naudojama operacija, ypač kai reikia skaičiuoti daugybą arba dirbti su masyvais ir kilpomis.

## Dalyba
Dalyba Python kalboje atliekama naudojant / operatorių. Šis operatorius dalija vieną skaičių iš kito.

Pavyzdys:
```python
# Dviejų skaičių dalyba
a = 15
b = 3
rezultatas = a / b
print("Rezultatas:", rezultatas)
```

## Kaip tai veikia?
- a = 15: Sukuriame kintamąjį a su verte 15.
- b = 3: Sukuriame kitą kintamąjį b su verte 3.
- rezultatas = a / b: Padalijame a iš b, o rezultatą išsaugome kintamajame rezultatas.
- print("Rezultatas:", rezultatas): Atspausdiname rezultatą ekrane. Šiuo atveju, ekrane matysite „Rezultatas: 5.0“.
- Svarbu atkreipti dėmesį, kad Python dalybos rezultatas visada yra realusis skaičius (su kableliu), net jei rezultatas yra sveikasis skaičius.

## Modulis
Modulio operacija, atliekama naudojant % operatorių, grąžina dalybos likutį.

Pavyzdys:
```python
# Modulio operacija
a = 17
b = 3
rezultatas = a % b
print("Rezultatas:", rezultatas)
```

## Kaip tai veikia?
- a = 17: Sukuriame kintamąjį a su verte 17.
- b = 3: Sukuriame kitą kintamąjį b su verte 3.
- rezultatas = a % b: Atliekame modulio operaciją ir išsaugome likutį kintamajame rezultatas.
- print("Rezultatas:", rezultatas): Atspausdiname rezultatą ekrane. Šiuo atveju, ekrane matysite „Rezultatas: 2“.
Modulis yra naudingas, kai reikia sužinoti likutį po dalybos, pavyzdžiui, tikrinant, ar skaičius yra lyginis ar nelyginis.

## Laipsnio Kėlimas
Laipsnio kėlimas Python kalboje atliekamas naudojant ** operatorių. Jis kelia skaičių nurodytu laipsniu.

Pavyzdys:
```python
# Laipsnio kėlimas
a = 2
b = 3
rezultatas = a ** b
print("Rezultatas:", rezultatas)
```

## Kaip tai veikia?
- a = 2: Sukuriame kintamąjį a su verte 2.
- b = 3: Sukuriame kitą kintamąjį b su verte 3.
- rezultatas = a ** b: Pakeliame a į b laipsnį ir rezultatą išsaugome kintamajame rezultatas.
- print("Rezultatas:", rezultatas): Atspausdiname rezultatą ekrane. Šiuo atveju, ekrane matysite „Rezultatas: 8“.
Laipsnio kėlimas yra naudingas, kai jums reikia pakelti skaičių tam tikru laipsniu, pavyzdžiui, kai dirbate su eksponentinėmis funkcijomis ar matematine analize.