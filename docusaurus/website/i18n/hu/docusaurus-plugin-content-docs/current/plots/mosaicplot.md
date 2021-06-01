---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mozaikos telek.

## Opciók

* __data__ | `object (required)`: az egyes változók értéktábláinak objektuma. Default: `none`.
* __variables__ | `array (required)`: a megjelenítendő változók tömbje. Default: `none`.
* __showColors__ | `boolean`: szabályozza, hogy a színeket megjelenítse-e, amelyek a jelentőséget mutatják. Default: `false`.
* __axisLabels__ | `string`: a tengelycímkék elhelyezése (a tengellyel párhuzamos, vízszintes, a tengelyre merőleges vagy függőleges).. Default: `'parallel to the axis'`.


## Példák

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
