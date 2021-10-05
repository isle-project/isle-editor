---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Calcule la valeur minimale et maximale d'un tableau.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __xval__ | `string (required)`: variable à afficher sur l'axe des x. Default: `none`.
* __yval__ | `string (required)`: variable à afficher sur l'axe des y. Default: `none`.
* __text__ | `(string|Factor)`: les textes à afficher à côté de chaque point. Default: `none`.
* __color__ | `(string|Factor)`: variable catégorielle à cartographier à la couleur des points. Default: `none`.
* __type__ | `(string|Factor)`: variable catégorielle à mettre en correspondance avec les symboles affichés. Default: `none`.
* __size__ | `string`: variable quantitative à mettre en correspondance avec la taille des points. Default: `none`.
* __regressionLine__ | `boolean`: contrôle s'il faut superposer la/les ligne(s) de régression. Default: `false`.
* __regressionMethod__ | `array<string>`: linéaire" et/ou "lisse" pour afficher la régression linéaire et la ligne de régression LOWESS lissée. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: afficher une ligne de régression séparée pour chaque catégorie de variable catégorielle spécifiée. Default: `none`.
* __smoothSpan__ | `number`: paramètre de lissage de la ligne de régression "lisse. Default: `0.66`.
* __jitterX__ | `boolean`: contrôle si les points sur l'axe des x doivent être gigueurs.. Default: `false`.
* __jitterY__ | `boolean`: contrôle si les points sur l'axe des y sont gigueurs ou non. Default: `false`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Colored', value: 'colored' },
        { label: 'Type', value: 'type' },
        { label: 'Regression Line', value: 'regressionLine' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

</TabItem>


<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Gender"
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
    color="Gender"
/>
```
</TabItem>

<TabItem value="type">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    color="Gender"
    type="Gender"
/>
```

</TabItem>

<TabItem value="regressionLine">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    regressionLine
    regressionMethod={['smooth']}
/>
```
</TabItem>

</Tabs>
