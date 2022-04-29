---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Una componente di domanda numero.

## Opzioni

* __question__ | `(string|node)`: domanda numero. Default: `''`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (`top`, `left`, `right` o `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __solution__ | `(number|array<number>)`: una risposta numerica al problema (o più risposte corrette se viene fornito un array). Default: `none`.
* __digits__ | `number`: numero di cifre per le quali la risposta fornita dallo studente deve corrispondere alla soluzione per essere considerata corretta. Impostato a 0 per corrispondere come un intero. Se impostato a null cercherà una corrispondenza esatta. Default: `3`.
* __max__ | `number`: valore di ingresso massimo consentito. Default: `null`.
* __min__ | `number`: valore minimo di ingresso consentito. Default: `null`.
* __defaultValue__ | `number`: valore preselezionato dell'ingresso del numero. Default: `none`.
* __provideFeedback__ | `boolean`: indica se il feedback, compresa la risposta corretta, deve essere visualizzato dopo che gli studenti hanno inviato le loro risposte. Default: `true`.
* __submitAfterFeedback__ | `boolean`: controlla se si deve poter ripresentare anche dopo che la soluzione è stata rivelata. Default: `false`.
* __nTries__ | `number`: dopo quanti tentativi di feedback dovrebbe essere fornito (se "fornireFeedback" è "vero"). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controlla se disabilitare le notifiche di presentazione. Default: `false`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: callback che viene attivato dopo che il valore del campo numerico cambia; riceve il valore corrente come unico argomento. Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata al momento dell'invio della risposta; ha come primo parametro un `booleano` che indica se la risposta è stata data correttamente (se applicabile, `null` altrimenti) e la risposta fornita come secondo parametro. Default: `onSubmit() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
