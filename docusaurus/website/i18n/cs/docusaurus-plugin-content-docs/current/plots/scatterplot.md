---
id: scatterplot
title: Scatter Plot
sidebar_label: Scatter Plot
---

Graf rozptylu.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot pro každou proměnnou. Default: `none`.
* __xval__ | `string (required)`: proměnná, která se zobrazí na ose x. Default: `none`.
* __yval__ | `string (required)`: proměnná, která se zobrazí na ose y. Default: `none`.
* __text__ | `(string|Factor)`: texty, které se zobrazí u každého bodu. Default: `none`.
* __color__ | `(string|Factor)`: kategoriální proměnná pro mapování na barvu bodů. Default: `none`.
* __type__ | `(string|Factor)`: kategoriální proměnná, která se mapuje na zobrazené symboly.. Default: `none`.
* __size__ | `string`: kvantitativní proměnná, která se mapuje na velikost bodů.. Default: `none`.
* __regressionLine__ | `boolean`: řídí, zda se má překrýt regresní přímka (přímky).. Default: `false`.
* __regressionMethod__ | `array<string>`: `linear` a/nebo `smooth` pro zobrazení lineární regrese a vyhlazené regresní přímky LOWESS.. Default: `[
  'linear'
]`.
* __lineBy__ | `(string|Factor)`: zobrazit samostatnou regresní přímku pro každou kategorii zadané kategoriální proměnné.. Default: `none`.
* __smoothSpan__ | `number`: parametr rozpětí vyhlazení pro `hladkou` regresní přímku. Default: `0.66`.
* __jitterX__ | `boolean`: řídí, zda se mají body na ose x rozkmitat.. Default: `false`.
* __jitterY__ | `boolean`: řídí, zda se mají body na ose y rozkmitat.. Default: `false`.


## Příklady

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
