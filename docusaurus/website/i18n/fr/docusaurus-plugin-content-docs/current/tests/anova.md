---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analyse de la variance.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: nom de la variable à afficher. Default: `none`.
* __group__ | `(string|Factor)`: nom de la variable de regroupement. Default: `none`.
* __showDecision__ | `boolean`: contrôle l'affichage ou non de la décision de test. Default: `false`.


## Exemples

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
