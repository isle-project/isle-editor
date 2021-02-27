---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Eine Konturenkarte.

## Optionen

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __x__ | `string (required)`: x-Achse variabel. Default: `none`.
* __y__ | `string (required)`: y-Achsen-Variable. Default: `none`.
* __overlayPoints__ | `boolean`: steuert, ob Punkte für jede Beobachtung überlagert werden sollen. Default: `false`.
* __smoothSpan__ | `number`: Glättungsspanne. Default: `0.66`.
* __regressionMethod__ | `array<string>`: Array, das `linear` und/oder `smooth` enthält, um eine lineare und/oder geglättete Regressionslinie zu überlagern. Default: `none`.
* __onSelected__ | `function`: Callback, der aufgerufen wird, wenn Punkte mit x-, y-Werten ausgewählt werden und die ausgewählten Punkte. Default: `onSelected() {}`.


## Beispiele

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
