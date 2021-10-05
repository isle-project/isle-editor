---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

En spridningsdiagram.

## Alternativ

* __data__ | `object (required)`: objekt med värdematriser för varje variabel. Default: `none`.
* __xval__ | `string (required)`: variabel som ska visas på x-axeln. Default: `none`.
* __yval__ | `string (required)`: variabel som ska visas på y-axeln. Default: `none`.
* __text__ | `(string|Factor)`: texter som ska visas bredvid varje punkt. Default: `none`.
* __color__ | `(string|Factor)`: kategorisk variabel som ska kopplas till färgen på punkterna.. Default: `none`.
* __type__ | `(string|Factor)`: kategorisk variabel som ska kopplas till de visade symbolerna.. Default: `none`.
* __size__ | `string`: Kvantitativ variabel som ska kopplas till storleken på punkterna.. Default: `none`.
* __regressionLine__ | `boolean`: kontrollerar om regressionslinjerna ska läggas över varandra eller inte. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` och/eller `smooth` för att visa linjär regression och utjämnad LOWESS-regressionslinje.. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: visa en separat regressionslinje för varje kategori av en angiven kategorisk variabel. Default: `none`.
* __smoothSpan__ | `number`: parameter för utjämning av spännvidd för en "slät" regressionslinje.. Default: `0.66`.
* __jitterX__ | `boolean`: kontrollerar om punkterna på x-axeln ska jittera. Default: `false`.
* __jitterY__ | `boolean`: kontrollerar om punkterna på y-axeln ska jittera. Default: `false`.


## Exempel

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
