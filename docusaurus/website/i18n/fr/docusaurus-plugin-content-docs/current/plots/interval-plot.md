---
id: interval-plot
title: Interval Plot
sidebar_label: Interval Plot
---

Un diagramme d'intervalle.

## Options

* __data__ | `object (required)`: objet de tableaux de valeurs. Default: `none`.
* __variable__ | `string (required)`: undefined. Default: `none`.
* __group__ | `(string|Factor)`: variable de regroupement. Default: `none`.
* __orientation__ | `string`: Orientation "verticale" ou "horizontale".. Default: `'vertical'`.
* __significanceLevel__ | `number`: undefined. Default: `0.05`.
* __multipleTestingAdjustment__ | `boolean`: contrôle s'il faut ajuster le niveau de signification pour contrôler le taux de fausse découverte. Default: `false`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Custom Significance Level', value: 'significance' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />
```
</TabItem>

<TabItem value="horizontal">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />
```

</TabItem>

<TabItem value="significance">

```jsx live
<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />
```
</TabItem>

</Tabs>
