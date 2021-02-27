---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Fabuła pudełkowa.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `(array|string) (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `array`: jedna lub dwie zmienne grupowania. Default: `[]`.
* __orientation__ | `string`: `w orientacji pionowej` lub `poziomej`. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: kontroluje czy nakładać punkty. Default: `false`.


## Przykłady

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
