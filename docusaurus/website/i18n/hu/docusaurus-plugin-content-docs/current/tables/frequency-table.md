---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Egy gyakorisági táblázat.

## Opciók

* __data__ | `object (required)`: értéktáblák objektuma. Default: `none`.
* __variable__ | `(string|Factor) (required)`: a megjelenítendő kategorikus változó neve. Default: `none`.
* __calculateCounts__ | `boolean`: szabályozza, hogy megjelenjen-e az abszolút számlálás. Default: `true`.
* __calculateRelative__ | `boolean`: a relatív frekvenciák megjelenítését szabályozza. Default: `false`.
* __group__ | `(string|Factor)`: csoportosító változó neve. Default: `none`.
* __nDecimalPlaces__ | `number`: a táblázatban megjelenített relatív gyakoriságok tizedesjegyeinek száma. Default: `3`.


## Példák

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
