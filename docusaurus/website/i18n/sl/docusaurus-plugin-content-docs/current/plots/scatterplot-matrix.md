---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Matrika razpršene slike.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti za vsako spremenljivko. Default: `none`.
* __variables__ | `array (required)`: polje spremenljivk za prikaz v matriki. Default: `none`.
* __color__ | `(string|Factor)`: kategorična spremenljivka za preslikavo na barvo točk. Default: `none`.


## Primeri

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
