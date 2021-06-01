---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Eno-vzorčni proporcionalni test.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: ime spremenljivke. Default: `none`.
* __success__ | `any (required)`: kategorija uspeha `spremenljivke`. Default: `none`.
* __alpha__ | `number`: raven pomembnosti. Default: `0.05`.
* __direction__ | `string`: smer testa (`manjši`, `večji` ali `obojestranski`). Default: `'two-sided'`.
* __p0__ | `number`: delež pri ničelni hipotezi. Default: `0.5`.
* __showDecision__ | `boolean`: nadzoruje, ali se prikaže, če je ničelna hipoteza zavrnjena pri določeni ravni pomembnosti.. Default: `false`.


## Primeri

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
