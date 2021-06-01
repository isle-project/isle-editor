---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Kruskal-Wallis-test.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __variable__ | `string (required)`: variabelnavn. Default: `none`.
* __group__ | `(string|Factor)`: grupperingsvariabel. Default: `none`.
* __showDecision__ | `boolean`: kontrollerer, om der skal vises, hvis nulhypotesen forkastes ved det angivne signifikansniveau. Default: `false`.


## Eksempler

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
