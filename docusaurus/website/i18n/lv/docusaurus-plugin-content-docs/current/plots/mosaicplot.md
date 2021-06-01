---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Mozaīkas gabals.

## Iespējas

* __data__ | `object (required)`: katra mainīgā vērtību masīvu objekts. Default: `none`.
* __variables__ | `array (required)`: rādāmo mainīgo masīvs. Default: `none`.
* __showColors__ | `boolean`: kontrolē, vai tiek rādītas krāsas, kas parāda nozīmīgumu.. Default: `false`.
* __axisLabels__ | `string`: asu marķējumu izvietojums (vai nu `līdz paralēli asij`, `horizontāli`, `perpendikulāri asij`, vai `vertikāli`).. Default: `'parallel to the axis'`.


## Piemēri

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
