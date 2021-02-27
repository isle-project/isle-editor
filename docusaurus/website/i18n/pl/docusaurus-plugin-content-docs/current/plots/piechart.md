---
id: piechart
title: Pie Chart
sidebar_label: Pie Chart
---

Składnik wykresu kołowego, który domyślnie wyświetla zliczenia wszystkich kategorii z wybranej zmiennej.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `(string|Factor) (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupowania. Default: `none`.
* __summaryVariable__ | `string`: nieobowiązkowa zmienna, której suma do wyświetlenia dla każdej kategorii "zmiennej. Default: `none`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Summary Variable', value: 'summaryVariable' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="summaryVariable">

```jsx live
<PieChart 
    data={heartdisease} 
    variable="Drugs"
    summaryVariable="Cost"
/>
```

</TabItem>

</Tabs>
