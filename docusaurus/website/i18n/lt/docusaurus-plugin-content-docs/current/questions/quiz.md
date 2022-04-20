---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Viktorinos komponentas, kuriame rodoma klausimų komponentų seka.

## Parinktys

* __confidence__ | `boolean`: ar rodyti Likerto skalę, kurioje prašoma nurodyti naudotojo atsakymo patikimumą.. Default: `false`.
* __forceConfidence__ | `boolean`: kontroliuoja, ar prieš pereinant prie kito klausimo naudotojas turi nurodyti patikimumo lygį.. Default: `false`.
* __count__ | `number`: į viktoriną įtraukiamų klausimų skaičius. Default: `none`.
* __questions__ | `array (required)`: klausimų aibė, iš kurios atsitiktine tvarka bus atrenkami klausimai.. Default: `none`.
* __active__ | `boolean`: kontroliuoja, ar aktyvus viktorinos laikmatis.. Default: `true`.
* __duration__ | `number`: viktorinos trukmė (minutėmis); pasibaigus laikui, bus rodomas santraukos puslapis.. Default: `none`.
* __skippable__ | `boolean`: kontroliuoja, ar viktorinos klausimus galima praleisti.. Default: `true`.
* __footerNodes__ | `array`: mazgų, rodomų kiekvieno klausimo poraštėje, masyvas. Default: `[]`.
* __nextLabel__ | `string`: mygtuko, kuriuo pereinama prie kito klausimo, etiketė. Default: `none`.
* __provideFeedback__ | `boolean`: kontroliuoja, ar baigus viktoriną mokiniams rodyti grįžtamąjį ryšį apie jų atsakymų teisingumą.. Default: `true`.
* __showFinishButton__ | `boolean`: kontroliuoja, ar rodomas mygtukas baigti viktoriną ir pereiti tiesiai į rezultatų puslapį.. Default: `false`.
* __finishLabel__ | `string`: viktorinos užbaigimo mygtuko etiketė. Default: `none`.
* __downloadButton__ | `boolean`: kontroliuoja, ar rodyti atsakymų atsisiuntimo mygtuką.. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: atgalinis skambutis, inicijuojamas, kai viktorina baigiama ir rodomas rezultatų puslapis.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: atgalinis skambutis, iškviečiamas, kai naudotojas pateikia atsakymą.. Default: `onSubmit() {}`.


## Pavyzdžiai

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
