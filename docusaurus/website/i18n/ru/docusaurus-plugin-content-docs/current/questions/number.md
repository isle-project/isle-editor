---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Компонент вопроса с номером.

## Варианты

* __question__ | `(string|node)`: вопрос с номером. Default: `''`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __solution__ | `(number|array<number>)`: числовой ответ на проблему (или несколько правильных ответов, если поставляется массив). Default: `none`.
* __digits__ | `number`: количество цифр, для которых ответ, предоставленный студентом, должен совпадать с решением, чтобы считаться правильным. Установите значение 0 для поиска целого числа. Если установить значение null, будет выполняться поиск точного совпадения. Default: `3`.
* __max__ | `number`: максимально допустимая входная величина. Default: `null`.
* __min__ | `number`: минимально допустимое значение. Default: `null`.
* __defaultValue__ | `number`: предустановленное значение ввода числа. Default: `none`.
* __provideFeedback__ | `boolean`: указывает, следует ли отображать обратную связь, включая правильный ответ, после того, как учащиеся представят свои ответы. Default: `true`.
* __submitAfterFeedback__ | `boolean`: контролирует возможность повторной подачи заявки даже после того, как решение было найдено. Default: `false`.
* __nTries__ | `number`: после скольких попыток должна быть предоставлена обратная связь (если `подтвержденная обратная связь`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов, который срабатывает после изменения значения числового поля; получает текущее значение в качестве единственного аргумента. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратный вызов, вызываемый при отправке ответа; имеет в качестве первого параметра `булеан`, указывающий, был ли ответ правильным (если применимо, `нулеан` в противном случае), а в качестве второго параметра - ответ, который был отправлен. Default: `onSubmit() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
