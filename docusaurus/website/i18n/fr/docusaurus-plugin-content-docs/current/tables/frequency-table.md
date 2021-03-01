---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Un tableau de fréquences.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `(string|Factor) (required)`: nom de la variable catégorielle à afficher. Default: `none`.
* __calculateCounts__ | `boolean`: contrôle l'affichage ou non des comptes absolus. Default: `true`.
* __calculateRelative__ | `boolean`: contrôle l'affichage ou non des fréquences relatives. Default: `false`.
* __group__ | `(string|Factor)`: nom de la variable de regroupement. Default: `none`.
* __nDecimalPlaces__ | `number`: nombre de décimales pour les fréquences relatives affichées dans le tableau. Default: `3`.


## Exemples

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
