---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

ISLE-компонент, который задает вопрос о множественном выборе. Он поддерживает случай, когда учащийся должен выбрать один ответ, и когда может быть несколько правильных ответов, и все правильные ответы должны быть выбраны.

## Варианты

* __question__ | `(string|node)`: вопрос, отображаемый в верхней части компонента множественного выбора. Default: `''`.
* __solution__ | `(number|array)`: номер, обозначающий, какой ответ правильный, или `массив` правильных номеров ответов в случае, если учащийся должен иметь возможность выбрать несколько вариантов ответа. Default: `none`.
* __answers__ | `array (required)`: `массив` объектов ответа. Каждый ответ должен быть объектом с полями `Содержание` и `Пояснение`, которые обозначают отображаемый вариант ответа и объяснение, видимое после подачи вопроса, чтобы объяснить, почему ответ правильный или неправильный. Default: `none`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __disabled__ | `boolean`: контролирует, отключён ли вопрос. Default: `false`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __provideFeedback__ | `string`: либо `полный`, `инкрементальный`, либо `нет`. Если "полный", то отзыв, включая правильный ответ, отображается после того, как ученики представили свои ответы; если "инкрементальный", то отзыв отображается только для выбранного ответа; если "нет", то отзыв не возвращается. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __displaySolution__ | `boolean`: контролирует, отображается ли решение заранее. Default: `false`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: вызывается каждый раз при изменении выбранного ответа; получает индекс выбранного вопроса в качестве единственного аргумента (или массив в случае, если вопрос имеет тип "Выберите все, что применимо"). Default: `onChange(){}`.
* __onSubmit__ | `function`: обратный вызов после получения ответа. Default: `onSubmit(){}`.


## Примеры

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
