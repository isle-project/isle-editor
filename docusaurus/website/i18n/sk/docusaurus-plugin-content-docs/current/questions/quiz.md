---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Komponent kvízu zobrazujúci postupnosť komponentov otázok.

## Možnosti

* __confidence__ | `boolean`: či sa má zobraziť Likertova škála s otázkou o dôveryhodnosti odpovede používateľa. Default: `false`.
* __forceConfidence__ | `boolean`: kontroluje, či musí používateľ pred prechodom na ďalšiu otázku zadať úroveň dôveryhodnosti.. Default: `false`.
* __count__ | `number`: počet otázok v kvíze. Default: `none`.
* __questions__ | `array (required)`: súbor otázok, z ktorých sa náhodne vyberú otázky.. Default: `none`.
* __active__ | `boolean`: kontroluje, či je časovač pre kvíz aktívny.. Default: `true`.
* __duration__ | `number`: trvanie kvízu (v minútach); po uplynutí času sa zobrazí súhrnná stránka.. Default: `none`.
* __skippable__ | `boolean`: kontroluje, či je možné otázky v kvíze preskočiť.. Default: `true`.
* __footerNodes__ | `array`: pole uzlov, ktoré sa majú zobraziť v pätičke každej otázky. Default: `[]`.
* __nextLabel__ | `string`: označenie tlačidla na prechod na ďalšiu otázku. Default: `none`.
* __provideFeedback__ | `boolean`: kontroluje, či sa má študentom po dokončení kvízu zobraziť spätná väzba o správnosti ich odpovedí.. Default: `true`.
* __showFinishButton__ | `boolean`: kontroluje, či sa má zobraziť tlačidlo na ukončenie kvízu a priamy prechod na stránku s výsledkami.. Default: `false`.
* __finishLabel__ | `string`: označenie tlačidla na dokončenie kvízu. Default: `none`.
* __downloadButton__ | `boolean`: kontroluje, či sa má zobraziť tlačidlo na stiahnutie odpovedí.. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: spätné volanie vyvolané po dokončení kvízu a zobrazení stránky s výsledkami. Default: `onFinished() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané, keď používateľ odošle odpoveď. Default: `onSubmit() {}`.


## Príklady

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
