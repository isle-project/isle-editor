---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Test af middelværdi med to stikprøver.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __x__ | `string (required)`: navnet på den første variabel. Default: `none`.
* __y__ | `string`: navnet på den anden variabel (`y` eller `group` skal angives). Default: `none`.
* __group__ | `(string|Factor)`: navnet på en grupperingsvariabel (`y` eller `group` skal angives). Default: `none`.
* __type__ | `string`: testtype (enten "Z-test" eller "T-test"). Default: `'T Test'`.
* __xstdev__ | `number`: første standardafvigelse (for `Z Test`). Default: `none`.
* __ystdev__ | `number`: anden standardafvigelse (for `Z Test`). Default: `none`.
* __alpha__ | `number`: signifikansniveau. Default: `0.05`.
* __direction__ | `string`: testretning (enten "mindre", "større" eller "tosidet"). Default: `'two-sided'`.
* __diff__ | `number`: forskel under H0. Default: `0`.
* __showDecision__ | `boolean`: kontrollerer, om der skal vises, hvis nulhypotesen forkastes ved det angivne signifikansniveau. Default: `false`.


## Eksempler

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
