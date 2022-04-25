---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Компонент вопроса диапазона, который предлагает ученикам поставить нижнюю и верхнюю конечную точку.

## Варианты

* __question__ | `(string|node)`: отображаемый вопрос. Default: `''`.
* __solution__ | `array<number>`: двухэлементный массив, содержащий конечные точки правильного диапазона. Default: `none`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __labels__ | `array`: двухэлементный массив пользовательских меток, кроме "Нижний" и "Верхний". Default: `none`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __digits__ | `number`: количество цифр, которые должны совпадать между решением и ответом, предоставленным пользователем. Если не задано или установлено нулевое значение, компонент проверяет строгое равенство. Если установлено в 0, то проверяется целое равенство. Default: `3`.
* __max__ | `number`: максимальная входная величина. Default: `null`.
* __min__ | `number`: минимальная входная величина. Default: `null`.
* __provideFeedback__ | `boolean`: указывает, следует ли отображать обратную связь, включая правильный ответ, после того, как учащиеся представят свои ответы. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: контролирует, можно ли представить несколько ответов. Default: `false`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChangeLower__ | `function`: обратный вызов, срабатывающий после изменения нижней границы пользователем. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: обратный вызов, срабатывающий после изменения пользователем верхней границы. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: обратный вызов, срабатывающий после изменения границы пользователем (с нижней и верхней границей в качестве аргументов). Default: `onChange() {}`.
* __onSubmit__ | `function`: обратный вызов, вызываемый при отправке ответа; имеет в качестве первого параметра `булеан`, указывающий, был ли ответ правильным (если применимо, `нулеан` в противном случае), а в качестве второго параметра - ответ, который был отправлен. Default: `onSubmit() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
