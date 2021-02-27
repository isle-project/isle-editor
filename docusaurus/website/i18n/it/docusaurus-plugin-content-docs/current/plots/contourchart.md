---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Un grafico di contorno.

## Opzioni

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __x__ | `string (required)`: variabile dell'asse x. Default: `none`.
* __y__ | `string (required)`: variabile dell'asse y. Default: `none`.
* __overlayPoints__ | `boolean`: controlla se sovrapporre punti per ogni osservazione. Default: `false`.
* __smoothSpan__ | `number`: portata lisciante. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array contenente "lineare" e/o "liscio" per sovrapporre una linea di regressione lineare e/o liscia. Default: `none`.
* __onSelected__ | `function`: richiamata quando i punti sono selezionati con valori x, y e i punti selezionati. Default: `onSelected() {}`.


## Esempi

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
