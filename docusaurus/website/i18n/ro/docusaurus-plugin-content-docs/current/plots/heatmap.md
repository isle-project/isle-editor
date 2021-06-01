---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

O hartă termică pentru vizualizarea unei relații între două variabile.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori pentru fiecare variabilă. Default: `none`.
* __x__ | `string (required)`: variabila axei x. Default: `none`.
* __y__ | `string (required)`: variabila axei y. Default: `none`.
* __group__ | `(string|Factor)`: variabilă de grupare. Default: `none`.
* __overlayPoints__ | `boolean`: controlează dacă se suprapun punctele pentru fiecare observație. Default: `false`.
* __smoothSpan__ | `number`: interval de netezire. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matrice care conține `linear` și/sau `smooth` pentru a suprapune o linie de regresie liniară și/sau netezită. Default: `none`.
* __alternateColor__ | `boolean`: controlează dacă se utilizează o schemă de culori alternativă pentru harta termică. Default: `false`.
* __commonXAxis__ | `boolean`: controlează dacă se utilizează o axă x comună atunci când se creează mai multe hărți de căldură pentru fiecare valoare a unei variabile de grupare. Default: `false`.
* __commonYAxis__ | `boolean`: controlează dacă se utilizează o axă y comună atunci când se creează mai multe hărți de căldură pentru fiecare valoare a unei variabile de grupare. Default: `false`.


## Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    group="Gender"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
