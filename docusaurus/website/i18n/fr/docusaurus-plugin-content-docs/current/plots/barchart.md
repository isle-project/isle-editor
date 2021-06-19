---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Diagramme en barres.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variable à afficher. Default: `none`.
* __group__ | `(string|Factor)`: variable de regroupement. Default: `none`.
* __yvar__ | `string`: variable optionnelle utilisée pour les hauteurs de colonne (en conjonction avec "summary"). Default: `none`.
* __summary__ | `string`: nom de la statistique à calculer pour l'"yvar" et à afficher sous forme de barre de hauteur pour chaque catégorie (soit `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: si les barres doivent être affichées horizontalement. Default: `false`.
* __stackBars__ | `boolean`: lors du regroupement, contrôle s'il faut empiler les barres les unes sur les autres. Default: `false`.
* __relative__ | `boolean`: s'il faut calculer les fréquences relatives à l'intérieur de chaque groupe. Default: `false`.
* __totalPercent__ | `boolean`: l'affichage ou non des barres globales en tant que fréquences relatives. Default: `false`.
* __xOrder__ | `string`: soit "total", "catégorie", "min", "max", "moyen" ou "médian. Default: `none`.
* __direction__ | `string`: comment ordonner les barres le long de l'axe des x (`ascending` ou `descending`). Default: `'ascending'`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Descending Order', value: 'descending' },
        { label: 'Relative Stacked Bars', value: 'relativeStackedBars' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="descending">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    xOrder="total"
    direction="descending"
/>
```
</TabItem>

<TabItem value="relativeStackedBars">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    stackBars
    relative
    group="Gender"
/>
```
</TabItem>

</Tabs>
