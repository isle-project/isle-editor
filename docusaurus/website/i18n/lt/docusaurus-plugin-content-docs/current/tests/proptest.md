---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Vienos imties proporcijų testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `(string|Factor) (required)`: kintamojo pavadinimas. Default: `none`.
* __success__ | `any (required)`: `kintamojo` sėkmės kategorija. Default: `none`.
* __alpha__ | `number`: reikšmingumo lygis. Default: `0.05`.
* __direction__ | `string`: testo kryptis (`mažesnė`, `didesnė` arba `dvipusė`).. Default: `'two-sided'`.
* __p0__ | `number`: proporcijos pagal nulinę hipotezę. Default: `0.5`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti, jei nulinė hipotezė atmetama esant nurodytam reikšmingumo lygiui.. Default: `false`.


## Pavyzdžiai

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
