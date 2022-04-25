---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

En frågesportskomponent som visar en sekvens av frågekomponenter.

## Alternativ

* __confidence__ | `boolean`: om en Likertskala ska visas där man frågar efter hur säker användarens svar är.. Default: `false`.
* __forceConfidence__ | `boolean`: styr om användaren måste ange en konfidensnivå innan han eller hon går vidare till nästa fråga.. Default: `false`.
* __count__ | `number`: antal frågor som ska ingå i frågesporten. Default: `none`.
* __questions__ | `array (required)`: En rad frågor från vilka frågorna väljs ut slumpmässigt.. Default: `none`.
* __active__ | `boolean`: kontrollerar om timern för frågesporten är aktiv. Default: `true`.
* __duration__ | `number`: frågesportens längd (i minuter); när tiden är slut visas en sammanfattningssida.. Default: `none`.
* __skippable__ | `boolean`: kontrollerar om frågorna i frågesporten kan hoppas över.. Default: `true`.
* __footerNodes__ | `array`: matris med noder som ska visas i sidfoten för varje fråga.. Default: `[]`.
* __nextLabel__ | `string`: Etikett på knappen för att gå vidare till nästa fråga.. Default: `none`.
* __provideFeedback__ | `boolean`: kontrollerar om eleverna ska få feedback om hur korrekta deras svar är efter avslutad frågesport. Default: `true`.
* __showFinishButton__ | `boolean`: Kontrollerar om det ska visas en knapp för att avsluta frågesporten och gå direkt till resultatsidan.. Default: `false`.
* __finishLabel__ | `string`: etiketten på knappen för att avsluta frågesporten. Default: `none`.
* __downloadButton__ | `boolean`: Kontrollerar om en knapp för att ladda ner svaren ska visas.. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: callback som aktiveras när frågesporten är avslutad och resultatsidan visas.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback som aktiveras när användaren lämnar in ett svar. Default: `onSubmit() {}`.


## Exempel

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
