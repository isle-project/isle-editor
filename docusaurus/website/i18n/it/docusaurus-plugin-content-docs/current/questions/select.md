---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Un componente di domanda selezionata.

## Opzioni

* __question__ | `(string|node)`: domanda per la quale lo studente deve selezionare una delle opzioni di risposta disponibili. Default: `''`.
* __options__ | `array (required)`: opzioni di risposta disponibili tra cui lo studente può selezionare. Default: `none`.
* __solution__ | `number`: indice dell'elemento di soluzione in `opzioni`. Default: `none`.
* __preselected__ | `number`: indice dell'opzione di risposta preselezionata. Default: `0`.
* __inline__ | `boolean`: controlla se il componente è reso in linea o meno. Default: `false`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (in alto, a sinistra, a destra o in basso). Default: `'top'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __provideFeedback__ | `boolean`: indica se il feedback, inclusa la risposta corretta, deve essere visualizzato dopo che gli studenti hanno inviato le loro risposte. Default: `true`.
* __failureMsg__ | `string`: messaggio da visualizzare quando lo studente seleziona una risposta sbagliata. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: messaggio da visualizzare quando lo studente seleziona la risposta corretta. Default: `'That's the correct answer!'`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamo che viene attivato dopo l'azione di presentazione. Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata al momento dell'invio della risposta; ha come primo parametro un `booleano` che indica se la risposta è stata data correttamente (se applicabile, `null` altrimenti) e la risposta fornita come secondo parametro. Default: `onSubmit() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
