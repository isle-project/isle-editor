---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Yhden otoksen keskiarvotesti.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `string (required)`: muuttujan nimi. Default: `none`.
* __type__ | `string`: testin tyyppi (Z- tai T-testi).. Default: `'T Test'`.
* __stdev__ | `number`: keskihajonta (Z-testiä varten). Default: `none`.
* __alpha__ | `number`: merkitsevyystaso. Default: `0.05`.
* __direction__ | `string`: testin suunta (joko "pienempi", "suurempi" tai "kaksipuolinen").. Default: `'two-sided'`.
* __mu0__ | `number`: keskiarvo nollahypoteesin mukaisesti. Default: `0`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö, jos nollahypoteesi hylätään määritetyllä merkitsevyystasolla.. Default: `false`.


## Esimerkkejä

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
