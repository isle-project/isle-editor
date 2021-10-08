---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

O componentă ISLE care redă o întrebare cu alegere multiplă. Sprijină cazul în care cursantul trebuie să selecteze un singur răspuns și în cazul în care pot exista mai multe răspunsuri corecte și trebuie să le aleagă pe toate cele corecte.

## Opțiuni

* __question__ | `(string|node)`: întrebarea afișată în partea de sus a componentei cu alegere multiplă. Default: `''`.
* __solution__ | `(number|array)`: un număr care indică răspunsul corect sau un "tablou" de numere de răspunsuri corecte, în cazul în care elevul ar trebui să poată selecta mai multe răspunsuri.. Default: `none`.
* __answers__ | `array (required)`: un `array` de obiecte de răspuns. Fiecare răspuns trebuie să fie un obiect cu câmpurile `content` și `explanation`, care indică opțiunea de răspuns afișată și o explicație vizibilă după ce întrebarea a fost trimisă pentru a explica de ce răspunsul este corect sau incorect.. Default: `none`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __disabled__ | `boolean`: controlează dacă întrebarea este dezactivată. Default: `false`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __provideFeedback__ | `string`: fie `full`, `incremental`, fie `none`. Dacă este `full`, feedback-ul, inclusiv răspunsul corect, este afișat după ce cursanții își trimit răspunsurile; dacă este `incremental`, feedback-ul este afișat numai pentru răspunsul selectat; dacă este `none`, nu este returnat niciun feedback.. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __displaySolution__ | `boolean`: controlează dacă soluția este afișată în față. Default: `false`.
* __until__ | `Date`: timpul până la care elevii ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat de fiecare dată când se schimbă răspunsul selectat; primește ca unic argument indexul întrebării selectate (sau un array în cazul în care întrebarea este de tipul "Alege tot ce se aplică"). Default: `onChange(){}`.
* __onSubmit__ | `function`: callback invocat după trimiterea unui răspuns. Default: `onSubmit(){}`.


## Exemple

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
