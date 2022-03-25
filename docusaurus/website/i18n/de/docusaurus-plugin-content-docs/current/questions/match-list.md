---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Eine ISLE-Komponente, die eine Frage wiedergibt, bei der der Lerner Elemente aus zwei Listen richtig zuordnen muss.

## Optionen

* __question__ | `(string|node)`: Frage, die oben in der Fragenkomponente der Übereinstimmungsliste angezeigt werden soll. Default: `''`.
* __elements__ | `array<{a,b}>`: ein "Array", das die richtigen Paare enthält, die oben in der Freitext-Fragenkomponente angezeigt werden. Jedes "Array"-Element muss ein "Objekt" mit "a"- und "b"-Eigenschaften sein; liefern Sie Elemente mit nur "a"- oder "b"-Eigenschaften, um Ablenkungsantworten hinzuzufügen. Default: `[]`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __provideFeedback__ | `boolean`: gibt an, ob die Lösung zugänglich sein soll, nachdem die Lernenden ihre Antworten abgegeben haben. Default: `true`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __colorScale__ | `array`: wenn gesetzt, werden die mitgelieferten Farben für die Kacheln verwendet. Default: `none`.
* __shuffle__ | `string`: gibt an, ob die Spalten `links`, `rechts` oder `beide`, deren Elemente übereinstimmen müssen, gemischt werden sollen; geben Sie `none` oder einen anderen Wert an, um die Elemente auf beiden Seiten nicht zu mischen (kann nützlich sein, wenn keine Lösung vorhanden ist). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __submissionMsg__ | `string`: Benachrichtigung, die angezeigt wird, wenn der Lerner zum ersten Mal seine Antwort absendet. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: Benachrichtigung für alle Übertragungen nach der ersten angezeigt. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn der Schüler eine Antwort abgibt. Default: `onSubmit() {}`.


## Beispiele

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
