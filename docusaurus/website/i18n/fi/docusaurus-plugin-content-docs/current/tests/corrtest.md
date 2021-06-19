---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Korrelaatiotesti.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __var1__ | `string (required)`: ensimmäisen muuttujan nimi. Default: `none`.
* __var2__ | `string (required)`: toisen muuttujan nimi. Default: `none`.
* __rho0__ | `number`: korrelaatioarvo nollahypoteesin tapauksessa. Default: `0`.
* __alpha__ | `number`: merkitsevyystaso. Default: `0.05`.
* __direction__ | `string`: testin suunta (joko `less`, `greater` tai `two-sided`).. Default: `'two-sided'`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö, jos nollahypoteesi hylätään määritetyllä merkitsevyystasolla.. Default: `false`.


## Esimerkkejä

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
