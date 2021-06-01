---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskalův-Wallisův test.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot. Default: `none`.
* __variable__ | `string (required)`: název proměnné. Default: `none`.
* __group__ | `(string|Factor)`: seskupovací proměnná. Default: `none`.
* __showDecision__ | `boolean`: řídí, zda se má zobrazit, pokud je nulová hypotéza zamítnuta na zadané hladině významnosti.. Default: `false`.


## Příklady

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
