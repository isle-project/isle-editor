---
id: scatterplot-matrix
title: Scatter Plot Matrix
sidebar_label: Scatter Plot Matrix
---

O matrice a graficului de dispersie.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori pentru fiecare variabilă. Default: `none`.
* __variables__ | `array (required)`: matrice de variabile de afișat în matrice. Default: `none`.
* __color__ | `(string|Factor)`: variabilă categorială care se asociază cu culoarea punctelor. Default: `none`.


## Exemple

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
