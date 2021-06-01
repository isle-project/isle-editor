---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korelacijski test.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __var1__ | `string (required)`: ime prve spremenljivke. Default: `none`.
* __var2__ | `string (required)`: ime druge spremenljivke. Default: `none`.
* __rho0__ | `number`: vrednost korelacije pri ničelni hipotezi. Default: `0`.
* __alpha__ | `number`: raven pomembnosti. Default: `0.05`.
* __direction__ | `string`: smer testa (`manjši`, `večji` ali `obojestranski`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: nadzoruje, ali se prikaže, če je ničelna hipoteza zavrnjena pri določeni ravni pomembnosti.. Default: `false`.


## Primeri

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
