---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Medelvärdetest med ett stickprov.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __variable__ | `string (required)`: namn på variabeln. Default: `none`.
* __type__ | `string`: Typ av test (Z-test eller T-test).. Default: `'T Test'`.
* __stdev__ | `number`: standardavvikelse (för Z-test).. Default: `none`.
* __alpha__ | `number`: signifikansnivå. Default: `0.05`.
* __direction__ | `string`: Testets riktning (antingen "mindre", "större" eller "tvåsidig").. Default: `'two-sided'`.
* __mu0__ | `number`: medelvärde under nollhypotesen. Default: `0`.
* __showDecision__ | `boolean`: kontrollerar om det ska visas om nollhypotesen förkastas på den angivna signifikansnivån.. Default: `false`.


## Exempel

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
