---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Viktorīnas komponents, kurā tiek rādīta jautājumu komponentu secība.

## Iespējas

* __confidence__ | `boolean`: vai rādīt Likerta skalu, kurā jānorāda lietotāja atbildes ticamība.. Default: `false`.
* __forceConfidence__ | `boolean`: kontrolē, vai lietotājam ir jānorāda ticamības līmenis, pirms pāriet pie nākamā jautājuma.. Default: `false`.
* __count__ | `number`: viktorīnā iekļaujamo jautājumu skaits. Default: `none`.
* __questions__ | `array (required)`: jautājumu masīvs, no kura jautājumi tiks atlasīti pēc nejaušības principa.. Default: `none`.
* __active__ | `boolean`: kontrolē, vai viktorīnas taimeris ir aktīvs.. Default: `true`.
* __duration__ | `number`: viktorīnas ilgums (minūtēs); kad laiks būs beidzies, tiks parādīta kopsavilkuma lapa.. Default: `none`.
* __skippable__ | `boolean`: kontrolē, vai viktorīnas jautājumus var izlaist.. Default: `true`.
* __footerNodes__ | `array`: mezglu masīvs, kas jāattēlo katra jautājuma pēdiņā.. Default: `[]`.
* __nextLabel__ | `string`: pogas etiķete, lai pārietu uz nākamo jautājumu. Default: `none`.
* __provideFeedback__ | `boolean`: kontrolē, vai pēc viktorīnas pabeigšanas skolēniem parādīt atgriezenisko saiti par atbilžu pareizību.. Default: `true`.
* __showFinishButton__ | `boolean`: kontrolē, vai tiek rādīta poga, lai pabeigtu viktorīnu un pārietu tieši uz rezultātu lapu.. Default: `false`.
* __finishLabel__ | `string`: pogas etiķete, lai pabeigtu viktorīnu. Default: `none`.
* __downloadButton__ | `boolean`: kontrolē, vai tiek rādīta poga atbilžu lejupielādei.. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: atsauces zvans, kas tiek izsaukts, kad viktorīna ir pabeigta un tiek parādīta rezultātu lapa.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad lietotājs iesniedz atbildi.. Default: `onSubmit() {}`.


## Piemēri

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
