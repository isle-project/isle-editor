---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Un camembert qui, par défaut, affiche les comptes de toutes les catégories d'une variable choisie.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `(string|Factor) (required)`: variable à afficher. Default: `none`.
* __group__ | `(string|Factor)`: variable de regroupement. Default: `none`.
* __summaryVariable__ | `string`: variable optionnelle dont la somme doit être affichée pour chaque catégorie de "variable. Default: `none`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
