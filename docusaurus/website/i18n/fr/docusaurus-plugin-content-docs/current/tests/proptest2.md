---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Test de proportionnalité à deux échantillons.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __var1__ | `string (required)`: nom de la première variable. Default: `none`.
* __success__ | `string (required)`: catégorie de succès de "var1. Default: `none`.
* __var2__ | `string`: nom de la deuxième variable (les variables "var2" ou "group" doivent être fournies). Default: `none`.
* __group__ | `(string|Factor)`: nom de la variable de regroupement (`var2` ou `group` doivent être fournis). Default: `none`.
* __alpha__ | `number`: niveau de signification. Default: `0.05`.
* __direction__ | `string`: la direction du test (soit "moins", "plus", ou "bilatéral"). Default: `'two-sided'`.
* __diff__ | `number`: différence sous H0. Default: `0`.
* __showDecision__ | `boolean`: contrôle s'il faut afficher si l'hypothèse nulle est rejetée au niveau de signification spécifié. Default: `false`.


## Exemples

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
