---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Eine ausgewählte Fragekomponente.

## Optionen

* __question__ | `(string|node)`: Frage, für die der Kursteilnehmer eine der verfügbaren Antwortmöglichkeiten auswählen muss. Default: `''`.
* __options__ | `array (required)`: verfügbare Antwortoptionen, aus denen der Kursteilnehmer wählen kann. Default: `none`.
* __solution__ | `number`: Index des Lösungselements in `options`. Default: `none`.
* __preselected__ | `number`: Index der vorgewählten Antwortmöglichkeit. Default: `0`.
* __inline__ | `boolean`: steuert, ob die Komponente inline gerendert wird oder nicht. Default: `false`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __provideFeedback__ | `boolean`: gibt an, ob ein Feedback einschließlich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: `true`.
* __failureMsg__ | `string`: Meldung, die angezeigt werden soll, wenn der Schüler eine falsche Antwort auswählt. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: Meldung, die angezeigt werden soll, wenn der Schüler die richtige Antwort auswählt. Default: `'That's the correct answer!'`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der nach der Submit-Aktion ausgelöst wird. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn die Antwort abgeschickt wurde; hat als ersten Parameter ein `boolean`, das angibt, ob die Antwort richtig beantwortet wurde (falls zutreffend, sonst `null`) und die gelieferte Antwort als zweiten Parameter. Default: `onSubmit() {}`.


## Beispiele

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
