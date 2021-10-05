---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Berechnet den minimalen und maximalen Wert eines Arrays.

## Optionen

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __xval__ | `string (required)`: Variable, die auf der x-Achse angezeigt werden soll. Default: `none`.
* __yval__ | `string (required)`: Variable, die auf der y-Achse angezeigt werden soll. Default: `none`.
* __text__ | `(string|Factor)`: Texte, die neben den einzelnen Punkten angezeigt werden sollen. Default: `none`.
* __color__ | `(string|Factor)`: kategorische Variable zur Abbildung auf die Farbe der Punkte. Default: `none`.
* __type__ | `(string|Factor)`: kategorische Variable zur Abbildung auf die angezeigten Symbole. Default: `none`.
* __size__ | `string`: quantitative Variable zur Abbildung auf die Größe der Punkte. Default: `none`.
* __regressionLine__ | `boolean`: steuert, ob die Regressionslinie(n) überlagert werden sollen. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` und/oder `smooth` zur Anzeige der linearen Regression und der geglätteten LOWESS-Regressionslinie. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: separate Regressionslinie für jede Kategorie der angegebenen kategorialen Variable anzeigen. Default: `none`.
* __smoothSpan__ | `number`: Glättungsspannenparameter für `glatte` Regressionslinie. Default: `0.66`.
* __jitterX__ | `boolean`: steuert, ob Punkte auf der x-Achse verwackelt werden sollen. Default: `false`.
* __jitterY__ | `boolean`: steuert, ob die Punkte auf der y-Achse verwackelt werden sollen. Default: `false`.


## Beispiele

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
