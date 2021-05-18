---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Test de proportionnalité sur un échantillon.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nom de la variable. Default: `none`.
* __success__ | `any (required)`: catégorie de succès de "variable". Default: `none`.
* __alpha__ | `number`: niveau de signification. Default: `0.05`.
* __direction__ | `string`: la direction du test (soit "moins", "plus", ou "bilatéral"). Default: `'two-sided'`.
* __p0__ | `number`: proportion sous l'hypothèse nulle. Default: `0.5`.
* __showDecision__ | `boolean`: contrôle s'il faut afficher si l'hypothèse nulle est rejetée au niveau de signification spécifié. Default: `false`.


## Exemples

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
