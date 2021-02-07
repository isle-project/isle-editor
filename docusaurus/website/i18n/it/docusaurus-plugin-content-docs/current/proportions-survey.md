---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Componente che permette a un gruppo di persone di votare sui pesi e sull'importanza di determinate opzioni.

## Options

* __allowMultipleAnswers__ | `boolean`: controlla se si desidera consentire agli studenti di rispondere più volte al sondaggio. Default: `false`.
* __anonymous__ | `boolean`: controlla se le risposte degli studenti sono anonime. Default: `false`.
* __colors__ | `array`: gamma di colori per i componenti del grafico a torta. Se non definita, verrà utilizzata una scala di colori personalizzata. Default: `none`.
* __disabled__ | `boolean`: controlla se l'indagine è disattivata. Default: `false`.
* __group__ | `string`: titolo del display di gruppo. Default: `'group results'`.
* __groupHeight__ | `number`: altezza di ingresso proporzioni per la visualizzazione di gruppo (in px). Default: `100`.
* __legends__ | `array`: etichette di legenda che descrivono le opzioni da pesare. Default: `[]`.
* __margin__ | `string`: proporzione del margine di ingresso (in px). Default: `'40px'`.
* __onSubmit__ | `function`: funzione di richiamo invocata una volta che gli studenti inviano una risposta. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporzioni altezza di ingresso per il singolo studente (in px). Default: `200`.
* __precision__ | `number`: precisione visualizzata dei valori delle proporzioni. Default: `2`.
* __question__ | `(string|node)`: la domanda da visualizzare. Default: `''`.
* __step__ | `number`: il passo delle frecce che si vedono quando si posiziona il cursore sopra la casella di immissione. Default: `0.25`.


## Examples

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



