---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Siltuma karte divu mainīgo attiecību vizualizēšanai.

## Iespējas

* __data__ | `object (required)`: katra mainīgā vērtību masīvu objekts. Default: `none`.
* __x__ | `string (required)`: x ass mainīgais lielums. Default: `none`.
* __y__ | `string (required)`: y ass mainīgais. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __overlayPoints__ | `boolean`: kontrolē, vai pārklāt punktus katram novērojumam.. Default: `false`.
* __smoothSpan__ | `number`: izlīdzināšanas diapazons. Default: `0.66`.
* __regressionMethod__ | `array<string>`: masīvs, kas satur `linear` un/vai `smooth`, lai pārklātu lineāru un/vai izlīdzinātu regresijas līniju.. Default: `none`.
* __alternateColor__ | `boolean`: kontrolē, vai siltuma kartei izmantot alternatīvu krāsu shēmu.. Default: `false`.
* __commonXAxis__ | `boolean`: kontrolē, vai, veidojot vairākas siltuma kartes katrai grupēšanas mainīgā vērtībai, izmantot kopīgu x-asi.. Default: `false`.
* __commonYAxis__ | `boolean`: kontrolē, vai, veidojot vairākas siltuma kartes katrai grupēšanas mainīgā vērtībai, izmantot kopīgu y-asi.. Default: `false`.


## Piemēri

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
