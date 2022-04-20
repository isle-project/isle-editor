---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Kérdéskomponensek sorozatát megjelenítő kvízkomponens.

## Opciók

* __confidence__ | `boolean`: megjelenít-e egy Likert-skálát, amely a felhasználó válaszának bizalmasságát kérdezi meg. Default: `false`.
* __forceConfidence__ | `boolean`: szabályozza, hogy a felhasználónak meg kell-e adnia egy bizalmi szintet, mielőtt a következő kérdésre lépne.. Default: `false`.
* __count__ | `number`: a kvízben szereplő kérdések száma. Default: `none`.
* __questions__ | `array (required)`: kérdéssor, amelyből a kérdések véletlenszerűen kerülnek kiválasztásra. Default: `none`.
* __active__ | `boolean`: szabályozza, hogy a kvíz időzítője aktív-e. Default: `true`.
* __duration__ | `number`: a kvíz időtartama (percben); az idő letelte után az összefoglaló oldal jelenik meg.. Default: `none`.
* __skippable__ | `boolean`: szabályozza, hogy a kvíz kérdései kihagyhatóak legyenek-e. Default: `true`.
* __footerNodes__ | `array`: az egyes kérdések láblécében megjelenítendő csomópontok tömbje. Default: `[]`.
* __nextLabel__ | `string`: a következő kérdésre való továbblépés gombjának címkéje. Default: `none`.
* __provideFeedback__ | `boolean`: szabályozza, hogy a kvíz befejezése után visszajelzést mutasson-e a diákoknak a válaszok helyességéről.. Default: `true`.
* __showFinishButton__ | `boolean`: szabályozza, hogy megjelenjen-e a kvíz befejezéséhez és az eredményoldalra való közvetlen ugráshoz szükséges gomb. Default: `false`.
* __finishLabel__ | `string`: a kvíz befejezéséhez szükséges gomb címkéje. Default: `none`.
* __downloadButton__ | `boolean`: szabályozza, hogy megjelenjen-e egy gomb a válaszok letöltéséhez. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: callback, amely akkor hívódik, amikor a kvíz befejeződik és az eredményoldal megjelenik. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback hívás, amikor a felhasználó elküldi a választ. Default: `onSubmit() {}`.


## Példák

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
