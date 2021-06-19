---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Kahden otoksen suhteellisuustesti.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __var1__ | `(string|Factor) (required)`: ensimmäisen muuttujan nimi. Default: `none`.
* __success__ | `any (required)`: menestysluokka `var1`. Default: `none`.
* __var2__ | `(string|Factor)`: toisen muuttujan nimi (`var2` tai `group` on annettava).. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttujan nimi (`var2` tai `group` on annettava).. Default: `none`.
* __alpha__ | `number`: merkitsevyystaso. Default: `0.05`.
* __direction__ | `string`: testin suunta (joko `less`, `greater` tai `two-sided`).. Default: `'two-sided'`.
* __diff__ | `number`: ero H0:ssa. Default: `0`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö, jos nollahypoteesi hylätään määritetyllä merkitsevyystasolla.. Default: `false`.


## Esimerkkejä

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
