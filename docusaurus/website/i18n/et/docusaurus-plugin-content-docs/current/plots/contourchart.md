---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Kontuurkaart.

## Valikud

* __data__ | `object (required)`: iga muutuja väärtuste massiivi objekt. Default: `none`.
* __x__ | `string (required)`: x-telje muutuja. Default: `none`.
* __y__ | `string (required)`: y-telje muutuja. Default: `none`.
* __overlayPoints__ | `boolean`: kontrollib, kas iga vaatluse punktid kaetakse üle. Default: `false`.
* __smoothSpan__ | `number`: silumisvahemik. Default: `0.66`.
* __regressionMethod__ | `array<string>`: massiiv, mis sisaldab `linear` ja/või `smooth`, et asetada peale lineaarne ja/või silutud regressioonijoonis.. Default: `none`.
* __onSelected__ | `function`: callback kutsutakse üles, kui punktid on valitud koos x, y väärtustega ja valitud punktid on valitud. Default: `onSelected() {}`.


## Näited

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
        { label: 'Smooth Span', value: 'smoothSpan' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<ContourChart 
    overlayPoints 
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="regressionMethod">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
/>
```

</TabItem>

<TabItem value="smoothSpan">

```jsx live
<ContourChart 
    overlayPoints 
    regressionMethod={['smooth', 'linear']}
    data={heartdisease} 
    x="ERVisit"
    y="Duration"
    smoothSpan={.12}
/>
```

</TabItem>

</Tabs>
