---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

ISLE-компонент, который задает вопрос, в котором учащийся должен правильно сопоставить элементы из двух списков друг с другом.

## Варианты

* __question__ | `(string|node)`: вопрос, который будет отображаться в верхней части компонента списка совпадений. Default: `''`.
* __elements__ | `array<{a,b}>`: `массив`, удерживающий правильные пары, отображаемые в верхней части компонента вопроса со свободным текстом. Каждый элемент `массива` должен быть `объектом` со свойствами `a` и `b`; снабжайте элементы только свойствами `a` или `b` для добавления отвлекающих ответов. Default: `[]`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __provideFeedback__ | `boolean`: указывает, должно ли решение быть доступным после того, как учащиеся представят свои ответы. Default: `true`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __colorScale__ | `array`: если установлено, то для плитки используются поставляемые цвета. Default: `none`.
* __shuffle__ | `string`: определяет, следует ли перетасовывать колонки `лево`, `право` или `зубь`, элементы которых должны быть согласованы; не подавать `нет` или любое другое значение, чтобы не перетасовывать элементы с обеих сторон (может быть полезно в случае отсутствия решения). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __submissionMsg__ | `string`: уведомление, отображаемое при первой отправке учащимся ответа. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: уведомление, отображаемое для всех представлений после первого. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратный вызов, когда студенты подают ответ. Default: `onSubmit() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
