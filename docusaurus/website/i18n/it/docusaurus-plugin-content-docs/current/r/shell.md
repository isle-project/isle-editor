---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Una shell R interattiva che può essere utilizzata per eseguire comandi R nel cloud utilizzando [OpenCPU](https://www.opencpu.org/).

## Options

* __code__ | `string`: Codice R da valutare. Default: `''`.
* __solution__ | `string`: per le domande di programmazione, il codice R "stringa" che rappresenta la soluzione ufficiale del problema. Default: `''`.
* __hints__ | `array<(string|node)>`: per le domande di programmazione, una serie di suggerimenti che forniscono indicazioni su come affrontare il problema. Default: `[]`.
* __addPreceding__ | `boolean`: se impostato a true, la shell valuterà tutto il codice del componente corrente e tutti i precedenti che si verificano nella lezione. Default: `false`.
* __libraries__ | `array`: R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il `codice` di input. Default: `[]`.
* __precompute__ | `boolean`: controlla se il codice di default deve essere eseguito una volta che il componente è montato. Default: `false`.
* __prependCode__ | `(string|array)`: Il codice R `stringa` (o `array` di blocchi di codice R) da preparare al codice memorizzato nel `codice` quando si valuta. Default: `''`.
* __chat__ | `boolean`: controlla se la funzionalità di chat di gruppo deve essere abilitata. Default: `false`.
* __disabled__ | `boolean`: controlla se disabilitare tutti gli ingressi utente e rendere statico il blocco di codice. Default: `false`.
* __lines__ | `number`: numero di righe da visualizzare. Default: `5`.
* __resettable__ | `boolean`: controlla se visualizzare un pulsante di reset per il ripristino dell'inserimento del codice di default. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata ogni volta che l'inserimento del campo di testo cambia. Default: `onChange() {}`.
* __onEvaluate__ | `function`: richiamata ogni volta che si clicca sul pulsante `Evaluta`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: richiamata ogni volta che il risultato dell'esecuzione di un codice viene ottenuto dal cloud. Il risultato `stringa` viene passato come unico argomento alla funzione di callback. Default: `onResult() {}`.


## Examples

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

