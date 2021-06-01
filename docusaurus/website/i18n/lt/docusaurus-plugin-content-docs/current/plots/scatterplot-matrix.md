---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Sklaidos diagramos matrica.

## Parinktys

* __data__ | `object (required)`: kiekvieno kintamojo reikšmių masyvų objektas. Default: `none`.
* __variables__ | `array (required)`: matricoje rodomų kintamųjų masyvas. Default: `none`.
* __color__ | `(string|Factor)`: kategorinis kintamasis, kurį galima priskirti taškų spalvai. Default: `none`.


## Pavyzdžiai

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlotMatrix
    data={heartdisease} 
    variables={[ 'Cost', 'Interventions' ]}
    color="Gender"
/>
```

</TabItem>

</Tabs>
