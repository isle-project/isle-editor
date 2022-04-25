---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Viktoriini komponent, mis kuvab küsimuste järjestust.

## Valikud

* __confidence__ | `boolean`: kas kuvada Likerti skaala, mis küsib kasutaja vastuse usaldusväärsust.. Default: `false`.
* __forceConfidence__ | `boolean`: kontrollib, kas kasutaja peab enne järgmisele küsimusele üleminekut esitama usaldusnivoo.. Default: `false`.
* __count__ | `number`: viktoriinis esitatavate küsimuste arv. Default: `none`.
* __questions__ | `array (required)`: küsimuste kogum, mille hulgast küsimused valitakse juhuslikult välja.. Default: `none`.
* __active__ | `boolean`: kontrollib, kas viktoriini taimer on aktiivne.. Default: `true`.
* __duration__ | `number`: viktoriini kestus (minutites); kui aeg on möödas, kuvatakse kokkuvõtte lehekülg.. Default: `none`.
* __skippable__ | `boolean`: kontrollib, kas viktoriini küsimusi saab vahele jätta.. Default: `true`.
* __footerNodes__ | `array`: iga küsimuse allosas kuvatavate sõlmede massiivi. Default: `[]`.
* __nextLabel__ | `string`: nupu silt järgmise küsimuse juurde liikumiseks. Default: `none`.
* __provideFeedback__ | `boolean`: kontrollib, kas pärast viktoriini lõpetamist näidatakse õpilastele tagasisidet nende vastuste õigsuse kohta.. Default: `true`.
* __showFinishButton__ | `boolean`: kontrollib, kas kuvada nuppu viktoriini lõpetamiseks ja otse tulemuste lehele hüppamiseks. Default: `false`.
* __finishLabel__ | `string`: viktoriini lõpetamise nupu silt. Default: `none`.
* __downloadButton__ | `boolean`: kontrollib, kas vastuste allalaadimise nuppu kuvatakse.. Default: `true`.
* __repeatable__ | `boolean`: kontrollib, kas viktoriini saab korrata. Default: `false`.
* __onFinished__ | `function`: callback, mida kutsutakse üles, kui viktoriin on lõppenud ja tulemuste lehekülg kuvatakse.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback, mida kutsutakse esile, kui kasutaja esitab vastuse. Default: `onSubmit() {}`.


## Näited

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
