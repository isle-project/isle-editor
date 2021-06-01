---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Proportionstest med två stickprov.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __var1__ | `(string|Factor) (required)`: namnet på den första variabeln. Default: `none`.
* __success__ | `any (required)`: framgångskategori för `var1`.. Default: `none`.
* __var2__ | `(string|Factor)`: namnet på den andra variabeln (`var2` eller `group` måste anges). Default: `none`.
* __group__ | `(string|Factor)`: Namnet på grupperingsvariabeln (`var2` eller `group` måste anges).. Default: `none`.
* __alpha__ | `number`: signifikansnivå. Default: `0.05`.
* __direction__ | `string`: Testets riktning (antingen "mindre", "större" eller "tvåsidig").. Default: `'two-sided'`.
* __diff__ | `number`: skillnad enligt H0. Default: `0`.
* __showDecision__ | `boolean`: kontrollerar om det ska visas om nollhypotesen förkastas på den angivna signifikansnivån.. Default: `false`.


## Exempel

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
