---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mozaična ploskev.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti za vsako spremenljivko. Default: `none`.
* __variables__ | `array (required)`: polje spremenljivk za prikaz. Default: `none`.
* __showColors__ | `boolean`: nadzoruje, ali se prikažejo barve, ki prikazujejo pomembnost. Default: `false`.
* __axisLabels__ | `string`: postavitev oznak osi (`vzporedno z osjo`, `vodoravno`, `pravokotno na os` ali `vertikalno`).. Default: `'parallel to the axis'`.


## Primeri

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
