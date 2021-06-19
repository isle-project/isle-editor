---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korrelationstest.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __var1__ | `string (required)`: namnet på den första variabeln. Default: `none`.
* __var2__ | `string (required)`: namnet på den andra variabeln. Default: `none`.
* __rho0__ | `number`: korrelationsvärde under nollhypotesen.. Default: `0`.
* __alpha__ | `number`: signifikansnivå. Default: `0.05`.
* __direction__ | `string`: Testets riktning (antingen `less`, `greater` eller `two-sided`).. Default: `'two-sided'`.
* __showDecision__ | `boolean`: kontrollerar om det ska visas om nollhypotesen förkastas på den angivna signifikansnivån.. Default: `false`.


## Exempel

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
