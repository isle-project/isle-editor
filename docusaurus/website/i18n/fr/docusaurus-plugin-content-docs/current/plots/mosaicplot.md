---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Une trame en mosaïque.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __variables__ | `array (required)`: tableau de variables à afficher. Default: `none`.
* __showColors__ | `boolean`: contrôle l'affichage des couleurs indiquant la signification. Default: `false`.
* __axisLabels__ | `string`: le positionnement des étiquettes d'axe (soit "parallèle à l'axe", "horizontal", "perpendiculaire à l'axe" ou "vertical"). Default: `'parallel to the axis'`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' },
        { label: 'Axis Labels', value: 'axisLabels' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
/>
```

</TabItem>

<TabItem value="axisLabels">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
    axisLabels="parallel to the axis"
/>
```

</TabItem>

</Tabs>
