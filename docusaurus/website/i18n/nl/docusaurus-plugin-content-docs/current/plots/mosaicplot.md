---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Een mozaïekplot.

## Opties

* __data__ | `object (required)`: object of value arrays voor elke variabele. Default: `none`.
* __variables__ | `array (required)`: reeks weer te geven variabelen. Default: `none`.
* __showColors__ | `boolean`: bepaalt of kleuren met betekenis moeten worden weergegeven. Default: `false`.
* __axisLabels__ | `string`: positionering van aslabels (ofwel, `parallel aan de as`, `horizontaal`, ` loodrecht op de as`, of `verticaal`). Default: `'parallel to the axis'`.


## Voorbeelden

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
