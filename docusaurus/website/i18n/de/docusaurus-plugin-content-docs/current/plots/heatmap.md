---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Eine Heatmap zur Visualisierung einer Beziehung zwischen zwei Variablen.

## Optionen

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __x__ | `string (required)`: x-Achse variabel. Default: `none`.
* __y__ | `string (required)`: y-Achsen-Variable. Default: `none`.
* __group__ | `(string|Factor)`: Gruppierungsvariable. Default: `none`.
* __overlayPoints__ | `boolean`: steuert, ob Punkte für jede Beobachtung überlagert werden sollen. Default: `false`.
* __smoothSpan__ | `number`: Glättungsspanne. Default: `0.66`.
* __regressionMethod__ | `array<string>`: Array, das `linear` und/oder `smooth` enthält, um eine lineare und/oder geglättete Regressionslinie zu überlagern. Default: `none`.
* __alternateColor__ | `boolean`: steuert, ob ein alternatives Farbschema für die Heatmap verwendet werden soll. Default: `false`.
* __commonXAxis__ | `boolean`: steuert, ob bei der Erstellung mehrerer Heatmaps pro Wert einer Gruppierungsvariable eine gemeinsame x-Achse verwendet werden soll. Default: `false`.
* __commonYAxis__ | `boolean`: steuert, ob bei der Erstellung mehrerer Heatmaps pro Wert einer Gruppierungsvariable eine gemeinsame y-Achse verwendet werden soll. Default: `false`.


## Beispiele

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
