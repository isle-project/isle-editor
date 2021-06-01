---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

En mosaikarta.

## Alternativ

* __data__ | `object (required)`: objekt med värdematriser för varje variabel. Default: `none`.
* __variables__ | `array (required)`: matris med variabler som ska visas. Default: `none`.
* __showColors__ | `boolean`: kontrollerar om färger som visar betydelsen ska visas. Default: `false`.
* __axisLabels__ | `string`: Positionering av axelmärken (antingen "parallellt med axeln", "horisontellt", "vinkelrätt mot axeln" eller "vertikalt").. Default: `'parallel to the axis'`.


## Exempel

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
