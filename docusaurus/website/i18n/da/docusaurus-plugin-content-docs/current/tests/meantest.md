---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Test af middelværdien ved en prøve.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `string (required)`: navnet på variablen. Default: `none`.
* __type__ | `string`: testtype (`Z-test` eller `T-test`). Default: `'T Test'`.
* __stdev__ | `number`: standardafvigelse (for `Z Test`). Default: `none`.
* __alpha__ | `number`: signifikansniveau. Default: `0.05`.
* __direction__ | `string`: testretning (enten "mindre", "større" eller "tosidet"). Default: `'two-sided'`.
* __mu0__ | `number`: middelværdien under nulhypotesen. Default: `0`.
* __showDecision__ | `boolean`: kontrollerer, om der skal vises, hvis nulhypotesen forkastes ved det angivne signifikansniveau. Default: `false`.


## Eksempler

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
