---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Eine Kontingenztabelle.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: Name der kategorischen Variable, die entlang der Zeilen angezeigt werden soll. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  Name der kategorialen Variable, die entlang der Spalten angezeigt werden soll. Default: `none`.
* __relativeFreqs__ | `boolean`: steuert, ob relative Frequenzen angezeigt werden sollen. Default: `false`.
* __group__ | `(string|Factor)`: Name der Gruppierungsvariable. Default: `none`.
* __display__ | `(array<string>|string)`: ob `Row Percent` und/oder `Column Percent` angezeigt werden soll. Default: `[]`.
* __nDecimalPlaces__ | `number`: Anzahl der Nachkommastellen für relative Häufigkeiten, die in der Tabelle angezeigt werden. Default: `3`.


## Beispiele


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
