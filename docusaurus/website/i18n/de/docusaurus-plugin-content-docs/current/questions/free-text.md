---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Eine ISLE-Komponente für Fragen, bei denen die Antworten der Schüler in Form von Freitext geliefert werden sollen.

## Optionen

* __question__ | `(string|node)`: die Frage, die oben in der Freitext-Fragenkomponente angezeigt wird. Default: `''`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __solution__ | `(string|node)`: eine Musterlösung für das Problem. Default: `''`.
* __instantSolution__ | `boolean`: ob man die Anzeige der Modellantwort sofort umschalten kann. Default: `false`.
* __rows__ | `number`: Anzahl der Zeilen des Textfelds, in das die Teilnehmer ihre Antworten eingeben können. Default: `5`.
* __chat__ | `boolean`: steuert, ob der Gruppenchat für die Frage aktiviert werden soll. Default: `false`.
* __resizable__ | `boolean`: steuert, ob der Textbereich in der Größe veränderbar sein soll. Default: `false`.
* __placeholder__ | `string`: Platzhaltertext wird angezeigt, bevor der Benutzer einen Text eingegeben hat. Default: `''`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __submissionMsg__ | `string`: Benachrichtigung, die angezeigt wird, wenn der Lerner zum ersten Mal seine Antwort absendet. Default: `''`.
* __resubmissionMsg__ | `string`: Benachrichtigung für alle Übertragungen nach der ersten angezeigt. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: gibt an, ob ein Feedback einschließlich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: `true`.
* __maxlength__ | `number`: maximal zulässige Anzahl von Zeichen. Default: `2500`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der jedes Mal aufgerufen wird, wenn sich der Wert des Textbereichs ändert; erhält den aktuellen Text als einziges Argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn der Benutzer eine Antwort abschickt; erhält den abgeschickten Text als einziges Argument. Default: `onSubmit() {}`.


## Beispiele

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
