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
* __width__ | `number`: larghezza (tra 0 e 1). Default: `0.5`.


## Esempi

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

