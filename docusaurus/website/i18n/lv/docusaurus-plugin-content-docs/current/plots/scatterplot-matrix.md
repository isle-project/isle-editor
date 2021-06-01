---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

Izkliedes grafika matrica.

## Iespējas

* __data__ | `object (required)`: katra mainīgā vērtību masīvu objekts. Default: `none`.
* __variables__ | `array (required)`: matricā attēlojamo mainīgo masīvs. Default: `none`.
* __color__ | `(string|Factor)`: kategoriskais mainīgais, ko attiecina uz punktu krāsu.. Default: `none`.


## Piemēri

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
