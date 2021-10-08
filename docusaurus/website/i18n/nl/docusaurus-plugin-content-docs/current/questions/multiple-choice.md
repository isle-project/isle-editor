---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Een ISLE-component die een meerkeuzevraag maakt. Het ondersteunt het geval waarin de leerling een enkel antwoord moet selecteren en wanneer er mogelijk meerdere juiste antwoorden zijn en alle juiste antwoorden moeten worden gekozen.

## Opties

* __question__ | `(string|node)`: de vraag die bovenaan de meerkeuzecomponent wordt getoond. Default: `''`.
* __solution__ | `(number|array)`: nummer dat aangeeft welk antwoord juist is of een 'raster' van de juiste antwoordnummers voor het geval de cursist meerdere antwoorden zou moeten kunnen selecteren. Default: `none`.
* __answers__ | `array (required)`: een `oproep` van antwoord-objecten. Elk antwoord moet een object zijn met `content` en `explanatie` velden, die de getoonde antwoordoptie aangeven en een uitleg die zichtbaar is nadat de vraag is ingediend om uit te leggen waarom het antwoord juist of onjuist is. Default: `none`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __disabled__ | `boolean`: controleert of de vraag is uitgeschakeld. Default: `false`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __provideFeedback__ | `string`: ofwel `volledig`, `incrementeel`, of `één`. Als `volledig`, wordt de feedback inclusief het juiste antwoord weergegeven nadat de leerlingen hun antwoorden hebben ingediend; als `incrementeel`, wordt de feedback alleen voor het geselecteerde antwoord weergegeven; als `geen`, wordt er geen feedback teruggegeven. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __displaySolution__ | `boolean`: controleert of de oplossing van tevoren wordt weergegeven. Default: `false`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback aangeroepen telkens als het geselecteerde antwoord verandert; ontvangt de index van de geselecteerde vraag als enige argument (of een matrix in het geval de vraag van het type "Kies alles wat van toepassing is" is). Default: `onChange(){}`.
* __onSubmit__ | `function`: terugbellen na het indienen van een antwoord. Default: `onSubmit(){}`.


## Voorbeelden

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
