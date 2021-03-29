---
id: r-table
title: R Table
sidebar_label: R Table
---

Componente per il rendering di un frame di dati R o di una matrice in un display tabulare.

## Opzioni

* __code__ | `string`: Codice R che restituisce un data.frame contenente i dati da visualizzare nella tabella. Default: `''`.
* __libraries__ | `array`: R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il `codice` di input. Default: `[]`.
* __prependCode__ | `(string|array)`: Il codice R `stringa` (o `array` di blocchi di codice R) da preparare al codice memorizzato nel `codice` quando si valuta. Default: `''`.
* __style__ | `object`: Stili CSS in linea. Default: `{}`.


## Esempi


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
