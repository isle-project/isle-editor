---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Składnik ISLE, który stawia pytanie wielokrotnego wyboru. Wspiera on przypadek, gdy uczący się musi wybrać jedną odpowiedź i gdy może być wiele poprawnych odpowiedzi i wszystkie poprawne muszą być wybrane.

## Opcje

* __question__ | `(string|node)`: pytanie wyświetlane w górnej części elementu wielokrotnego wyboru. Default: `''`.
* __solution__ | `(number|array)`: liczba oznaczająca, która odpowiedź jest poprawna lub `liczba` poprawnych numerów odpowiedzi w przypadku, gdy uczący się powinien być w stanie wybrać wiele odpowiedzi. Default: `none`.
* __answers__ | `array (required)`: "szereg" obiektów odpowiedzi. Każda odpowiedź powinna być obiektem z polami "treść" i "wyjaśnienie", które oznaczają wyświetlaną opcję odpowiedzi oraz wyjaśnienie widoczne po zadaniu pytania, wyjaśniające dlaczego odpowiedź jest poprawna lub nieprawidłowa. Default: `none`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (na górze, na dole, w lewo, w prawo lub na dole). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __disabled__ | `boolean`: kontroluje, czy dana kwestia jest wyłączona. Default: `false`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __provideFeedback__ | `string`: albo `pełne`, `skoroczne`, albo `żadne`. Jeśli `pełne`, informacja zwrotna zawierająca poprawną odpowiedź jest wyświetlana po udzieleniu odpowiedzi przez uczącego się; jeśli `inkrementalna`, informacja zwrotna jest wyświetlana tylko dla wybranej odpowiedzi; jeśli `nie`, informacja zwrotna nie jest zwracana. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __displaySolution__ | `boolean`: kontroluje, czy rozwiązanie jest wyświetlane z góry. Default: `false`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne wywoływane przy każdej zmianie wybranej odpowiedzi; otrzymuje indeks wybranego pytania jako jego jedyny argument (lub tablicę w przypadku, gdy pytanie jest typu "Wybierz wszystko, co dotyczy"). Default: `onChange(){}`.
* __onSubmit__ | `function`: wywołanie zwrotne po udzieleniu odpowiedzi. Default: `onSubmit(){}`.


## Przykłady

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
