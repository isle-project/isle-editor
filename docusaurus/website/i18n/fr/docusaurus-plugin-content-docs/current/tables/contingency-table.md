---
id: contingency-table
title: Contingency Table
sidebar_label: Contingency Table
---

Un tableau de contingence.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __rowVar__ | `(string|Factor) (required)`: nom de la variable catégorielle à afficher le long des lignes. Default: `none`.
* __colVar__ | `(string|Factor) (required)`:  nom de la variable catégorielle à afficher le long des colonnes. Default: `none`.
* __relativeFreqs__ | `boolean`: contrôle l'affichage ou non des fréquences relatives. Default: `false`.
* __group__ | `(string|Factor)`: nom de la variable de regroupement. Default: `none`.
* __display__ | `(array<string>|string)`: l'affichage ou non du "Pourcentage de la ligne" et/ou du "Pourcentage de la colonne. Default: `[]`.
* __nDecimalPlaces__ | `number`: nombre de décimales pour les fréquences relatives affichées dans le tableau. Default: `3`.


## Exemples


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
