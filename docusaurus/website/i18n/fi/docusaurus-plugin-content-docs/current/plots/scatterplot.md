---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Hajontakuvio.

## Vaihtoehdot

* __data__ | `object (required)`: kunkin muuttujan arvomääritysten objekti. Default: `none`.
* __xval__ | `string (required)`: x-akselilla näytettävä muuttuja. Default: `none`.
* __yval__ | `string (required)`: muuttuja, joka näytetään y-akselilla. Default: `none`.
* __text__ | `(string|Factor)`: kunkin pisteen vieressä näytettävät tekstit. Default: `none`.
* __color__ | `(string|Factor)`: kategorinen muuttuja, joka kuvaa pisteiden väriä. Default: `none`.
* __type__ | `(string|Factor)`: kategorinen muuttuja, joka vastaa näytettäviä symboleja.. Default: `none`.
* __size__ | `string`: kvantitatiivinen muuttuja, joka vastaa pisteiden kokoa.. Default: `none`.
* __regressionLine__ | `boolean`: valvoo, asetetaanko regressiosuoran (regressiosuorien) päälle.. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` ja/tai `smooth` näyttääksesi lineaarisen regression ja tasoitetun LOWESS-regressiosuoran.. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: näyttää erillisen regressiosuoran kullekin määritetyn kategorisen muuttujan luokalle.. Default: `none`.
* __smoothSpan__ | `number`: smoothing span -parametri "sileää" regressiosuoraa varten. Default: `0.66`.
* __jitterX__ | `boolean`: ohjaa, jitteröidäänkö x-akselin pisteitä.. Default: `false`.
* __jitterY__ | `boolean`: ohjaa, jitteröidäänkö y-akselin pisteitä.. Default: `false`.


## Esimerkkejä

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
