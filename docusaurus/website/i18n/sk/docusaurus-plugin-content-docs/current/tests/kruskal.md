---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallisov test.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `string (required)`: názov premennej. Default: `none`.
* __group__ | `(string|Factor)`: zoskupovanie premenných. Default: `none`.
* __showDecision__ | `boolean`: kontroluje, či sa zobrazí, ak je nulová hypotéza zamietnutá na zadanej hladine významnosti.. Default: `false`.


## Príklady

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
