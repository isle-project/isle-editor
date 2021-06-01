---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Egymintás átlagteszt.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `string (required)`: változó neve. Default: `none`.
* __type__ | `string`: a vizsgálat típusa (Z-teszt vagy T-teszt). Default: `'T Test'`.
* __stdev__ | `number`: szórás (Z-teszt esetén). Default: `none`.
* __alpha__ | `number`: szignifikancia szint. Default: `0.05`.
* __direction__ | `string`: a teszt iránya (vagy "kisebb", "nagyobb", vagy "kétoldalú"). Default: `'two-sided'`.
* __mu0__ | `number`: a nullhipotézis szerinti átlag. Default: `0`.
* __showDecision__ | `boolean`: ellenőrzi, hogy megjelenjen-e, ha a nullhipotézis a megadott szignifikancia szinten elutasításra kerül.. Default: `false`.


## Példák

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
