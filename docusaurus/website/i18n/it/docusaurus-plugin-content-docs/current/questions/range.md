---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Una componente di domanda di gamma che chiede agli studenti di fornire un punto finale inferiore e superiore.

## Opzioni

* __question__ | `(string|node)`: domanda visualizzata. Default: `''`.
* __solution__ | `array<number>`: array a due elementi contenente i punti finali del corretto intervallo. Default: `none`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (`top`, `left`, `right` o `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __labels__ | `array`: array a due elementi di etichette personalizzate diverse da "Abbassare" e "`top`". Default: `none`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __digits__ | `number`: numero di cifre che devono corrispondere tra la soluzione e la risposta fornita dall'utente. Se non è dato o impostato a zero, il componente verifica la stretta uguaglianza. Se impostato a 0, verifica l'uguaglianza dei numeri interi. Default: `3`.
* __max__ | `number`: valore massimo di ingresso. Default: `null`.
* __min__ | `number`: valore minimo di ingresso. Default: `null`.
* __provideFeedback__ | `boolean`: indica se il feedback, compresa la risposta corretta, deve essere visualizzato dopo che gli studenti hanno inviato le loro risposte. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: controlla se si possono inviare più risposte. Default: `false`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChangeLower__ | `function`: richiamo attivato dopo che il limite inferiore è stato modificato dall'utente. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: richiamo attivato dopo che il limite superiore è stato modificato dall'utente. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: callback attivato dopo che un limite viene cambiato dall'utente (con limite inferiore e superiore come argomenti). Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata al momento dell'invio della risposta; ha come primo parametro un `booleano` che indica se la risposta è stata data correttamente (se applicabile, `null` altrimenti) e la risposta fornita come secondo parametro. Default: `onSubmit() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
