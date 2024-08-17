# IT-Mokymai

Teorija, pavyzdžiai, užduotys.

## Projekto pasiruošimas darbui

Norint parsisiųsti projekto kodą naudokite komandą:

```bash
git clone xxx
```

Norint pereiti į gautą aplanką:

```bash
cd informatikos-vbe
```

Norint įrašyti reikalingas bibliotekas darbui:

```bash
npm install
```

## Projekto paleidimas

Norint paleisti projektą lokaliai, kad jame ką nors atnaujinti:

```bash
npm run dev
```

Norint paruošti projektą talpinimui:

```bash
npm run build
```

## Jei nori i gh-pages pushint

```bash
git checkout gh-pages
```

```bash
git add .
```

```bash
git commit -m "xxx"
```

```bash
git subtree push --prefix docs/.vuepress/dist origin gh-pages
```

Ir automatically pasideployina i puslapi, nieko nereik daryt.

Kai kazka paeditini removeLeadingSlashes.js padaro pathus kaip reikia deployinant, tik problema kad pakeicia ir linkus viduje cj, pavyzdziui jei esi programavimas-python, nenulinkina normaliai i viduj esancius elementus su navbar, nes pakeite visus pathus kad nors bent veiktu cj :D Cia kazkaip reiktu pasizet ateitiy, siaip tai apacioj buna zalia mygtukas ir su juo eina toliau pereiti.