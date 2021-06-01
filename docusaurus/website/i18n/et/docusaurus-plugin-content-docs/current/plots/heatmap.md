---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Soojuskaart kahe muutuja vahelise seose visualiseerimiseks.

## Valikud

* __data__ | `object (required)`: iga muutuja väärtuste massiivi objekt. Default: `none`.
* __x__ | `string (required)`: x-telje muutuja. Default: `none`.
* __y__ | `string (required)`: y-telje muutuja. Default: `none`.
* __group__ | `(string|Factor)`: rühmitav muutuja. Default: `none`.
* __overlayPoints__ | `boolean`: kontrollib, kas iga vaatluse punktid kaetakse üle. Default: `false`.
* __smoothSpan__ | `number`: silumisvahemik. Default: `0.66`.
* __regressionMethod__ | `array<string>`: massiiv, mis sisaldab `linear` ja/või `smooth`, et asetada peale lineaarne ja/või silutud regressioonijoonis.. Default: `none`.
* __alternateColor__ | `boolean`: kontrollib, kas soojuskaardi jaoks kasutatakse alternatiivset värviskeemi.. Default: `false`.
* __commonXAxis__ | `boolean`: kontrollib, kas kasutada ühist x-telge mitme soojuskaardi loomisel rühmitava muutuja väärtuse kohta.. Default: `false`.
* __commonYAxis__ | `boolean`: kontrollib, kas kasutada ühist y-telge mitme soojuskaardi loomisel rühmitava muutuja väärtuse kohta.. Default: `false`.


## Näited

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
