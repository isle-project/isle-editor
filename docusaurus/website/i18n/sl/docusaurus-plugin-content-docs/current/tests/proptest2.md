---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Dvoumni proporcionalni test.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __var1__ | `(string|Factor) (required)`: ime prve spremenljivke. Default: `none`.
* __success__ | `any (required)`: kategorija uspeha `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: ime druge spremenljivke (treba je navesti `var2` ali `group`). Default: `none`.
* __group__ | `(string|Factor)`: ime skupinske spremenljivke (treba je navesti `var2` ali `group`). Default: `none`.
* __alpha__ | `number`: raven pomembnosti. Default: `0.05`.
* __direction__ | `string`: smer testa (`manjši`, `večji` ali `obojestranski`). Default: `'two-sided'`.
* __diff__ | `number`: razlika pod H0. Default: `0`.
* __showDecision__ | `boolean`: nadzoruje, ali se prikaže, če je ničelna hipoteza zavrnjena pri določeni ravni pomembnosti.. Default: `false`.


## Primeri

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
