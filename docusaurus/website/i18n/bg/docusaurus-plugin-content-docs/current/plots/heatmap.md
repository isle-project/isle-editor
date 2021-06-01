---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Топлинна карта за визуализиране на връзката между две променливи.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности за всяка променлива. Default: `none`.
* __x__ | `string (required)`: променлива по оста x. Default: `none`.
* __y__ | `string (required)`: променлива по оста y. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __overlayPoints__ | `boolean`: контролира дали да се наслагват точки за всяко наблюдение. Default: `false`.
* __smoothSpan__ | `number`: обхват на изглаждане. Default: `0.66`.
* __regressionMethod__ | `array<string>`: масив, съдържащ `linear` и/или `smooth`, за наслагване на линейна и/или изгладена регресионна линия. Default: `none`.
* __alternateColor__ | `boolean`: контролира дали да се използва алтернативна цветова схема за топлинната карта.. Default: `false`.
* __commonXAxis__ | `boolean`: контролира дали да се използва обща ос x при създаване на множество топлинни карти за всяка стойност на групираща променлива.. Default: `false`.
* __commonYAxis__ | `boolean`: контролира дали да се използва обща ос y при създаване на множество топлинни карти за всяка стойност на групираща променлива.. Default: `false`.


## Примери

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
