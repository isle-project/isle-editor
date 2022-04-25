---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Компонент теста, отображающий последовательность компонентов вопроса.

## Варианты

* __confidence__ | `boolean`: отобразить ли шкалу Лайкерта, запрашивающую уверенность в ответе пользователя. Default: `false`.
* __forceConfidence__ | `boolean`: контролирует, должен ли пользователь предоставлять уровень уверенности перед переходом к следующему вопросу. Default: `false`.
* __count__ | `number`: количество вопросов для включения в викторину. Default: `none`.
* __questions__ | `array (required)`: массив вопросов, из которого вопросы будут выбраны случайным образом. Default: `none`.
* __active__ | `boolean`: контролирует, активен ли таймер викторины. Default: `true`.
* __duration__ | `number`: продолжительность теста (в минутах); по окончании теста на экране отобразится страница с итоговыми данными. Default: `none`.
* __skippable__ | `boolean`: контролирует, пропускаются ли вопросы в викторине. Default: `true`.
* __footerNodes__ | `array`: массив узлов для отображения в нижнем колонтитуле каждого вопроса. Default: `[]`.
* __nextLabel__ | `string`: ярлык кнопки, чтобы перейти к следующему вопросу. Default: `none`.
* __provideFeedback__ | `boolean`: контролирует, следует ли показывать ученикам отзывы о правильности их ответов после завершения теста. Default: `true`.
* __showFinishButton__ | `boolean`: управляет отображением кнопки для завершения теста и перехода непосредственно к странице результатов. Default: `false`.
* __finishLabel__ | `string`: ярлык кнопки завершения викторины. Default: `none`.
* __downloadButton__ | `boolean`: управляет отображением кнопки для загрузки ответов. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: вызов обратного вызова после завершения теста и отображения страницы результатов. Default: `onFinished() {}`.
* __onSubmit__ | `function`: обратный вызов, когда пользователь отправляет ответ. Default: `onSubmit() {}`.


## Примеры

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
