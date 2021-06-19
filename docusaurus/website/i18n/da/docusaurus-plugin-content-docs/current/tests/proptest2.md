---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Proportionstest med to stikprøver.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __var1__ | `(string|Factor) (required)`: navnet på den første variabel. Default: `none`.
* __success__ | `any (required)`: succeskategori for `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: navnet på den anden variabel (`var2` eller `group` skal angives). Default: `none`.
* __group__ | `(string|Factor)`: navnet på en grupperingsvariabel (`var2` eller `group` skal angives). Default: `none`.
* __alpha__ | `number`: signifikansniveau. Default: `0.05`.
* __direction__ | `string`: testretning (enten `less`, `greater` eller `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: forskel under H0. Default: `0`.
* __showDecision__ | `boolean`: kontrollerer, om der skal vises, hvis nulhypotesen forkastes ved det angivne signifikansniveau. Default: `false`.


## Eksempler

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
