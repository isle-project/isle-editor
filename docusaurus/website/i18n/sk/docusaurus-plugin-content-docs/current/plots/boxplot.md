---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Škatuľový graf.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `(array|string) (required)`: premenné, ktoré sa majú zobraziť. Default: `none`.
* __group__ | `(array|string|Factor)`: jedna alebo dve zoskupovacie premenné. Default: `[]`.
* __orientation__ | `string`: `vertikálna` alebo `horizontálna` orientácia. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: kontroluje, či sa majú prekryť body. Default: `false`.


## Príklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Multiple Variables', value: 'multipleVariables' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Complications"
/>
```

</TabItem>

<TabItem value="multipleVariables">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}
/>
```

</TabItem>

<TabItem value="horizontal">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}
    orientation="horizontal"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}
    orientation="horizontal"
    overlayPoints
/>
```

</TabItem>

</Tabs>
