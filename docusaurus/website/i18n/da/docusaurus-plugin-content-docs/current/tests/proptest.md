---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Proportionstest med én stikprøve.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: navnet på variablen. Default: `none`.
* __success__ | `any (required)`: succeskategori af `variabel`. Default: `none`.
* __alpha__ | `number`: signifikansniveau. Default: `0.05`.
* __direction__ | `string`: testretning (enten `less`, `greater` eller `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: andel under nulhypotesen. Default: `0.5`.
* __showDecision__ | `boolean`: kontrollerer, om der skal vises, hvis nulhypotesen forkastes ved det angivne signifikansniveau. Default: `false`.


## Eksempler

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
