# Magyar Floptropica Kormánya – Weboldal

Teljesen ingyenes, többoldalas weboldal a **Magyar Floptropica Kormányának**, az eredeti floptropica.com és gov.floptropica.com stílusában.

## Fájlstruktúra

```
magyar-floptropica/
├── index.html              ← Főoldal
├── gov.html                ← Szavazás / Nemzeti Választási Bizottság (mint gov.floptropica.com)
├── allampolgarsag.html     ← Állampolgárság igénylő oldal
├── css/
│   └── style.css           ← Egyedi stílusok
├── assets/
│   └── logo.svg            ← Logó (SVG)
└── README.md
```

## Oldalak

| Fájl                  | Tartalom                                              |
|-----------------------|-------------------------------------------------------|
| `index.html`          | Főoldal – hero, szolgáltatások, rólunk, GYIK          |
| `gov.html`            | Külön kormányzati/szavazós portal (countdown, szavazólap) |
| `allampolgarsag.html` | Állampolgárság igénylő űrlap                          |

## Kódolási stílus

- Tiszta, jól kommentezett HTML (könnyű szerkeszteni)
- Tailwind CSS CDN-nel (nincs build lépés)
- Egyedi CSS a `css/style.css`-ben
- Mobilbarát (reszponzív)
- Logó SVG formátumban

## Hogyan tedd fel az internetre?

### Cloudflare Pages (ajánlott)
1. Menj a [dash.cloudflare.com](https://dash.cloudflare.com) oldalra és regisztrálj
2. **Workers & Pages** → **Create** → **Pages** → **Upload assets**
3. Húzd be az egész `magyar-floptropica` mappát
4. Kész → kapsz egy `*.pages.dev` címet

### GitHub Pages
1. Hozz létre egy repository-t
2. Töltsd fel a fájlokat
3. Settings → Pages → Source: main branch

### Netlify Drop
1. Menj a [app.netlify.com/drop](https://app.netlify.com/drop) oldalra
2. Húzd be a mappát

## Testreszabás

- **Szövegek**: csak szerkeszd a HTML fájlokat
- **Színek**: Tailwind class-ok + a `tailwind.config` a `<head>`-ben
- **Logó**: cseréld le az `assets/logo.svg` fájlt
- **Új oldal**: másold az egyik HTML-t és módosítsd

## Következő lehetséges lépések

- Valódi űrlap (Formspree / Tally / Google Forms)
- Több szolgáltatás-oldal
- Sötét téma
- Saját domain

---

Készült a magyar flop közösségnek.  
**Slay responsibly.** 🇭🇺🦩
