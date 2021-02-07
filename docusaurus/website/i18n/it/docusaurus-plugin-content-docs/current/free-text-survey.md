---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Un componente ISLE per le domande in cui le risposte degli studenti devono essere fornite sotto forma di testo libero. Ciò che differenzia questo componente dalla **FreeTextQuestion** è il fatto che i dati aggregati del gruppo vengono visualizzati a tutti in tempo reale.

## Options

* __question__ | `(string|node)`: la domanda da porre agli studenti. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controlla se si desidera consentire agli studenti di rispondere più volte al sondaggio. Default: `false`.
* __anonymous__ | `boolean`: controlla se le risposte degli studenti sono raccolte in modo anonimo. Default: `false`.
* __rows__ | `number`: numero di righe di testo nel campo di immissione. Default: `4`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSubmit__ | `function`: funzione di richiamo richiamata quando viene inviata una risposta. Default: `onSubmit() {}`.


## Examples

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

