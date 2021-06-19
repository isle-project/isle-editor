---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korrelationstest.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __var1__ | `string (required)`: navnet på den første variabel. Default: `none`.
* __var2__ | `string (required)`: navnet på den anden variabel. Default: `none`.
* __rho0__ | `number`: korrelationsværdi under nulhypotesen. Default: `0`.
* __alpha__ | `number`: signifikansniveau. Default: `0.05`.
* __direction__ | `string`: testretning (enten `less`, `greater` eller `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontrollerer, om der skal vises, hvis nulhypotesen forkastes ved det angivne signifikansniveau. Default: `false`.


## Eksempler

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
