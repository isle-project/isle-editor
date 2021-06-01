---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponent til gengivelse af en R-dataramme eller matrix i en tabelformet visning.

## Indstillinger

* __code__ | `string`: R-kode, der returnerer en data.frame, som indeholder de data, der skal vises i tabellen. Default: `''`.
* __libraries__ | `array`: R-biblioteker, der skal indlæses automatisk, når inputkoden udføres. Default: `[]`.
* __prependCode__ | `(string|array)`: R-kode `string` (eller `array` af R-kodeblokke), der skal tilføjes til den kode, der er gemt i `code`, når den evalueres. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler


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
