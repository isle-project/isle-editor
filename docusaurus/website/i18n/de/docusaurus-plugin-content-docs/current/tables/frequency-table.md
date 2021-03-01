---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Eine Häufigkeitstabelle.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `(string|Factor) (required)`: Name der anzuzeigenden kategorischen Variable. Default: `none`.
* __calculateCounts__ | `boolean`: steuert, ob absolute Zählungen angezeigt werden sollen. Default: `true`.
* __calculateRelative__ | `boolean`: steuert, ob relative Frequenzen angezeigt werden sollen. Default: `false`.
* __group__ | `(string|Factor)`: Name der Gruppierungsvariable. Default: `none`.
* __nDecimalPlaces__ | `number`: Anzahl der Nachkommastellen für relative Häufigkeiten, die in der Tabelle angezeigt werden. Default: `3`.


## Beispiele

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

</Tabs>
