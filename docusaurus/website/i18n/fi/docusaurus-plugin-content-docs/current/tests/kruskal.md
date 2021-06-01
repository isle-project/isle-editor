---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallisin testi.

## Vaihtoehdot

* __data__ | `object (required)`: arvojoukkojen objekti. Default: `none`.
* __variable__ | `string (required)`: muuttujan nimi. Default: `none`.
* __group__ | `(string|Factor)`: ryhmittelymuuttuja. Default: `none`.
* __showDecision__ | `boolean`: valvoo, näytetäänkö, jos nollahypoteesi hylätään määritetyllä merkitsevyystasolla.. Default: `false`.


## Esimerkkejä

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
