---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Un componente ISLE che rende una domanda a scelta multipla. Supporta il caso in cui l'allievo deve selezionare una singola risposta e quando potrebbero esserci più risposte corrette e tutte le risposte corrette devono essere scelte.

## Opzioni

* __question__ | `(string|node)`: la domanda visualizzata nella parte superiore del componente a scelta multipla. Default: `''`.
* __solution__ | `(number|array)`: numero che indica quale risposta è corretta o un `array` dei numeri di risposta corretti nel caso in cui l'allievo debba essere in grado di selezionare più risposte. Default: `none`.
* __answers__ | `array (required)`: un `array` di oggetti di risposta. Ogni risposta dovrebbe essere un oggetto con campi "contenuto" e "spiegazione", che indicano l'opzione di risposta visualizzata e una spiegazione visibile dopo l'invio della domanda per spiegare perché la risposta è corretta o non corretta. Default: `none`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (`top`, `left`, `right` o `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __disabled__ | `boolean`: controlla se la domanda è disabilitata. Default: `false`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __provideFeedback__ | `string`: o "pieno", "incrementale", o "nessuno". Se `full`, il feedback, inclusa la risposta corretta, viene visualizzato dopo che gli studenti hanno inviato le loro risposte; se `incremental`, il feedback viene visualizzato solo per la risposta selezionata; se `nessuno`, non viene restituito alcun feedback. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: controlla se disabilitare le notifiche di presentazione. Default: `false`.
* __displaySolution__ | `boolean`: controlla se la soluzione viene visualizzata in anticipo. Default: `false`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata ogni volta che la risposta selezionata cambia; riceve l'indice della domanda selezionata come unico argomento (o un array nel caso la domanda sia di tipo "Choose all that apply"). Default: `onChange(){}`.
* __onSubmit__ | `function`: richiamata invocata dopo l'invio di una risposta. Default: `onSubmit(){}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="singleAnswer"
    values={[
        { label: 'Single Answer', value: 'singleAnswer' },
        { label: 'Formatted Answers', value: 'formattedAnswers' },
        { label: 'Instant Feedback', value: 'instantFeedback' },
        { label: 'Multiple Answers', value: 'multipleAnswers' },
        { label: 'Series of Questions', value: 'aSeries' },
        { label: 'With Hints', value: 'withHints' }
    ]}
    lazy
>

<TabItem value="singleAnswer">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
/>
```

</TabItem>

<TabItem value="formattedAnswers" >

```jsx live
<MultipleChoiceQuestion
    answers={[
        {content: <span>**bold**</span>},
        {content: <span>*italic*</span>},
        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}
    ]}
    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}
/>
```

</TabItem>

<TabItem value="instantFeedback">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
    provideFeedback="full"
/>
```

</TabItem>

<TabItem value="multipleAnswers">

```jsx live
<MultipleChoiceQuestion
    solution={[ 0, 3 ]}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"},
        {content:"kmeans"}
    ]}
    question="Which of the following methods are used for clustering?"
    style={{ background: '#FFF6F3'}}
/>
```

</TabItem>

<TabItem value="aSeries">

```jsx live
<Slider>
    <MultipleChoiceQuestion
        solution={[ 1, 3 ]}
        answers={[
            { content:"George Washington", explanation: "Yes, he was the first president." },
            { content:"Benjamin Franklin", explanation: "He was a founding father."},
            { content:"Ulysses S. Grant", explanation: "General and 18th president." },
            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
        ]}
        question="Who was not a president of the United States?"
        style={{ background: 'lightblue'}}
        feedback={false}
    />
    <MultipleChoiceQuestion
        solution={[ 0, 3 ]}
        answers={[
            {content:"Hierarchical Clustering", explanation:""},
            {content:"LASSO", explanation:""},
            {content:"Multiple regression", explanation:""},
            {content:"kmeans", explanation:""}
        ]}
        question="Which of the following methods are used for clustering?"
        style={{ background: '#FFF6F3'}}
        feedback={false}
    />
</Slider>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<MultipleChoiceQuestion
    solution={[ 1, 3 ]}
    answers={[
        { content:"George Washington", explanation: "Yes, he was the first president." },
        { content:"Benjamin Franklin", explanation: "He was a founding father."},
        { content:"Ulysses S. Grant", explanation: "General and 18th president." },
        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
    ]}
    question="Who was not a president of the United States?"
    style={{ background: 'lightblue'}}
    feedback={false}
    hints={[
        'Washington - that is a no-brainer, isn\'t it?',
        'Franklin was famous for his invention of the lightning rod - so why become more?',
        'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.',
    ]}
    hintPlacement="top"
/>
```

</TabItem>

</Tabs>
