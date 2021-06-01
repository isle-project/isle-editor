---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallisov test.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `string (required)`: ime spremenljivke. Default: `none`.
* __group__ | `(string|Factor)`: spremenljivka za razvrščanje v skupine. Default: `none`.
* __showDecision__ | `boolean`: nadzoruje, ali se prikaže, če je ničelna hipoteza zavrnjena pri določeni ravni pomembnosti.. Default: `false`.


## Primeri

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
