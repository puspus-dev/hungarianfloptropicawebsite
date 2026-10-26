# Magyar Floptropica Kormánya – Weboldal

Teljesen ingyenes, többoldalas weboldal FlopFiókkal, FlopID és eÚtlevél generálással.

## Fájlstruktúra

```
magyar-floptropica/
├── index.html                 ← Főoldal
├── gov.html                   ← Szavazás főoldal
├── fiok.html                  ← FlopFiók (regisztráció + dashboard)
├── flopid.html                ← FlopID generálás + vizuális kártya
├── eutlevel.html              ← eÚtlevél generálás + vizuális útlevél
├── allampolgarsag.html        ← Régi állampolgárság oldal (opcionális)
├── js/
│   └── storage.js             ← localStorage "adatbázis" + ID generálás
├── gov/
│   ├── jeloltek.html          ← Jelöltek (szerkeszthető demó)
│   ├── partok.html            ← Pártok (szerkeszthető demó)
│   ├── atlasz.html            ← Választási atlasz (szerkeszthető demó)
│   ├── eredmenyek.html        ← Eredmények (szerkeszthető demó)
│   └── hogyan.html            ← Hogyan szavazz (szerkeszthető demó)
├── css/style.css
├── assets/logo.svg
└── README.md
```

## Új funkciók

### FlopFiók rendszer
- Regisztráció és bejelentkezés (e-mail alapján)
- Adatok mentése a böngésző localStorage-ébe (ingyenes, nincs szükség szerverre)
- Dashboard a saját adataiddal

### FlopID generálás
- Egyedi azonosító generálása
- Szép, vizuális ID kártya
- 5 év érvényesség

### eÚtlevél generálás
- Hivatalos kinézetű digitális útlevél
- Egyedi útlevélszám
- 10 év érvényesség

### Gov aloldalak
Minden menüpontnak van saját demó oldala, amit könnyen szerkeszthetsz:
- Jelöltek
- Pártok
- Atlasz
- Eredmények
- Hogyan szavazz

## Hogyan működik a "adatbázis"?

Mivel teljesen ingyenes és statikus a hosting (Cloudflare Pages / GitHub Pages), az adatok a felhasználó böngészőjében tárolódnak (localStorage).

- Mindenki a saját gépén látja a saját fiókját
- Nem kell szerver, adatbázis vagy API kulcs
- Ha később valódi közös adatbázist akarsz (pl. Supabase free tier), könnyen átírható

## Feltöltés

A teljes magyar-floptropica mappát töltsd fel Cloudflare Pages-re (Upload assets) vagy GitHub Pages-re.

Slay responsibly. 🇭🇺🦩
