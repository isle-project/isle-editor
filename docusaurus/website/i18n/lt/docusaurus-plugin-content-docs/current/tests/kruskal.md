---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis testas.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `string (required)`: kintamojo pavadinimas. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __showDecision__ | `boolean`: kontroliuoja, ar rodyti, jei nulinė hipotezė atmetama esant nurodytam reikšmingumo lygiui.. Default: `false`.


## Pavyzdžiai

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
