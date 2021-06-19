---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Medelvärdetest med två stickprov.

## Alternativ

* __data__ | `object (required)`: objekt av värdefält. Default: `none`.
* __x__ | `string (required)`: namnet på den första variabeln. Default: `none`.
* __y__ | `string`: namnet på den andra variabeln (`y` eller `group` måste anges).. Default: `none`.
* __group__ | `(string|Factor)`: Namnet på grupperingsvariabeln (`y` eller `group` måste anges).. Default: `none`.
* __type__ | `string`: typ av test (antingen "Z-test" eller "T-test"). Default: `'T Test'`.
* __xstdev__ | `number`: första standardavvikelsen (för Z-test).. Default: `none`.
* __ystdev__ | `number`: Andra standardavvikelsen (för Z-test).. Default: `none`.
* __alpha__ | `number`: signifikansnivå. Default: `0.05`.
* __direction__ | `string`: Testets riktning (antingen `less`, `greater` eller `two-sided`).. Default: `'two-sided'`.
* __diff__ | `number`: skillnad enligt H0. Default: `0`.
* __showDecision__ | `boolean`: kontrollerar om det ska visas om nollhypotesen förkastas på den angivna signifikansnivån.. Default: `false`.


## Exempel

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
