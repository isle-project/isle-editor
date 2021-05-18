---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Una tabella di contingenza.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: nome della variabile categorica da visualizzare lungo le righe. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  nome della variabile categorica da visualizzare lungo le colonne. Default: `none`.
* __relativeFreqs__ | `boolean`: controlla se visualizzare le frequenze relative. Default: `false`.
* __group__ | `(string|Factor)`: nome della variabile di raggruppamento. Default: `none`.
* __display__ | `(array<string>|string)`: se visualizzare "Percentuale di riga" e/o "Percentuale di colonna". Default: `[]`.
* __nDecimalPlaces__ | `number`: numero di cifre decimali per le frequenze relative visualizzate nella tabella. Default: `3`.


## Esempi


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
