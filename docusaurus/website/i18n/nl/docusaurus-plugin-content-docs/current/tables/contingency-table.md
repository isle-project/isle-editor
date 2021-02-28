---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Een noodtabel.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: naam van categorische variabele die langs de rijen moet worden weergegeven. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  naam van de categorische variabele die in de kolommen moet worden weergegeven. Default: `none`.
* __relativeFreqs__ | `boolean`: controleert of de relatieve frequenties worden weergegeven. Default: `false`.
* __group__ | `(string|Factor)`: naam van de groepsvariabele. Default: `none`.
* __display__ | `(array<string>|string)`: of er `Rij-percentage` en/of `Kolom-percentage` moet worden weergegeven. Default: `[]`.
* __nDecimalPlaces__ | `number`: aantal decimalen voor relatieve frequenties weergegeven in de tabel. Default: `3`.


## Voorbeelden


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
