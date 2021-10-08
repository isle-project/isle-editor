---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

ISLE komponentas, kuris atvaizduoja daugkartinio pasirinkimo klausimą. Jis palaiko atvejus, kai besimokantysis turi pasirinkti vieną atsakymą ir kai gali būti keli teisingi atsakymai ir reikia pasirinkti visus teisingus atsakymus.

## Parinktys

* __question__ | `(string|node)`: klausimas, rodomas kelių pasirinkimų komponento viršuje.. Default: `''`.
* __solution__ | `(number|array)`: skaičius, žymintis teisingą atsakymą, arba teisingų atsakymų skaičių masyvas, jei mokinys gali pasirinkti kelis atsakymus.. Default: `none`.
* __answers__ | `array (required)`: atsakymų objektų `dėžė`. Kiekvienas atsakymas turėtų būti objektas su `turinio` ir `paaiškinimo` laukais, kurie žymi rodomą atsakymo variantą ir paaiškinimą, matomą pateikus klausimą, paaiškinantį, kodėl atsakymas yra teisingas arba neteisingas.. Default: `none`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __disabled__ | `boolean`: kontroliuoja, ar klausimas yra išjungtas.. Default: `false`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __provideFeedback__ | `string`: arba `pilnas`, arba `inkrementinis`, arba `vienas`. Jei `full`, mokiniams pateikus atsakymus rodomas grįžtamasis ryšys, įskaitant teisingą atsakymą; jei `incremental`, rodomas tik pasirinkto atsakymo grįžtamasis ryšys; jei `none`, grįžtamasis ryšys negrąžinamas.. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar išjungti pranešimus apie pateikimą.. Default: `false`.
* __displaySolution__ | `boolean`: kontroliuoja, ar sprendimas rodomas iš anksto.. Default: `false`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: grįžtamasis iškvietimas, inicijuojamas kiekvieną kartą, kai pasikeičia pasirinktas atsakymas; vienintelis argumentas - pasirinkto klausimo indeksas (arba masyvas, jei klausimas yra tipo "Choose all that apply").. Default: `onChange(){}`.
* __onSubmit__ | `function`: grįžtamasis ryšys, inicijuojamas pateikus atsakymą.. Default: `onSubmit(){}`.


## Pavyzdžiai

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
