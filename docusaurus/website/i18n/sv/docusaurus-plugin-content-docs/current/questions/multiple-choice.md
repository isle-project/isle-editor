---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

En ISLE-komponent som visar en flervalsfråga. Den stöder fall där eleven måste välja ett enda svar och när det kan finnas flera korrekta svar och alla korrekta svar måste väljas.

## Alternativ

* __question__ | `(string|node)`: den fråga som visas högst upp i flervalskomponenten. Default: `''`.
* __solution__ | `(number|array)`: Ett nummer som anger vilket svar som är rätt eller en "rad" med nummer för de rätta svaren om eleven ska kunna välja flera svar.. Default: `none`.
* __answers__ | `array (required)`: ett "array" av svarsobjekt. Varje svar bör vara ett objekt med fälten `content` och `explanation`, som anger det visade svarsalternativet och en förklaring som är synlig efter det att frågan har lämnats in för att förklara varför svaret är korrekt eller felaktigt.. Default: `none`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __disabled__ | `boolean`: kontrollerar om frågan är inaktiverad eller inte. Default: `false`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __provideFeedback__ | `string`: antingen `full`, `incremental` eller `none`. Om `full`, visas återkoppling inklusive det korrekta svaret efter att eleverna skickat in sina svar; om `incremental`, visas återkoppling endast för det valda svaret; om `none`, returneras ingen återkoppling.. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __displaySolution__ | `boolean`: styr om lösningen ska visas i förväg. Default: `false`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras varje gång det valda svaret ändras; tar emot indexet för den valda frågan som enda argument (eller en array om frågan är av typen "Välj alla som gäller").. Default: `onChange(){}`.
* __onSubmit__ | `function`: callback som aktiveras efter att ett svar har skickats in. Default: `onSubmit(){}`.


## Exempel

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
