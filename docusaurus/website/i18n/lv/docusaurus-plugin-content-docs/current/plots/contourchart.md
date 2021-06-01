---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Kontūru diagramma.

## Iespējas

* __data__ | `object (required)`: katra mainīgā vērtību masīvu objekts. Default: `none`.
* __x__ | `string (required)`: x ass mainīgais lielums. Default: `none`.
* __y__ | `string (required)`: y ass mainīgais lielums. Default: `none`.
* __overlayPoints__ | `boolean`: kontrolē, vai pārklāt punktus katram novērojumam.. Default: `false`.
* __smoothSpan__ | `number`: izlīdzināšanas diapazons. Default: `0.66`.
* __regressionMethod__ | `array<string>`: masīvs, kas satur `linear` un/vai `smooth`, lai pārklātu lineāru un/vai izlīdzinātu regresijas līniju.. Default: `none`.
* __onSelected__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad ir atlasīti punkti ar x, y vērtībām un atlasītie punkti.. Default: `onSelected() {}`.


## Piemēri

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
