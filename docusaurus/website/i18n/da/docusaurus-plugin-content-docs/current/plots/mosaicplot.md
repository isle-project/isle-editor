---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Et mosaikplot.

## Indstillinger

* __data__ | `object (required)`: objekt med værdiarrays for hver variabel. Default: `none`.
* __variables__ | `array (required)`: array af variabler, der skal vises. Default: `none`.
* __showColors__ | `boolean`: styrer, om der skal vises farver, der viser betydningen. Default: `false`.
* __axisLabels__ | `string`: placering af akseetiketter (enten "parallelt med aksen", "vandret", "vinkelret på aksen" eller "lodret"). Default: `'parallel to the axis'`.


## Eksempler

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
