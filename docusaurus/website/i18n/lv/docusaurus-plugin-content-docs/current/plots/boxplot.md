---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Kastes gabals.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `(array|string) (required)`: mainīgais(-ie), kas jāparāda. Default: `none`.
* __group__ | `(array|string|Factor)`: viens vai divi grupēšanas mainīgie. Default: `[]`.
* __orientation__ | `string`: `vertikālā` vai `horizontālā` orientācija. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: kontrolē, vai pārklāt punktus. Default: `false`.


## Piemēri

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
