---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Hajuvusdiagrammi maatriks.

## Valikud

* __data__ | `object (required)`: iga muutuja väärtuste massiivi objekt. Default: `none`.
* __variables__ | `array (required)`: maatriksis kuvatavate muutujate massiivi. Default: `none`.
* __color__ | `(string|Factor)`: kategooriline muutuja, mis vastab punktide värvusele. Default: `none`.


## Näited

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
