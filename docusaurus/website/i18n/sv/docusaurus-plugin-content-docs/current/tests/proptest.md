---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Proportionstest med ett stickprov.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `(string|Factor) (required)`: namn på variabeln. Default: `none`.
* __success__ | `any (required)`: framgångskategori för `variabel`.. Default: `none`.
* __alpha__ | `number`: signifikansnivå. Default: `0.05`.
* __direction__ | `string`: Testets riktning (antingen "mindre", "större" eller "tvåsidig").. Default: `'two-sided'`.
* __p0__ | `number`: andel under nollhypotesen. Default: `0.5`.
* __showDecision__ | `boolean`: kontrollerar om det ska visas om nollhypotesen förkastas på den angivna signifikansnivån.. Default: `false`.


## Exempel

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
