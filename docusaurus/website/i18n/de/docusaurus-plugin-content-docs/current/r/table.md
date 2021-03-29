---
id: r-table
title: R Table
sidebar_label: R Table
---

Komponente zum Rendern eines R-Datenrahmens oder einer Matrix in einer tabellarischen Darstellung.

## Optionen

* __code__ | `string`: R-Code, der einen data.frame zurückgibt, der die Daten enthält, die in der Tabelle angezeigt werden sollen. Default: `''`.
* __libraries__ | `array`: R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgeführt wird. Default: `[]`.
* __prependCode__ | `(string|array)`: R-Code `string` (oder `array` von R-Codeblöcken), der bei der Auswertung dem in `code` gespeicherten Code vorangestellt wird. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele


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
