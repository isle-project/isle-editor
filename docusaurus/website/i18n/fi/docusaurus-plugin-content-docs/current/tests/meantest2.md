---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Kahden otoksen keskiarvotesti.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __x__ | `string (required)`: ensimmäisen muuttujan nimi. Default: `none`.
* __y__ | `string`: toisen muuttujan nimi (`y` tai `group` on annettava).. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttujan nimi (`y` tai `group` on annettava).. Default: `none`.
* __type__ | `string`: testityyppi (joko "Z-testi" tai "T-testi").. Default: `'T Test'`.
* __xstdev__ | `number`: ensimmäinen keskihajonta (Z-testiä varten). Default: `none`.
* __ystdev__ | `number`: toinen keskihajonta (Z-testiä varten). Default: `none`.
* __alpha__ | `number`: merkitsevyystaso. Default: `0.05`.
* __direction__ | `string`: testin suunta (joko `less`, `greater` tai `two-sided`).. Default: `'two-sided'`.
* __diff__ | `number`: ero H0:ssa. Default: `0`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö, jos nollahypoteesi hylätään määritetyllä merkitsevyystasolla.. Default: `false`.


## Esimerkkejä

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
