---
id: frequency-table
title: Frequency Table
sidebar_label: Frequency Table
---

Een frequentietabel.

## Opties

* __data__ | `object (required)`: object van waardevermeerdering. Default: `none`.
* __variable__ | `(string|Factor) (required)`: naam van de weer te geven categorische variabele. Default: `none`.
* __calculateCounts__ | `boolean`: controleert of er absolute tellingen worden weergegeven. Default: `true`.
* __calculateRelative__ | `boolean`: controleert of de relatieve frequenties worden weergegeven. Default: `false`.
* __group__ | `(string|Factor)`: naam van de groepsvariabele. Default: `none`.
* __nDecimalPlaces__ | `number`: aantal decimalen voor relatieve frequenties weergegeven in de tabel. Default: `3`.


## Voorbeelden

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
