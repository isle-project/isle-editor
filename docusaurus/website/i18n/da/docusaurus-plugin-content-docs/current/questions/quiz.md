---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

En quiz-komponent, der viser en sekvens af spørgsmålskomponenter.

## Indstillinger

* __confidence__ | `boolean`: om der skal vises en Likert-skala, hvor der spørges til brugerens tillid til sit svar. Default: `false`.
* __forceConfidence__ | `boolean`: styrer, om brugeren skal angive et konfidensniveau, før han/hun går videre til det næste spørgsmål. Default: `false`.
* __count__ | `number`: antallet af spørgsmål, der skal indgå i quizzen. Default: `none`.
* __questions__ | `array (required)`: en række spørgsmål, hvorfra spørgsmålene udvælges tilfældigt. Default: `none`.
* __active__ | `boolean`: styrer, om timeren for quizzen er aktiv. Default: `true`.
* __duration__ | `number`: quizens varighed (i minutter); når tiden er gået, vises oversigtssiden. Default: `none`.
* __skippable__ | `boolean`: styrer, om spørgsmålene i quizzen kan springes over. Default: `true`.
* __footerNodes__ | `array`: array af knuder, der skal vises i bunden af hvert spørgsmål. Default: `[]`.
* __nextLabel__ | `string`: mærket på knappen til at gå videre til næste spørgsmål. Default: `none`.
* __provideFeedback__ | `boolean`: styrer, om eleverne skal have feedback om korrektheden af deres svar efter afslutningen af quizzen. Default: `true`.
* __showFinishButton__ | `boolean`: styrer, om der skal vises en knap for at afslutte quizzen og gå direkte til resultatsiden. Default: `false`.
* __finishLabel__ | `string`: etiketten på knappen for at afslutte quiz. Default: `none`.
* __downloadButton__ | `boolean`: styrer, om der skal vises en knap til downloading af svarene. Default: `true`.
* __repeatable__ | `boolean`: kontrollerer, om quizzen kan gentages. Default: `false`.
* __onFinished__ | `function`: callback, der påkaldes, når quizzen er afsluttet, og resultatsiden vises. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når brugeren afgiver et svar. Default: `onSubmit() {}`.


## Eksempler

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
