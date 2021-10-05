---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Диаграма на разпръскване.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности за всяка променлива. Default: `none`.
* __xval__ | `string (required)`: променлива, която да се показва по оста x. Default: `none`.
* __yval__ | `string (required)`: променлива, която да се показва по оста y. Default: `none`.
* __text__ | `(string|Factor)`: текстове, които да се показват до всяка точка. Default: `none`.
* __color__ | `(string|Factor)`: категорична променлива за съпоставяне с цвета на точките. Default: `none`.
* __type__ | `(string|Factor)`: категорична променлива, която да се съпостави с показаните символи. Default: `none`.
* __size__ | `string`: количествена променлива за съпоставяне с размера на точките. Default: `none`.
* __regressionLine__ | `boolean`: контролира дали да се наслагва регресионна линия(и). Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` и/или `smooth` за показване на линейна регресия и изгладена регресионна линия LOWESS. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: показване на отделна регресионна линия за всяка категория на определена категорична променлива. Default: `none`.
* __smoothSpan__ | `number`: параметър за изглаждане на диапазона за регресионната линия `smooth`. Default: `0.66`.
* __jitterX__ | `boolean`: контролира дали да се разклащат точките по оста x. Default: `false`.
* __jitterY__ | `boolean`: контролира дали да се разклащат точките по оста y. Default: `false`.


## Примери

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
