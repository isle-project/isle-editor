---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Egy ISLE komponens, amely egy feleletválasztós kérdést jelenít meg. Támogatja azt az esetet, amikor a tanulónak egyetlen választ kell kiválasztania, illetve amikor több helyes válasz is létezik, és az összes helyes választ ki kell választani.

## Opciók

* __question__ | `(string|node)`: a feleletválasztós komponens tetején megjelenő kérdés. Default: `''`.
* __solution__ | `(number|array)`: a helyes választ jelölő szám, vagy a helyes válaszok számainak "sorozata", ha a tanulónak több választ is ki kell tudnia választani.. Default: `none`.
* __answers__ | `array (required)`: a válaszobjektumok "tömbje". Minden válasznak egy objektumnak kell lennie, amelynek `tartalom` és `magyarázat` mezői jelölik a megjelenített válaszlehetőséget és a kérdés elküldése után látható magyarázatot, amely megmagyarázza, hogy a válasz miért helyes vagy helytelen.. Default: `none`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __disabled__ | `boolean`: ellenőrzi, hogy a kérdés ki van-e kapcsolva. Default: `false`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __provideFeedback__ | `string`: vagy "teljes", "inkrementális", vagy "nincs". Ha "teljes", akkor a helyes választ tartalmazó visszajelzés jelenik meg, miután a tanulók elküldték a válaszukat; ha "inkrementális", akkor csak a kiválasztott válaszra vonatkozóan jelenik meg visszajelzés; ha "nincs", akkor nem kap visszajelzést.. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __displaySolution__ | `boolean`: szabályozza, hogy a megoldás előre megjelenjen-e. Default: `false`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: callback, amely minden alkalommal meghívódik, amikor a kiválasztott válasz megváltozik; egyetlen argumentumként a kiválasztott kérdés indexét kapja (vagy egy tömböt, ha a kérdés "Choose all that apply" típusú).. Default: `onChange(){}`.
* __onSubmit__ | `function`: callback a válasz elküldése után. Default: `onSubmit(){}`.


## Példák

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
