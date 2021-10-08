---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

ISLE-komponentti, joka renderöi monivalintakysymyksen. Se tukee tapauksia, joissa oppijan on valittava yksi vastaus, ja tapauksia, joissa oikeita vastauksia voi olla useita ja kaikki oikeat vastaukset on valittava.

## Vaihtoehdot

* __question__ | `(string|node)`: monivalintakomponentin yläosassa näkyvä kysymys.. Default: `''`.
* __solution__ | `(number|array)`: numero, joka osoittaa, mikä vastaus on oikea, tai oikeiden vastausnumeroiden "joukko", jos oppijan pitäisi pystyä valitsemaan useita vastauksia.. Default: `none`.
* __answers__ | `array (required)`: vastausobjektien joukko. Jokaisen vastauksen tulisi olla objekti, jossa on `content`- ja `explanation`-kentät, jotka ilmaisevat näytettävän vastausvaihtoehdon ja selityksen, joka näkyy kysymyksen lähettämisen jälkeen ja selittää, miksi vastaus on oikea tai väärä.. Default: `none`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __disabled__ | `boolean`: valvoo, onko kysymys poistettu käytöstä. Default: `false`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __provideFeedback__ | `string`: joko "full", "incremental" tai "noone". Jos `full`, palaute, joka sisältää oikean vastauksen, näytetään sen jälkeen, kun oppijat ovat lähettäneet vastauksensa; jos `incremental`, palaute näytetään vain valitusta vastauksesta; jos `none`, palautetta ei palauteta.. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __displaySolution__ | `boolean`: ohjaa, näytetäänkö ratkaisu etukäteen. Default: `false`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy aina kun valittu vastaus muuttuu; saa ainoana argumenttinaan valitun kysymyksen indeksin (tai array:n, jos kysymys on tyyppiä "Valitse kaikki soveltuvat").. Default: `onChange(){}`.
* __onSubmit__ | `function`: callback, jota kutsutaan vastauksen lähettämisen jälkeen. Default: `onSubmit(){}`.


## Esimerkkejä

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
