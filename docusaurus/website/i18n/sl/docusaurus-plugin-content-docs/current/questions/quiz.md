---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Komponenta kviza, ki prikazuje zaporedje komponent z vprašanji.

## Možnosti

* __confidence__ | `boolean`: ali naj se prikaže Likertova lestvica z vprašanjem o zanesljivosti uporabnikovega odgovora.. Default: `false`.
* __forceConfidence__ | `boolean`: določa, ali mora uporabnik navesti stopnjo zaupanja, preden preide na naslednje vprašanje.. Default: `false`.
* __count__ | `number`: število vprašanj, ki jih želite vključiti v kviz.. Default: `none`.
* __questions__ | `array (required)`: nabor vprašanj, iz katerega bodo naključno izbrana vprašanja.. Default: `none`.
* __active__ | `boolean`: nadzoruje, ali je aktivni časovnik za kviz.. Default: `true`.
* __duration__ | `number`: trajanje kviza (v minutah); po izteku časa se prikaže stran s povzetkom.. Default: `none`.
* __skippable__ | `boolean`: nadzoruje, ali je vprašanja v kvizu mogoče preskočiti.. Default: `true`.
* __footerNodes__ | `array`: polje vozlišč, ki se prikažejo v nogi vsakega vprašanja. Default: `[]`.
* __nextLabel__ | `string`: oznaka gumba za prehod na naslednje vprašanje. Default: `none`.
* __provideFeedback__ | `boolean`: nadzoruje, ali naj se učencem po zaključku kviza prikažejo povratne informacije o pravilnosti odgovorov.. Default: `true`.
* __showFinishButton__ | `boolean`: nadzoruje, ali se prikaže gumb za dokončanje kviza in skok neposredno na stran z rezultati.. Default: `false`.
* __finishLabel__ | `string`: oznaka gumba za dokončanje kviza. Default: `none`.
* __downloadButton__ | `boolean`: nadzoruje, ali se prikaže gumb za prenos odgovorov.. Default: `true`.
* __repeatable__ | `boolean`: nadzoruje, ali se kviz lahko ponovi.. Default: `false`.
* __onFinished__ | `function`: povratni klic, ki se sproži, ko je kviz končan in se prikaže stran z rezultati.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži, ko uporabnik odda odgovor. Default: `onSubmit() {}`.


## Primeri

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
