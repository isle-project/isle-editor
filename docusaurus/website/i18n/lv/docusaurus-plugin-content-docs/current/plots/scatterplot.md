---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Izkliedes diagramma.

## Iespējas

* __data__ | `object (required)`: katra mainīgā vērtību masīvu objekts. Default: `none`.
* __xval__ | `string (required)`: mainīgais lielums, kas jāattēlo uz x ass. Default: `none`.
* __yval__ | `string (required)`: mainīgais lielums, kas jāattēlo uz y ass. Default: `none`.
* __text__ | `(string|Factor)`: teksti, kas jāattēlo pie katra punkta.. Default: `none`.
* __color__ | `(string|Factor)`: kategoriskais mainīgais, ko attiecina uz punktu krāsu.. Default: `none`.
* __type__ | `(string|Factor)`: kategoriskais mainīgais, ko attiecināt uz attēlotajiem simboliem.. Default: `none`.
* __size__ | `string`: kvantitatīvais mainīgais, kas tiek attiecināts uz punktu lielumu.. Default: `none`.
* __regressionLine__ | `boolean`: kontrolē, vai pārklāt regresijas līniju(-as).. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` un/vai `smooth`, lai parādītu lineāro regresiju un izlīdzināto LOWESS regresijas līniju.. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: parādīt atsevišķu regresijas līniju katrai norādītā kategoriskā mainīgā kategorijai.. Default: `none`.
* __smoothSpan__ | `number`: izlīdzināšanas diapazona parametrs `smooth` regresijas līnijai. Default: `0.66`.
* __jitterX__ | `boolean`: kontrolē, vai jitter punkti uz x ass. Default: `false`.
* __jitterY__ | `boolean`: kontrolē, vai jitter punkti uz y ass. Default: `false`.


## Piemēri

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
