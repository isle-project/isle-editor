---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Eine Ordnungsfragekomponente, die den Schüler auffordert, eine Sammlung von Elementen in die richtige Reihenfolge zu bringen.

## Optionen

* __question__ | `(string|node)`: Frage, bei der der Schüler die verfügbaren `Optionen` in die richtige Reihenfolge bringen muss. Default: `''`.
* __options__ | `array (required)`: eine Reihe von Texten, die der Kursteilnehmer in die richtige Reihenfolge bringen muss (es wird angenommen, dass es sich um die mitgelieferte Reihenfolge handelt). Default: `none`.
* __provideFeedback__ | `boolean`: steuert, ob eine Benachrichtigung angezeigt werden soll, die angibt, ob die eingereichte Antwort korrekt ist oder nicht. Default: `true`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `oben`, `left`, `right`, oder `unten`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __failureMsg__ | `string`: Meldung, die angezeigt werden soll, wenn der Schüler eine falsche Antwort abgibt. Default: `none`.
* __successMsg__ | `string`: Meldung, die angezeigt werden soll, wenn der Kursteilnehmer die richtige Antwort abgibt. Default: `none`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der nach dem Ziehen eines Elements ausgelöst wird; hat zwei Parameter: ein `boolean`, das angibt, ob die Elemente in der richtigen Reihenfolge platziert wurden und ein `array` mit der aktuellen Reihenfolge. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der beim Absenden der Antwort aufgerufen wird; hat als einzigen Parameter ein `Boolesches`, das angibt, ob die Elemente in der richtigen Reihenfolge platziert wurden. Default: `onSubmit() {}`.


## Beispiele

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
