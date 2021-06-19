---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Svītru diagramma.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `(string|Factor) (required)`: mainīgais lielums, lai parādītu. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgais. Default: `none`.
* __yvar__ | `string`: neobligātais mainīgais, ko izmanto kolonnu augstumiem (kopā ar `summary`).. Default: `none`.
* __summary__ | `string`: `yvar` aprēķināmā statistiskā rādītāja nosaukums, kas tiks parādīts kā joslas augstums katrai kategorijai (vai nu `Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: vai joslas attēlot horizontāli. Default: `false`.
* __stackBars__ | `boolean`: grupēšanas laikā nosaka, vai joslas sakraut vienu virs otras.. Default: `false`.
* __relative__ | `boolean`: vai aprēķināt relatīvās frekvences katras grupas iekšienē.. Default: `false`.
* __totalPercent__ | `boolean`: vai kopējās joslas attēlot kā relatīvās frekvences. Default: `false`.
* __xOrder__ | `string`: vai nu `kopējais`, `kategorija`, `min`, `max`, `vidējais`, vai `mediāna`.. Default: `none`.
* __direction__ | `string`: kā sakārtot joslas gar x asi (`ascending` vai `descending`). Default: `'ascending'`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Descending Order', value: 'descending' },
        { label: 'Relative Stacked Bars', value: 'relativeStackedBars' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```

</TabItem>

<TabItem value="descending">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    xOrder="total"
    direction="descending"
/>
```
</TabItem>

<TabItem value="relativeStackedBars">

```jsx live
<BarChart 
    data={heartdisease} 
    variable="Drugs"
    stackBars
    relative
    group="Gender"
/>
```
</TabItem>

</Tabs>
