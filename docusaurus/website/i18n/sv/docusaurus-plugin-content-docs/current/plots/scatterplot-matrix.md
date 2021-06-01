---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

En matris för spridningsdiagram.

## Alternativ

* __data__ | `object (required)`: objekt med värdematriser för varje variabel. Default: `none`.
* __variables__ | `array (required)`: matris med variabler som ska visas i matrisen. Default: `none`.
* __color__ | `(string|Factor)`: kategorisk variabel som ska kopplas till färgen på punkterna.. Default: `none`.


## Exempel

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
