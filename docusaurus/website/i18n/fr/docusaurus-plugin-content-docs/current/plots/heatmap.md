---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Une carte de chaleur pour visualiser une relation entre deux variables.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __x__ | `string (required)`: variable de l'axe des x. Default: `none`.
* __y__ | `string (required)`: variable de l'axe des y. Default: `none`.
* __group__ | `(string|Factor)`: variable de regroupement. Default: `none`.
* __overlayPoints__ | `boolean`: contrôle s'il faut superposer des points pour chaque observation. Default: `false`.
* __smoothSpan__ | `number`: portée de lissage. Default: `0.66`.
* __regressionMethod__ | `array<string>`: tableau contenant "linéaire" et/ou "lissé" pour superposer une ligne de régression linéaire et/ou lissée. Default: `none`.
* __alternateColor__ | `boolean`: contrôle l'utilisation éventuelle d'un autre schéma de couleurs pour la carte thermique. Default: `false`.
* __commonXAxis__ | `boolean`: contrôle l'utilisation éventuelle d'un axe des abscisses commun lors de la création de plusieurs cartes thermiques par valeur d'une variable de regroupement. Default: `false`.
* __commonYAxis__ | `boolean`: contrôle l'utilisation éventuelle d'un axe des y commun lors de la création de plusieurs cartes thermiques par valeur d'une variable de regroupement. Default: `false`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
