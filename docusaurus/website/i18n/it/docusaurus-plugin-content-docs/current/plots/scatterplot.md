---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Calcola il valore minimo e massimo di una matrice.

## Opzioni

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __xval__ | `string (required)`: variabile da visualizzare sull'asse x. Default: `none`.
* __yval__ | `string (required)`: variabile da visualizzare sull'asse y. Default: `none`.
* __text__ | `(string|Factor)`: testi da visualizzare accanto ad ogni punto. Default: `none`.
* __color__ | `(string|Factor)`: variabile categoriale da mappare a colore dei punti. Default: `none`.
* __type__ | `(string|Factor)`: variabile categoriale per mappare i simboli visualizzati. Default: `none`.
* __size__ | `string`: variabile quantitativa da mappare alla dimensione dei punti. Default: `none`.
* __regressionLine__ | `boolean`: controlla se sovrapporre la linea o le linee di regressione. Default: `false`.
* __regressionMethod__ | `array<string>`: "lineare" e/o "liscio" per visualizzare la regressione lineare e la linea di regressione LOWESS levigata. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: visualizzare la linea di regressione separata per ogni categoria di variabile categoriale specificata. Default: `none`.
* __smoothSpan__ | `number`: parametro dello span di lisciatura per la linea di regressione "liscio". Default: `0.66`.
* __jitterX__ | `boolean`: controlla se i punti di jitter sull'asse x. Default: `false`.
* __jitterY__ | `boolean`: controlla se i punti di jitter sull'asse y. Default: `false`.


## Esempi

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
