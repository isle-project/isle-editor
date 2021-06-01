---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponent na vykresľovanie dátového rámca alebo matice R v tabuľkovom zobrazení.

## Možnosti

* __code__ | `string`: Kód R, ktorý vracia data.frame obsahujúci údaje, ktoré sa majú zobraziť v tabuľke. Default: `''`.
* __libraries__ | `array`: Knižnice R, ktoré by sa mali automaticky načítať pri spustení vstupného kódu. Default: `[]`.
* __prependCode__ | `(string|array)`: `reťazec` kódu R (alebo `pásmo` blokov kódu R), ktorý sa pri vyhodnocovaní pridá ku kódu uloženému v `code`. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady


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
