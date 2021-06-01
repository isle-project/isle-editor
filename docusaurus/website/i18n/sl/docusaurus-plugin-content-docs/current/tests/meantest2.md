---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Dvoumenski test povprečne vrednosti.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __x__ | `string (required)`: ime prve spremenljivke. Default: `none`.
* __y__ | `string`: ime druge spremenljivke (treba je navesti `y` ali `group`). Default: `none`.
* __group__ | `(string|Factor)`: ime spremenljivke za razvrščanje v skupine (treba je navesti `y` ali `group`). Default: `none`.
* __type__ | `string`: vrsta testa (bodisi `Z Test` ali `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: prvi standardni odklon (za `Z Test`). Default: `none`.
* __ystdev__ | `number`: drugi standardni odklon (za `Z Test`). Default: `none`.
* __alpha__ | `number`: raven pomembnosti. Default: `0.05`.
* __direction__ | `string`: smer testa (`manjši`, `večji` ali `obojestranski`). Default: `'two-sided'`.
* __diff__ | `number`: razlika pod H0. Default: `0`.
* __showDecision__ | `boolean`: nadzoruje, ali se prikaže, če je ničelna hipoteza zavrnjena pri določeni ravni pomembnosti.. Default: `false`.


## Primeri

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
