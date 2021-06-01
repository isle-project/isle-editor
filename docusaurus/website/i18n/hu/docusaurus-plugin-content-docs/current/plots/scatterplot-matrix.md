---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Egy szórásdiagram mátrix.

## Opciók

* __data__ | `object (required)`: az egyes változók értéktábláinak objektuma. Default: `none`.
* __variables__ | `array (required)`: a mátrixban megjelenítendő változók tömbje. Default: `none`.
* __color__ | `(string|Factor)`: kategorikus változó a pontok színéhez való hozzárendeléshez. Default: `none`.


## Példák

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
