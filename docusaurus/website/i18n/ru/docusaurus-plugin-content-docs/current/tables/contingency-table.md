---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Таблица непредвиденных обстоятельств.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: имя категориальной переменной для отображения вдоль строк. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  имя категориальной переменной для отображения вдоль столбцов. Default: `none`.
* __relativeFreqs__ | `boolean`: управляет отображением относительных частот. Default: `false`.
* __group__ | `(string|Factor)`: имя группирующей переменной. Default: `none`.
* __display__ | `(array<string>|string)`: отображать ли на экране `Строка процентов` и/или `Строка процентов`. Default: `[]`.
* __nDecimalPlaces__ | `number`: количество знаков после запятой для относительных частот, отображаемых в таблице. Default: `3`.


## Примеры


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Relative Frequencies', value: 'relativeFrequency' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Display Row Percentages', value: 'displayRowPercentage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
/>
```

</TabItem>

<TabItem value="relativeFrequency">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Gender"
    colVar="Drugs"
    relativeFreqs 
    nDecimalPlaces={2}
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Drugs"
    colVar="Complications"
    group="Gender"
/>
```

</TabItem>

<TabItem value="displayRowPercentage">

```jsx live
<ContingencyTable
    data={heartdisease} 
    rowVar="Drugs"
    colVar="Complications"
    display={['Row Percent']}
/>
```

</TabItem>

</Tabs>
