---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Neizbēgamības tabula.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: kategoriskā mainīgā lieluma nosaukums, kas jāattēlo rindās.. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  kategoriskā mainīgā lieluma nosaukums, kas jāattēlo gar kolonnām.. Default: `none`.
* __relativeFreqs__ | `boolean`: nosaka, vai attēlot relatīvās frekvences.. Default: `false`.
* __group__ | `(string|Factor)`: grupēšanas mainīgā nosaukums. Default: `none`.
* __display__ | `(array<string>|string)`: vai attēlot `Row Percent` un/vai `Column Percent`.. Default: `[]`.
* __nDecimalPlaces__ | `number`: decimālzīmju skaits tabulā attēlotajām relatīvajām frekvencēm.. Default: `3`.


## Piemēri


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
