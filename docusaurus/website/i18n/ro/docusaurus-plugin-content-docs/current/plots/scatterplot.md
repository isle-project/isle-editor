---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Un grafic de dispersie.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori pentru fiecare variabilă. Default: `none`.
* __xval__ | `string (required)`: variabila de afișat pe axa x. Default: `none`.
* __yval__ | `string (required)`: variabila de afișat pe axa y. Default: `none`.
* __text__ | `(string|Factor)`: textele care urmează să fie afișate lângă fiecare punct. Default: `none`.
* __color__ | `(string|Factor)`: variabilă categorială care se asociază cu culoarea punctelor. Default: `none`.
* __type__ | `(string|Factor)`: variabila categorică pentru corespondența cu simbolurile afișate. Default: `none`.
* __size__ | `string`: variabilă cantitativă care să corespundă mărimii punctelor. Default: `none`.
* __regressionLine__ | `boolean`: controlează dacă se suprapune sau nu linia (liniile) de regresie. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` și/sau `smooth` pentru a afișa regresia liniară și linia de regresie LOWESS netezită.. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: afișarea unei linii de regresie separate pentru fiecare categorie a variabilei categorice specificate. Default: `none`.
* __smoothSpan__ | `number`: parametru de netezire pentru linia de regresie `lină`.. Default: `0.66`.
* __jitterX__ | `boolean`: controlează dacă punctele de pe axa x trebuie să se modifice sau nu.. Default: `false`.
* __jitterY__ | `boolean`: controlează dacă punctele de pe axa y trebuie sau nu să fie afectate.. Default: `false`.


## Exemple

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
