---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

O diagramă de contur.

## Opțiuni

* __data__ | `object (required)`: obiect de matrice de valori pentru fiecare variabilă. Default: `none`.
* __x__ | `string (required)`: variabila axei x. Default: `none`.
* __y__ | `string (required)`: variabila axei y. Default: `none`.
* __overlayPoints__ | `boolean`: controlează dacă se suprapun punctele pentru fiecare observație. Default: `false`.
* __smoothSpan__ | `number`: interval de netezire. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matrice care conține `linear` și/sau `smooth` pentru a suprapune o linie de regresie liniară și/sau netezită. Default: `none`.
* __onSelected__ | `function`: callback invocat atunci când punctele sunt selectate cu valorile x, y și punctele selectate. Default: `onSelected() {}`.


## Exemple

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
