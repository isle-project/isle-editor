---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Un tableau de fréquences.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: nom de la variable à afficher. Default: `none`.
* __calculateCounts__ | `boolean`: contrôle l'affichage ou non des comptes absolus. Default: `true`.
* __calculateRelative__ | `boolean`: contrôle l'affichage ou non des fréquences relatives. Default: `false`.
* __group__ | `string`: nom de la variable de regroupement. Default: `none`.
* __nDecimalPlaces__ | `number`: nombre de décimales pour les fréquences relatives affichées dans le tableau. Default: `3`.


## Examples

## Examples

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
