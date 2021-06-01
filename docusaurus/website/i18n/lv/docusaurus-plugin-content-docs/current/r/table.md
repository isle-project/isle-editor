---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponents R datu rāmja vai matricas attēlošanai tabulārajā displejā.

## Iespējas

* __code__ | `string`: R kods, kas atgriež data.frame, kurā ir tabulā redzamie dati. Default: `''`.
* __libraries__ | `array`: R bibliotēkas, kas jāielādē automātiski, kad tiek izpildīts ievades `kods`.. Default: `[]`.
* __prependCode__ | `(string|array)`: R koda `virkne` (vai R koda bloku `maseja`), kas tiks pievienota kodam, kas saglabāts `code`, kad tiks novērtēts.. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri


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
