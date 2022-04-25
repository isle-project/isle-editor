---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Komponenta kvízu zobrazující posloupnost komponent s otázkami.

## Možnosti

* __confidence__ | `boolean`: zda zobrazit Likertovu stupnici s dotazem na důvěryhodnost odpovědi uživatele.. Default: `false`.
* __forceConfidence__ | `boolean`: řídí, zda musí uživatel před přechodem na další otázku zadat úroveň důvěryhodnosti.. Default: `false`.
* __count__ | `number`: počet otázek v kvízu. Default: `none`.
* __questions__ | `array (required)`: sada otázek, z nichž budou náhodně vybrány otázky.. Default: `none`.
* __active__ | `boolean`: řídí, zda je aktivní časovač kvízu.. Default: `true`.
* __duration__ | `number`: doba trvání kvízu (v minutách); po uplynutí času se zobrazí souhrnná stránka.. Default: `none`.
* __skippable__ | `boolean`: kontroluje, zda lze otázky v kvízu přeskočit.. Default: `true`.
* __footerNodes__ | `array`: pole uzlů, které se mají zobrazit v zápatí každé otázky.. Default: `[]`.
* __nextLabel__ | `string`: označení tlačítka pro přechod na další otázku. Default: `none`.
* __provideFeedback__ | `boolean`: kontroluje, zda se má studentům po dokončení kvízu zobrazit zpětná vazba o správnosti jejich odpovědí.. Default: `true`.
* __showFinishButton__ | `boolean`: kontroluje, zda se má zobrazit tlačítko pro dokončení kvízu a přímý přechod na stránku s výsledky.. Default: `false`.
* __finishLabel__ | `string`: označení tlačítka pro dokončení kvízu. Default: `none`.
* __downloadButton__ | `boolean`: řídí, zda se má zobrazit tlačítko pro stažení odpovědí.. Default: `true`.
* __repeatable__ | `boolean`: kontroluje, zda lze kvíz opakovat.. Default: `false`.
* __onFinished__ | `function`: zpětné volání vyvolané po dokončení kvízu a zobrazení stránky s výsledky.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané při odeslání odpovědi uživatelem. Default: `onSubmit() {}`.


## Příklady

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
