---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korrelációs teszt.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __var1__ | `string (required)`: az első változó neve. Default: `none`.
* __var2__ | `string (required)`: a második változó neve. Default: `none`.
* __rho0__ | `number`: korrelációs érték a nullhipotézis esetén. Default: `0`.
* __alpha__ | `number`: szignifikancia szint. Default: `0.05`.
* __direction__ | `string`: a vizsgálat iránya (vagy `less`, `greater`, vagy `two-sided`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: ellenőrzi, hogy megjelenjen-e, ha a nullhipotézis a megadott szignifikancia szinten elutasításra kerül.. Default: `false`.


## Példák

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
