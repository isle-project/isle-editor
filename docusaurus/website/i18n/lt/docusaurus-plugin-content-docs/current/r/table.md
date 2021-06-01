---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponentas, skirtas R duomenų rėmeliui arba matricai atvaizduoti lentelėse.

## Parinktys

* __code__ | `string`: R kodas, grąžinantis data.frame, kuriame yra lentelėje rodomi duomenys. Default: `''`.
* __libraries__ | `array`: R bibliotekos, kurios turėtų būti automatiškai įkeliamos, kai įvesties `kodas` yra vykdomas.. Default: `[]`.
* __prependCode__ | `(string|array)`: R kodo eilutė (arba R kodo blokų masyvas), kuri bus pridedama prie kodo, saugomo `code`, vertinant. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai


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
