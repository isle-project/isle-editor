---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponens egy R adatkeret vagy mátrix táblázatos megjelenítésére.

## Opciók

* __code__ | `string`: R kód, amely egy data.frame-et ad vissza, amely a táblázatban megjelenítendő adatokat tartalmazza.. Default: `''`.
* __libraries__ | `array`: R könyvtárak, amelyeket automatikusan be kell tölteni, amikor a bemeneti "kód" végrehajtásra kerül.. Default: `[]`.
* __prependCode__ | `(string|array)`: R kód "string" (vagy R kódblokkok "tömbje"), amelyet a "code"-ban tárolt kód elé kell illeszteni a kiértékeléskor.. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák


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
