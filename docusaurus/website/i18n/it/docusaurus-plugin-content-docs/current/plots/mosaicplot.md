---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Una trama a mosaico.

## Opzioni

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __variables__ | `array (required)`: array di variabili da visualizzare. Default: `none`.
* __showColors__ | `boolean`: controlla se visualizzare i colori che mostrano il significato. Default: `false`.
* __axisLabels__ | `string`: posizionamento delle etichette degli assi (sia "parallelo all'asse", "orizzontale", "perpendicolare all'asse" o "verticale"). Default: `'parallel to the axis'`.


## Esempi

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
