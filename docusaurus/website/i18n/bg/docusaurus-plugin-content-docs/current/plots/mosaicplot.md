---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Мозаечен участък.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности за всяка променлива. Default: `none`.
* __variables__ | `array (required)`: масив от променливи за показване. Default: `none`.
* __showColors__ | `boolean`: контролира дали да се показват цветове, показващи значимост. Default: `false`.
* __axisLabels__ | `string`: позициониране на етикетите на осите (`паралелно на оста`, `хоризонтално`, `перпендикулярно на оста` или `вертикално`). Default: `'parallel to the axis'`.


## Примери

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
