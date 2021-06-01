---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` je prvok ISLE, ktorý možno použiť na zobrazenie rovníc LaTeXu. Pod kapotou komponent používa [KaTeX](https://github.com/Khan/KaTeX) na bleskurýchle vykresľovanie.

## Možnosti

* __raw__ | `(string|number) (required)`: Doslovný `reťazec` LaTeXu, ktorý sa má vykresliť. Akceptuje aj `čísla`. Default: `none`.
* __displayMode__ | `boolean`: `boolean` určujúci, či sa má rovnica zobraziť v riadku alebo v režime zobrazenia. Default: `false`.
* __numbered__ | `boolean`: kontroluje, či sa má zobrazovať číslo rovnice pre rovnice v režime zobrazenia. Default: `false`.
* __style__ | `object`: `objekt` s dvojicami kľúč-hodnota CSS, ktoré sa majú použiť na kontajner rovnice. Default: `{}`.
* __tag__ | `string`: Vlastné znaky zobrazené pre zobrazenie rovníc na pravej strane. Predvolené nastavenie je číslo rovnice vo vnútri lekcie. Default: `none`.
* __elems__ | `object`: `objekt`, pričom `kľúče` označujú znaky LaTeXu a ich zodpovedajúce hodnoty sú konfiguračné `objekty`, aby boli interaktívne. Nastavením voľby `tooltip` sa po prejdení nad znakmi LaTeXu zobrazí nápoveda. Nastavenie vlastnosti `variable` zobrazí vstupný posuvník na zmenu príslušnej stavovej premennej; v tomto prípade sú podporované ďalšie vlastnosti `legend`, `min`, `max` a `step`. Default: `{}`.
* __popoverPlacement__ | `string`: pozícia popoveru pre zadané `elemy` (buď `hore`, `vpravo`, `dole` alebo `vľavo`). Default: `'top'`.
* __onPopover__ | `function`: spätné volanie `funkcia` pri zapnutí alebo vypnutí ovládacieho prvku popover; ako jediný argument prijíma stav zobrazenia ako boolean. Default: `onPopover() {}`.
* __onClick__ | `function`: spätné volanie `funkcia` vyvolané vždy, keď používateľ klikne na rovnicu. Default: `none`.


## Príklady

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



