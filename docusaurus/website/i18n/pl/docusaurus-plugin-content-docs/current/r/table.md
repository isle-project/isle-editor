---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponent do renderowania ramki danych R lub macierzy w postaci tabelarycznej.

## Opcje

* __code__ | `string`: Kod R zwracający ramkę data.frame zawierającą dane, które mają być wyświetlane w tabeli. Default: `''`.
* __libraries__ | `array`: Biblioteki R, które powinny być ładowane automatycznie po wykonaniu wejścia `kodu`.. Default: `[]`.
* __prependCode__ | `(string|array)`: Kod R `sznurek` (lub `szereg` bloków kodu R), który ma być dołączony do kodu przechowywanego w `kodu` podczas oceny. Default: `''`.
* __width__ | `number`: szerokość (między 0 a 1). Default: `0.5`.


## Przykłady


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Width', value: 'customWidth' }
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

<TabItem value="customWidth" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    width={0.85}
/>
```

</TabItem>

</Tabs>
