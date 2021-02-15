---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Test de corrélation.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __var1__ | `string (required)`: nom de la première variable. Default: `none`.
* __var2__ | `string (required)`: nom de la deuxième variable. Default: `none`.
* __rho0__ | `number`: valeur de corrélation sous l'hypothèse nulle. Default: `0`.
* __alpha__ | `number`: niveau de signification. Default: `0.05`.
* __direction__ | `string`: la direction du test (soit "moins", "plus" ou "double"). Default: `'two-sided'`.
* __showDecision__ | `boolean`: contrôle s'il faut afficher si l'hypothèse nulle est rejetée au niveau de signification spécifié. Default: `false`.


## Examples

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
