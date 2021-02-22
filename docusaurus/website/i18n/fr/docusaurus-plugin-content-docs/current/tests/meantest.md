---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Test de la moyenne sur un seul échantillon.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: nom de la variable. Default: `none`.
* __type__ | `string`: le type de test ("Test Z" ou "Test T"). Default: `'T Test'`.
* __stdev__ | `number`: l'écart type (pour le "Test Z"). Default: `none`.
* __alpha__ | `number`: niveau de signification. Default: `0.05`.
* __direction__ | `string`: la direction du test (soit "moins", "plus" ou "double"). Default: `'two-sided'`.
* __mu0__ | `number`: moyenne sous l'hypothèse nulle. Default: `0`.
* __showDecision__ | `boolean`: contrôle s'il faut afficher si l'hypothèse nulle est rejetée au niveau de signification spécifié. Default: `false`.


## Exemples

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
