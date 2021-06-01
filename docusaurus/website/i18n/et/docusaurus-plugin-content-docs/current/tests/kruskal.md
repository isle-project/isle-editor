---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallise test.

## Valikud

* __data__ | `object (required)`: väärtuste massiivi objekt. Default: `none`.
* __variable__ | `string (required)`: muutuja nimi. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __showDecision__ | `boolean`: kontrollib, kas näidata, kas nullhüpotees lükatakse tagasi määratud olulisuse tasemel.. Default: `false`.


## Näited

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
