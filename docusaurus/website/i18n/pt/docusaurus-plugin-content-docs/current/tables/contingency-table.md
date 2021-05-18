---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Uma tabela de contingência.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: nome da variável categórica a ser exibida ao longo das fileiras. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  nome da variável categórica a ser exibida ao longo das colunas. Default: `none`.
* __relativeFreqs__ | `boolean`: controla se deve exibir freqüências relativas. Default: `false`.
* __group__ | `(string|Factor)`: nome da variável de agrupamento. Default: `none`.
* __display__ | `(array<string>|string)`: se deve exibir "Porcentagem de linha" e/ou "Porcentagem de coluna". Default: `[]`.
* __nDecimalPlaces__ | `number`: número de casas decimais para as freqüências relativas exibidas na tabela. Default: `3`.


## Exemplos


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
