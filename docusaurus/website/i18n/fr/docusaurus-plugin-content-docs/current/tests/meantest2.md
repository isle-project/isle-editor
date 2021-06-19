---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Test de la moyenne sur deux échantillons.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __x__ | `string (required)`: nom de la première variable. Default: `none`.
* __y__ | `string`: nom de la deuxième variable (les variables "y" ou "group" doivent être fournies). Default: `none`.
* __group__ | `(string|Factor)`: le nom de la variable de regroupement ("y" ou "group" doit être fourni). Default: `none`.
* __type__ | `string`: le type de test (soit "Test Z" ou "Test T"). Default: `'T Test'`.
* __xstdev__ | `number`: premier écart-type (pour le "Test Z"). Default: `none`.
* __ystdev__ | `number`: deuxième écart-type (pour le "Test Z"). Default: `none`.
* __alpha__ | `number`: niveau de signification. Default: `0.05`.
* __direction__ | `string`: la direction du test (soit `less`, `greater` ou `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: différence sous H0. Default: `0`.
* __showDecision__ | `boolean`: contrôle s'il faut afficher si l'hypothèse nulle est rejetée au niveau de signification spécifié. Default: `false`.


## Exemples

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
