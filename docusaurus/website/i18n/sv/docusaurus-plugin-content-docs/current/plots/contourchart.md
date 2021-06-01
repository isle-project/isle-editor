---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Ett konturdiagram.

## Alternativ

* __data__ | `object (required)`: objekt med värdematriser för varje variabel. Default: `none`.
* __x__ | `string (required)`: Variabel på x-axeln. Default: `none`.
* __y__ | `string (required)`: Variabel på y-axeln. Default: `none`.
* __overlayPoints__ | `boolean`: kontrollerar om punkterna för varje observation ska överlagras eller inte. Default: `false`.
* __smoothSpan__ | `number`: utjämningsområde. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matris som innehåller `linear` och/eller `smooth` för att lägga över en linjär och/eller utjämnad regressionslinje.. Default: `none`.
* __onSelected__ | `function`: callback som aktiveras när punkter väljs med x- och y-värden och de valda punkterna. Default: `onSelected() {}`.


## Exempel

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
