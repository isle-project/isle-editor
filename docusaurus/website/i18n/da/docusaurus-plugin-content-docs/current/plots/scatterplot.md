---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Et spredningsdiagram.

## Indstillinger

* __data__ | `object (required)`: objekt med værdiarrays for hver variabel. Default: `none`.
* __xval__ | `string (required)`: variabel, der skal vises på x-aksen. Default: `none`.
* __yval__ | `string (required)`: variabel, der skal vises på y-aksen. Default: `none`.
* __text__ | `(string|Factor)`: tekster, der skal vises ved siden af hvert punkt. Default: `none`.
* __color__ | `(string|Factor)`: kategorisk variabel, der skal henføres til punkternes farve. Default: `none`.
* __type__ | `(string|Factor)`: kategorisk variabel, der skal henføres til de viste symboler. Default: `none`.
* __size__ | `string`: kvantitativ variabel, der skal henføres til størrelsen af punkterne. Default: `none`.
* __regressionLine__ | `boolean`: styrer, om der skal lægges regressionslinje(r) over hinanden. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` og/eller `smooth` for at vise lineær regression og udglattet LOWESS-regressionslinje. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: vise separat regressionslinje for hver kategori af en angivet kategorisk variabel. Default: `none`.
* __smoothSpan__ | `number`: parameter for udjævning af spændvidde for `glat` regressionslinje. Default: `0.66`.
* __jitterX__ | `boolean`: styrer, om punkterne på x-aksen skal jittere. Default: `false`.
* __jitterY__ | `boolean`: styrer, om punkterne på y-aksen skal jittere. Default: `false`.


## Eksempler

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
