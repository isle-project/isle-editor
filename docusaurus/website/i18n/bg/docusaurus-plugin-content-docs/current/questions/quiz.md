---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Компонент на викторина, показващ поредица от компоненти с въпроси.

## Опции

* __confidence__ | `boolean`: дали да се показва скала на Ликерт, която да задава доверието в отговора на потребителя. Default: `false`.
* __forceConfidence__ | `boolean`: контролира дали потребителят трябва да посочи ниво на доверие, преди да премине към следващия въпрос.. Default: `false`.
* __count__ | `number`: брой въпроси, които да включите във викторината. Default: `none`.
* __questions__ | `array (required)`: масив от въпроси, от които ще бъдат избрани въпроси на случаен принцип.. Default: `none`.
* __active__ | `boolean`: контролира дали таймерът за теста е активен.. Default: `true`.
* __duration__ | `number`: продължителност на теста (в минути); след изтичане на времето ще се покаже обобщаващата страница.. Default: `none`.
* __skippable__ | `boolean`: контролира дали въпросите във викторината могат да се прескачат.. Default: `true`.
* __footerNodes__ | `array`: масив от възли, които да се показват в долния колонтитул на всеки въпрос. Default: `[]`.
* __nextLabel__ | `string`: етикет на бутона за преминаване към следващия въпрос. Default: `none`.
* __provideFeedback__ | `boolean`: контролира дали да показва на учениците обратна връзка за верността на отговорите им след приключване на теста.. Default: `true`.
* __showFinishButton__ | `boolean`: контролира дали да се показва бутон за завършване на теста и директно преминаване към страницата с резултатите.. Default: `false`.
* __finishLabel__ | `string`: етикет на бутона за завършване на теста. Default: `none`.
* __downloadButton__ | `boolean`: контролира дали да се показва бутон за изтегляне на отговорите. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: обратна връзка, извикана при приключване на теста и показване на страницата с резултатите. Default: `onFinished() {}`.
* __onSubmit__ | `function`: обратна връзка, задействана, когато потребителят подаде отговор. Default: `onSubmit() {}`.


## Примери

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
