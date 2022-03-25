---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Eine Bereichskomponente, die die Teilnehmer auffordert, einen unteren und oberen Endpunkt anzugeben.

## Optionen

* __question__ | `(string|node)`: angezeigte Frage. Default: `''`.
* __solution__ | `array<number>`: Zwei-Elemente-Array, das die Endpunkte des korrekten Bereichs enthält. Default: `none`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __labels__ | `array`: Zwei-Elemente-Array mit benutzerdefinierten Bezeichnungen außer "Lower" und "Upper". Default: `none`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __digits__ | `number`: Anzahl der Ziffern, die zwischen der Lösung und der vom Benutzer eingegebenen Antwort übereinstimmen müssen. Wenn nicht angegeben oder auf null gesetzt, prüft die Komponente auf strikte Gleichheit. Wenn auf 0 gesetzt, wird auf ganzzahlige Gleichheit geprüft. Default: `3`.
* __max__ | `number`: maximaler Eingangswert. Default: `null`.
* __min__ | `number`: minimaler Eingangswert. Default: `null`.
* __provideFeedback__ | `boolean`: gibt an, ob ein Feedback einschließlich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: steuert, ob man mehrere Antworten abgeben kann. Default: `false`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChangeLower__ | `function`: Callback, der ausgelöst wird, nachdem die untere Grenze durch den Benutzer geändert wurde. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: Callback, der ausgelöst wird, nachdem die obere Grenze durch den Benutzer geändert wurde. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn die Antwort abgeschickt wurde; hat als ersten Parameter ein `boolean`, das angibt, ob die Antwort richtig beantwortet wurde (falls zutreffend, sonst `null`) und die gelieferte Antwort als zweiten Parameter. Default: `onSubmit() {}`.


## Beispiele

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
