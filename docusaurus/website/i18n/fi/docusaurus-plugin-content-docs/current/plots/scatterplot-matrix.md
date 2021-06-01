---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Hajontakuvion matriisi.

## Vaihtoehdot

* __data__ | `object (required)`: kunkin muuttujan arvomääritysten objekti. Default: `none`.
* __variables__ | `array (required)`: matriisissa näytettävien muuttujien joukko. Default: `none`.
* __color__ | `(string|Factor)`: kategorinen muuttuja, joka kuvaa pisteiden väriä. Default: `none`.


## Esimerkkejä

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
