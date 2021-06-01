---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Preglednica pogostosti.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti. Default: `none`.
* __variable__ | `(string|Factor) (required)`: ime kategorične spremenljivke, ki se prikaže. Default: `none`.
* __calculateCounts__ | `boolean`: nadzoruje, ali naj se prikaže absolutno število.. Default: `true`.
* __calculateRelative__ | `boolean`: nadzoruje, ali se prikažejo relativne frekvence.. Default: `false`.
* __group__ | `(string|Factor)`: ime spremenljivke za razvrščanje v skupine. Default: `none`.
* __nDecimalPlaces__ | `number`: število decimalnih mest za relativne frekvence, prikazane v tabeli. Default: `3`.


## Primeri

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
