---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Test de Kruskal-Wallis.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: nom de la variable. Default: `none`.
* __group__ | `string`: variable de regroupement. Default: `none`.
* __showDecision__ | `boolean`: contrôle s'il faut afficher si l'hypothèse nulle est rejetée au niveau de signification spécifié. Default: `false`.


## Examples

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
