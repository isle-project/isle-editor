---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` je element ISLE, ki se lahko uporablja za prikaz enačb LaTeX. Komponenta uporablja [KaTeX](https://github.com/Khan/KaTeX) za izjemno hitro prikazovanje.

## Možnosti

* __raw__ | `(string|number) (required)`: Dobesedni niz LaTeX-a, ki ga želite prikazati. Sprejema tudi `številke`. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, ki označuje, ali naj se enačba prikaže v vrstici ali v načinu prikaza. Default: `false`.
* __numbered__ | `boolean`: nadzoruje, ali se pri enačbah v načinu prikaza prikaže številka enačbe.. Default: `false`.
* __style__ | `object`: `objekt` s pari ključ-vrednost CSS, ki se uporabijo v vsebniku enačbe. Default: `{}`.
* __tag__ | `string`: Znaki po meri, prikazani za prikaz enačb na desni strani. Privzeta vrednost je številka enačbe znotraj lekcije.. Default: `none`.
* __elems__ | `object`: `objekt` s `ključi`, ki označujejo znake LaTeXa, njihove ustrezne vrednosti pa so konfiguracijski `objekti`, da so interaktivni. Če nastavite možnost `tooltip`, se ob premikanju z miško nad znaki LaTeX-a prikaže namig. Nastavitev lastnosti `premenjava` bo prikazala vhodni drsnik za spreminjanje ustrezne spremenljivke stanja; v tem primeru so podprte dodatne lastnosti `legenda`, `min`, `max` in `koraka`.. Default: `{}`.
* __popoverPlacement__ | `string`: položaj popoverja za določene `eleme` (bodisi `top`, `right`, `bottom` ali `left`). Default: `'top'`.
* __onPopover__ | `function`: povratna klicna `funkcija` ob vklopu ali izklopu popoverja; kot edini argument prejme stanje prikaza kot logično vrednost.. Default: `onPopover() {}`.
* __onClick__ | `function`: povratna klicna `funkcija`, ki se sproži, ko uporabnik klikne na enačbo. Default: `none`.


## Primeri

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



