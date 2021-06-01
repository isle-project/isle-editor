---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

En kontingenstabel.

## Indstillinger

* __data__ | `object (required)`: objekt af værdi-arrays. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: navnet på den kategoriske variabel, der skal vises langs rækkerne. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  navnet på den kategoriske variabel, der skal vises langs kolonnerne. Default: `none`.
* __relativeFreqs__ | `boolean`: styrer, om der skal vises relative frekvenser. Default: `false`.
* __group__ | `(string|Factor)`: navnet på grupperingsvariablen. Default: `none`.
* __display__ | `(array<string>|string)`: om der skal vises `Row Percent` og/eller `Column Percent`. Default: `[]`.
* __nDecimalPlaces__ | `number`: antal decimaler for de relative frekvenser, der vises i tabellen. Default: `3`.


## Eksempler


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
