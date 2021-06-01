---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mosaiikkipiirros.

## Vaihtoehdot

* __data__ | `object (required)`: kunkin muuttujan arvomääritysten objekti. Default: `none`.
* __variables__ | `array (required)`: näytettävien muuttujien joukko. Default: `none`.
* __showColors__ | `boolean`: ohjaa, näytetäänkö värit, jotka osoittavat merkityksen. Default: `false`.
* __axisLabels__ | `string`: akselien merkintöjen sijainti (joko "akselin suuntainen", "vaakasuora", "kohtisuorassa akselia vastaan" tai "pystysuora").. Default: `'parallel to the axis'`.


## Esimerkkejä

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
