---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis teszt.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `string (required)`: változó neve. Default: `none`.
* __group__ | `(string|Factor)`: csoportosító változó. Default: `none`.
* __showDecision__ | `boolean`: ellenőrzi, hogy megjelenjen-e, ha a nullhipotézis a megadott szignifikancia szinten elutasításra kerül.. Default: `false`.


## Példák

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
