---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Eine Komponente für Zahlenfragen.

## Optionen

* __question__ | `(string|node)`: Zahlenfrage. Default: `''`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __solution__ | `(number|array<number>)`: eine numerische Antwort auf das Problem (oder mehrere richtige Antworten, wenn ein Array geliefert wird). Default: `none`.
* __digits__ | `number`: Anzahl der Ziffern, für die die vom Kursteilnehmer gelieferte Antwort mit der Lösung übereinstimmen muss, um als korrekt zu gelten. Auf 0 gesetzt, um als Ganzzahl übereinzustimmen. Wenn auf Null gesetzt, wird nach einer exakten Übereinstimmung gesucht. Default: `3`.
* __max__ | `number`: maximal zulässiger Eingangswert. Default: `null`.
* __min__ | `number`: minimal zulässiger Eingangswert. Default: `null`.
* __defaultValue__ | `number`: Vorgewählter Wert der Zahleneingabe. Default: `none`.
* __provideFeedback__ | `boolean`: gibt an, ob ein Feedback einschließlich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: `true`.
* __submitAfterFeedback__ | `boolean`: steuert, ob man auch nach dem Aufdecken der Lösung eine Wiedervorlage machen können soll). Default: `false`.
* __nTries__ | `number`: nach wie vielen Versuchen Feedback geliefert werden soll (wenn `provideFeedback` `true` ist). Default: `1`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der ausgelöst wird, wenn sich der Wert des Zahlenfeldes ändert; erhält als einziges Argument den aktuellen Wert. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn die Antwort abgeschickt wurde; hat als ersten Parameter ein `boolean`, das angibt, ob die Antwort richtig beantwortet wurde (falls zutreffend, sonst `null`) und die gelieferte Antwort als zweiten Parameter. Default: `onSubmit() {}`.


## Beispiele

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
