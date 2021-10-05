---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Oblicza minimalną i maksymalną wartość tablicy.

## Opcje

* __data__ | `object (required)`: obiekt tablice wartości dla każdej zmiennej. Default: `none`.
* __xval__ | `string (required)`: zmienna do wyświetlania na osi x. Default: `none`.
* __yval__ | `string (required)`: zmienna do wyświetlania na osi y. Default: `none`.
* __text__ | `(string|Factor)`: teksty, które mają być wyświetlane obok każdego punktu. Default: `none`.
* __color__ | `(string|Factor)`: zmienna kategoryczna do mapy do koloru punktów. Default: `none`.
* __type__ | `(string|Factor)`: zmienna kategoryczna do mapowania na wyświetlane symbole. Default: `none`.
* __size__ | `string`: zmienna ilościowa do mapowania do wielkości punktów. Default: `none`.
* __regressionLine__ | `boolean`: kontroluje, czy nakładać linię(-y) regresji. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` i/lub `smooth` do wyświetlania regresji liniowej i wygładzonej linii regresji LOWESS'a. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: wyświetlać oddzielną linię regresji dla każdej kategorii określonej zmiennej kategorycznej. Default: `none`.
* __smoothSpan__ | `number`: parametr rozpiętości wygładzania dla linii regresji `gładkiej`. Default: `0.66`.
* __jitterX__ | `boolean`: kontroluje, czy punkty na osi x mają być poddawane jitterowi. Default: `false`.
* __jitterY__ | `boolean`: kontroluje czy punkty na osi y mają być jitterowane. Default: `false`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Colored', value: 'colored' },
        { label: 'Type', value: 'type' },
        { label: 'Regression Line', value: 'regressionLine' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
/>
```

</TabItem>


<TabItem value="grouped">

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
    group="Gender"
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Cost"
    color="Gender"
/>
```
</TabItem>

<TabItem value="type">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    color="Gender"
    type="Gender"
/>
```

</TabItem>

<TabItem value="regressionLine">

```jsx live
<ScatterPlot 
    data={heartdisease} 
    xval="Age"
    yval="Interventions"
    regressionLine
    regressionMethod={['smooth']}
/>
```
</TabItem>

</Tabs>
