---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Un tableau de contingence.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __rowVar__ | `string (required)`: nom de la variable row. Default: `none`.
* __colVar__ | `string (required)`: nom de la variable de colonne. Default: `none`.
* __relativeFreqs__ | `boolean`: contrôle l'affichage ou non des fréquences relatives. Default: `false`.
* __group__ | `string`: nom de la variable de regroupement. Default: `none`.
* __display__ | `array<string>`: l'affichage ou non du "Pourcentage de la ligne" et/ou du "Pourcentage de la colonne. Default: `[]`.
* __nDecimalPlaces__ | `number`: nombre de décimales pour les fréquences relatives affichées dans le tableau. Default: `3`.


## Exemples

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```
