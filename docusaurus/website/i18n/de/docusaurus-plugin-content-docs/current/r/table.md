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
* __width__ | `number`: Breite (zwischen 0 und 1). Default: `0.5`.


## Beispiele

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

