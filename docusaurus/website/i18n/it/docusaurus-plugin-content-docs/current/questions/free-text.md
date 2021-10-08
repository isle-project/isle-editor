---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Un componente ISLE per le domande a cui gli studenti devono rispondere sotto forma di testo libero.

## Opzioni

* __question__ | `(string|node)`: la domanda visualizzata nella parte superiore del componente di domanda a testo libero. Default: `''`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (`top`, `left`, `right` o `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __solution__ | `(string|node)`: una risposta modello al problema. Default: `''`.
* __instantSolution__ | `boolean`: se è possibile attivare o disattivare immediatamente la visualizzazione della risposta del modello. Default: `false`.
* __rows__ | `number`: numero di righe del campo di testo per consentire agli studenti di digitare le loro risposte. Default: `5`.
* __chat__ | `boolean`: controlla se abilitare la chat di gruppo per la domanda. Default: `false`.
* __resizable__ | `boolean`: controlla se l'area di testo deve essere ridimensionabile. Default: `false`.
* __placeholder__ | `string`: testo segnaposto visualizzato prima che l'utente abbia inserito un testo. Default: `''`.
* __disableSubmitNotification__ | `boolean`: controlla se disabilitare le notifiche di presentazione. Default: `false`.
* __submissionMsg__ | `string`: notifica visualizzata quando il discente invia la sua risposta per la prima volta. Default: `''`.
* __resubmissionMsg__ | `string`: notifica visualizzata per tutti gli invii dopo il primo. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indica se il feedback, inclusa la risposta corretta, deve essere visualizzato dopo che gli studenti hanno inviato le loro risposte. Default: `true`.
* __maxlength__ | `number`: numero massimo consentito di caratteri. Default: `2500`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata ogni volta che il valore dell'area di testo cambia; riceve il testo corrente come unico argomento. Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata quando l'utente invia una risposta; riceve il testo inviato come unico argomento. Default: `onSubmit() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
