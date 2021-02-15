---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Analisi dei componenti principali.

## Options

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variables__ | `array<string> (required)`: nomi delle variabili utilizzate per il clustering. Default: `none`.
* __center__ | `boolean`: valori centrali sottraendo la media. Default: `true`.
* __scale__ | `boolean`: valori della scala dividendo con la deviazione standard. Default: `false`.
* __noComponents__ | `number`: numero di componenti forniti alla richiamata `onResult. Default: `0`.
* __onResult__ | `function`: richiamo richiamato con oggetto del modello e componenti. Default: `onResult() {}`.


## Examples

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

