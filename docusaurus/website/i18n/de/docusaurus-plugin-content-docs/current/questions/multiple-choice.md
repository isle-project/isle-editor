---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Eine ISLE-Komponente, die eine Multiple-Choice-Frage wiedergibt. Sie unterstützt den Fall, dass der Lerner eine einzelne Antwort auswählen muss und wenn es mehrere richtige Antworten geben kann und alle richtigen ausgewählt werden müssen.

## Optionen

* __question__ | `(string|node)`: die oben in der Multiple-Choice-Komponente angezeigte Frage. Default: `''`.
* __solution__ | `(number|array)`: Zahl, die angibt, welche Antwort richtig ist, oder eine "Reihe" der richtigen Antwortnummern, falls der Lernende mehrere Antworten auswählen kann. Default: `none`.
* __answers__ | `array (required)`: ein `Array` von Antwort-Objekten. Jede Antwort sollte ein Objekt mit den Feldern `Content` und `Explanation` sein, die die angezeigte Antwortoption und eine nach dem Absenden der Frage sichtbare Erklärung bezeichnen, warum die Antwort richtig oder falsch ist. Default: `none`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __disabled__ | `boolean`: steuert, ob die Frage deaktiviert ist. Default: `false`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __provideFeedback__ | `string`: entweder `voll`, `inkrementell` oder `keine`. Wenn `full`, wird Feedback einschließlich der richtigen Antwort angezeigt, nachdem die Teilnehmer ihre Antworten abgeschickt haben; wenn `incremental`, wird Feedback nur für die ausgewählte Antwort angezeigt; wenn `none`, wird kein Feedback zurückgegeben. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __displaySolution__ | `boolean`: steuert, ob die Lösung im Vorfeld angezeigt wird. Default: `false`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der jedes Mal aufgerufen wird, wenn sich die ausgewählte Antwort ändert; erhält als einziges Argument den Index der ausgewählten Frage (oder ein Array, falls die Frage vom Typ "Wähle alles, was zutrifft" ist). Default: `onChange(){}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, nachdem eine Antwort gesendet wurde. Default: `onSubmit(){}`.


## Beispiele

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
