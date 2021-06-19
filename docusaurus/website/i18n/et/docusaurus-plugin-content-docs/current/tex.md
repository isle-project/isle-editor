---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` on ISLE element, mida saab kasutada LaTeXi võrrandite kuvamiseks. Kapuutsi all kasutab komponent [KaTeX](https://github.com/Khan/KaTeX), mis tagab ülikiire renderdamise.

## Valikud

* __raw__ | `(string|number) (required)`: Kirjalik LaTeXi "string", mida renderdada. Aktsepteerib ka `numbers`.. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, mis näitab, kas võrrand kuvatakse rida- või kuvamisrežiimis. Default: `false`.
* __numbered__ | `boolean`: kontrollib, kas kuvamisrežiimi võrrandite puhul kuvatakse võrrandi number. Default: `false`.
* __style__ | `object`: `objekti` CSS võtmeväärtuspaaridega, mida rakendatakse võrrandi konteinerile. Default: `{}`.
* __tag__ | `string`: Kohandatud tähemärgid, mis kuvatakse õigel poolel olevate võrrandite kuvamiseks. Vaikimisi on tunnis sisalduva võrrandi number.. Default: `none`.
* __elems__ | `object`: `objekti`, kus `võtmed` tähistavad LaTeXi tähemärke ja nende vastavad väärtused on konfiguratsiooni `objektid`, et muuta need interaktiivseks. Valiku `tooltip` seadistamine näitab LaTeXi tähemärkide kohal hõljudes tööriistavihikut. Omaduse `variable` seadistamine kuvab sisendliuguri vastava olekumuutuja muutmiseks; sel juhul on toetatud täiendavad omadused `legend`, `min`, `max` ja `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: popoveri positsioon määratud "elementide" jaoks (kas `top`, `right`, `bottom` või `left`).. Default: `'top'`.
* __onPopover__ | `function`: tagasilöögifunktsioon `function`, kui kontrollpopover on sisse või välja lülitatud; saab ainsa argumendina booleanina kuvamise staatuse.. Default: `onPopover() {}`.
* __onClick__ | `function`: tagasilöögifunktsioon, mis käivitub iga kord, kui kasutaja klikib võrrandile. Default: `none`.


## Näited

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



