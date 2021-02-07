---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Una componente del sondaggio in cui l'istruttore può raccogliere in tempo reale i dati del sondaggio a scelta multipla degli studenti.

## Options

* __question__ | `(string|node)`: stringa che indica la domanda da porre agli studenti. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controlla se si desidera consentire agli studenti di rispondere più volte al sondaggio. Default: `false`.
* __anonymous__ | `boolean`: controlla se le risposte degli studenti sono anonime. Default: `false`.
* __answers__ | `array`: matrice che indica le scelte di risposta per gli studenti. Default: `[]`.
* __multipleAnswers__ | `boolean`: indica se gli studenti possono selezionare più di una risposta. Si noti che questo differisce da allowMultipleAnswers in quanto allow rende gli studenti in grado di inviare la domanda più volte. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSubmit__ | `function`: funzione da chiamare quando viene inviata una risposta. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

