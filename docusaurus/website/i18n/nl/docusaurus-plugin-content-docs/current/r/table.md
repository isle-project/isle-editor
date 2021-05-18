---
id: r-table
title: R Table
sidebar_label: R Table
---

Onderdeel voor het weergeven van een R-dataframe of -matrix in een tabelweergave.

## Opties

* __code__ | `string`: R-code die een data.frame retourneert met de gegevens die in de tabel moeten worden weergegeven. Default: `''`.
* __libraries__ | `array`: R-bibliotheken die automatisch moeten worden geladen wanneer de invoer `code` wordt uitgevoerd. Default: `[]`.
* __prependCode__ | `(string|array)`: R-code `string` (of `array` van R-codeblokken) die bij de evaluatie moet worden voorgeprogrammeerd op de code die is opgeslagen in `code`. Default: `''`.
* __style__ | `object`: CSS inline stijlen. Default: `{}`.


## Voorbeelden


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
