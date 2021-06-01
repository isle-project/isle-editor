---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponent R-andmete raami või maatriksi esitamiseks tabeli kujul.

## Valikud

* __code__ | `string`: R-kood, mis tagastab tabelis kuvatavaid andmeid sisaldava data.frame'i.. Default: `''`.
* __libraries__ | `array`: R-raamatukogud, mis peaksid automaatselt laadima, kui sisendkood käivitatakse.. Default: `[]`.
* __prependCode__ | `(string|array)`: R-koodi "string" (või R-koodiplokkide "rida"), mis lisatakse koodis "code" salvestatud koodile, kui seda hinnatakse.. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited


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
