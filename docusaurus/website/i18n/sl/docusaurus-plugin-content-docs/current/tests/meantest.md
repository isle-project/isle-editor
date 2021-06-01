---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Eno-vzorčni test povprečja.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `string (required)`: ime spremenljivke. Default: `none`.
* __type__ | `string`: vrsta testa (`Z Test` ali `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: standardni odklon (za `Z test`). Default: `none`.
* __alpha__ | `number`: raven pomembnosti. Default: `0.05`.
* __direction__ | `string`: smer testa (`manjši`, `večji` ali `obojestranski`). Default: `'two-sided'`.
* __mu0__ | `number`: povprečje pod ničelno hipotezo. Default: `0`.
* __showDecision__ | `boolean`: nadzoruje, ali se prikaže, če je ničelna hipoteza zavrnjena pri določeni ravni pomembnosti.. Default: `false`.


## Primeri

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
