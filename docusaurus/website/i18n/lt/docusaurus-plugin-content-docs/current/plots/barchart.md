---
id: barchart
title: Bar Chart
sidebar_label: Bar Chart
---

Stulpelinė diagrama.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __variable__ | `(string|Factor) (required)`: kintamasis rodomas. Default: `none`.
* __group__ | `(string|Factor)`: grupavimo kintamasis. Default: `none`.
* __yvar__ | `string`: neprivalomas kintamasis, naudojamas stulpelių aukščiams (kartu su `summary`). Default: `none`.
* __summary__ | `string`: statistinio rodiklio, kurį reikia apskaičiuoti `yvar` ir rodyti kaip kiekvienos kategorijos stulpelio aukštį, pavadinimas (`Min`, `Max`, `Mean`, `Median`, `Sum`, ...). Default: `none`.
* __horizontal__ | `boolean`: ar rodyti juostas horizontaliai. Default: `false`.
* __stackBars__ | `boolean`: kai grupuojama, nustatoma, ar stulpeliai bus sukrauti vienas ant kito.. Default: `false`.
* __relative__ | `boolean`: ar apskaičiuoti santykinius dažnius kiekvienos grupės viduje.. Default: `false`.
* __totalPercent__ | `boolean`: ar rodyti bendras juostas kaip santykinius dažnius.. Default: `false`.
* __xOrder__ | `string`: `bendra`, `kategorija`, `min`, `max`, `vidurkis` arba `mediana`.. Default: `none`.
* __direction__ | `string`: kaip išdėstyti barus palei x ašį (`ascending` arba `descending`). Default: `'ascending'`.


## Pavyzdžiai

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
