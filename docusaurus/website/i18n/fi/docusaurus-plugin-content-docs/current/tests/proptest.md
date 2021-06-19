---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Yhden otoksen suhteellisuustesti.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: muuttujan nimi. Default: `none`.
* __success__ | `any (required)`: menestysluokka `muuttuja`. Default: `none`.
* __alpha__ | `number`: merkitsevyystaso. Default: `0.05`.
* __direction__ | `string`: testin suunta (joko `less`, `greater` tai `two-sided`).. Default: `'two-sided'`.
* __p0__ | `number`: nollahypoteesin mukainen osuus. Default: `0.5`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö, jos nollahypoteesi hylätään määritetyllä merkitsevyystasolla.. Default: `false`.


## Esimerkkejä

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
