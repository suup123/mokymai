# Valdymo Struktūros

Valdymo struktūros yra pagrindiniai įrankiai, leidžiantys valdyti programos vykdymo eigą. Python kalboje naudojamos sąlyginės struktūros, ciklai bei įvairūs operatoriai, kurie leidžia atlikti sprendimus ir kartoti veiksmus, remiantis nustatytomis sąlygomis. Šiame skyriuje aptarsime sąlyginius teiginius (if/else), ciklass (for/while), palyginimo ir loginius operatorius.

## Sąlyginiai Teiginiai (if/else): Programų Valdymas Pagal Sąlygas

Sąlyginiai teiginiai leidžia jūsų programai priimti sprendimus remiantis tam tikromis sąlygomis. Python kalboje dažniausiai naudojami `if`, `elif` ir `else` teiginiai.

### Pavyzdys:

```python
amzius = 18

if amzius >= 18:
    print("Jūs esate pilnametis.")
else:
    print("Jūs esate nepilnametis.")
```

### Kaip tai veikia?
- if teiginys: Tikrina, ar sąlyga yra teisinga (True). Jei taip, vykdomas atitinkamas kodo blokas.
- else teiginys: Vykdomas, jei visos ankstesnės sąlygos (if ar elif) yra neteisingos (False).
### Pavyzdys su elif:
```python
amzius = 16

if amzius >= 18:
    print("Jūs esate pilnametis.")
elif amzius >= 16:
    print("Jūs galite vairuoti su leidimu.")
else:
    print("Jūs esate nepilnametis ir negalite vairuoti.")
elif teiginys: Naudojamas, kai reikia patikrinti kelias sąlygas. Jis veikia kaip papildomas if teiginys.
```
Sąlyginiai teiginiai yra naudingi, kai reikia valdyti programos eigą priklausomai nuo vartotojo įvesties ar kitų sąlygų.

## Ciklai (for/while): Kartojimo Struktūros
Ciklai leidžia kartoti tam tikrą kodo bloką, kol tam tikra sąlyga yra teisinga. Python kalboje yra dvi pagrindinės ciklai: for ir while.

### for ciklas
for ciklas naudojamas, kai norite kartoti veiksmus per tam tikrą elementų seką, pvz., sąrašą ar string'ą.

### Pavyzdys:
```python
vaisiai = ["obuolys", "bananas", "vyšnia"]

for vaisius in vaisiai:
    print("Aš mėgstu", vaisius)
Kaip tai veikia?
for teiginys: ciklas praeina per kiekvieną vaisiai sąrašo elementą ir kiekvieną kartą vykdo kodo bloką.
in operatorius: Naudojamas norint patikrinti, ar elementas yra tam tikrame sąraše ar sekose.
while ciklas
while ciklas kartoja kodo bloką tol, kol sąlyga yra teisinga (True).
```

### Pavyzdys:
```python
skaicius = 1

while skaicius < 5:
    print("Skaicius yra:", skaicius)
    skaicius += 1
```

### Kaip tai veikia?
- while teiginys: Tikrina sąlygą ir kartoja kodo bloką tol, kol sąlyga yra teisinga.
- skaicius += 1: Kiekvieną kartą, kai ciklas vykdoma, skaicius padidėja vienu. Tai užtikrina, kad ciklas kada nors sustos.
- ciklai yra labai naudingi, kai reikia atlikti pakartotinius veiksmus, pavyzdžiui, kartoti per sąrašą ar vykdyti tam tikrą veiksmą, kol sąlyga tampa klaidinga.

## Palyginimo Operatoriai: Kaip Palyginti Reikšmes
Palyginimo operatoriai naudojami sąlygoms tikrinti. Python kalboje yra keli pagrindiniai palyginimo operatoriai:

- ==: Lyginimas. Tikrina, ar dvi reikšmės yra lygios.
- !=: Nelygu. Tikrina, ar dvi reikšmės nėra lygios.
- >: Didesnis. Tikrina, ar pirma reikšmė yra didesnė už antrą.
- <: Mažesnis. Tikrina, ar pirma reikšmė yra mažesnė už antrą.
- >=: Didesnis arba lygus.
- <=: Mažesnis arba lygus.
### Pavyzdys:
```python
a = 10
b = 20

print(a == b)  # False, nes 10 nėra lygu 20
print(a != b)  # True, nes 10 nėra lygu 20
print(a > b)   # False, nes 10 nėra didesnis už 20
print(a < b)   # True, nes 10 yra mažesnis už 20
```
Palyginimo operatoriai dažnai naudojami sąlyginiuose teiginiuose ir ciklaie, kad būtų galima priimti sprendimus remiantis reikšmėmis.

## Loginiai Operatoriai: Tiesos ir Klaidos Logika Python Kalboje
Loginiai operatoriai naudojami sujungti kelias sąlygas arba apibrėžti sudėtingesnes sąlygas. Python kalboje yra trys pagrindiniai loginiai operatoriai:

- and: Grąžina True, jei abi sąlygos yra teisingos.
- or: Grąžina True, jei bent viena sąlyga yra teisinga.
- not: Apverčia sąlygą – True tampa False, o False tampa True.
### Pavyzdys:
```python
amzius = 25
pajamos = 30000

# Tikrina, ar asmuo yra pilnametis ir turi pakankamai pajamų
if amzius >= 18 and pajamos > 20000:
    print("Jūs atitinkate kriterijus.")
else:
    print("Jūs neatitinkate kriterijų.")

# Tikrina, ar amžius yra mažesnis nei 18 arba pajamos yra mažesnės nei 20000
if amzius < 18 or pajamos < 20000:
    print("Jūs neatitinkate bent vieno kriterijaus.")
else:
    print("Jūs atitinkate kriterijus.")
```
Loginiai operatoriai leidžia kurti sudėtingesnes sąlygas, derinant kelias patikras. Jie dažnai naudojami su if, elif ir while teiginiais.