---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Таблица частот.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `(string|Factor) (required)`: имя категорической переменной для отображения. Default: `none`.
* __calculateCounts__ | `boolean`: контролирует, отображать ли абсолютные подсчёты. Default: `true`.
* __calculateRelative__ | `boolean`: управляет отображением относительных частот. Default: `false`.
* __group__ | `(string|Factor)`: имя группирующей переменной. Default: `none`.
* __nDecimalPlaces__ | `number`: количество знаков после запятой для относительных частот, отображаемых в таблице. Default: `3`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Relative Frequency', value: 'relativeFrequency' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Number of Decimals', value: 'nDecimals' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
/>
```
</TabItem>

<TabItem value="relativeFrequency">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    calculateRelative
/>
```
</TabItem>

<TabItem value="grouped">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    group="Gender"
/>
```
</TabItem>

<TabItem value="nDecimals">

```jsx live
<FrequencyTable
    data={heartdisease} 
    variable="Drugs"
    calculateRelative 
    nDecimalPlaces={3}
/>
```

</TabItem>
