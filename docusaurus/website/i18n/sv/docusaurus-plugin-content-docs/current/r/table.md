---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponent för att visa en R-dataruta eller en matris i en tabellform.

## Alternativ

* __code__ | `string`: R-kod som returnerar en data.frame som innehåller de data som ska visas i tabellen.. Default: `''`.
* __libraries__ | `array`: R-bibliotek som ska laddas automatiskt när inmatningskoden körs.. Default: `[]`.
* __prependCode__ | `(string|array)`: R-kodsträng (eller ett array av R-kodblock) som ska läggas till den kod som lagras i `code` vid utvärderingen.. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel


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
