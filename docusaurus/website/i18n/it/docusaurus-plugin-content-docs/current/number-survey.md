---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Una componente di sondaggio in cui l'istruttore può raccogliere dati numerici di sondaggio dagli studenti in tempo reale.

## Opzioni

* __question__ | `(string|node)`: la domanda da visualizzare. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controlla se lo stesso utente (o la sessione se anonima) può inviare più risposte). Default: `false`.
* __anonymous__ | `boolean`: Permette agli studenti di inviare i dati in forma anonima. Si noti che se questa opzione è impostata su "true", gli istruttori non saranno in grado di vedere l'ID dello studente che ha inviato i dati. Default: `false`.
* __step__ | `(number|string)`: Un valore `stringa` o `numerico` che indica il passo delle frecce viste quando si posiziona il cursore sopra la casella di input. Se `'any'`, il passo sarà impostato a `1`. Default: `'any'`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSubmit__ | `function`: funzione di richiamo invocata una volta che gli studenti inviano una risposta. Default: `onSubmit() {}`.


## Esempi

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

