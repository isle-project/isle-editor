---
id: r-output
title: R Output
sidebar_label: R Output
---

Componente per il rendering dell'uscita R all'interno di una lezione ISLE.

## Opzioni

* __code__ | `string`: Codice R utilizzato per valutare. Default: `''`.
* __libraries__ | `array`: R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il `codice` di input. Default: `[]`.
* __prependCode__ | `(string|array)`: R code (o `array` di blocchi di codice) da preparare al codice memorizzato in `code` quando si valuta. Default: `''`.
* __onPlots__ | `function`: richiamata invocata con qualsiasi trama generata. Default: `onPlots() {}`.
* __onResult__ | `function`: richiamata con `errore` (`null` se l'operazione è andata a buon fine) e `risultato` mantenendo l'uscita R. Default: `onResult() {}`.


## Esempi

```jsx live
<ROutput code="runif(10)" />
```

