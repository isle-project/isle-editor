---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Компонент вопроса заказа, который просит ученика привести коллекцию элементов в правильном порядке.

## Варианты

* __question__ | `(string|node)`: вопрос, для ответа на который ученик должен привести доступные "опции" в правильный порядок.. Default: `''`.
* __options__ | `array (required)`: массив текстов, которые учащийся должен внести в правильный заказ (предполагается, что это заказ на поставку).. Default: `none`.
* __provideFeedback__ | `boolean`: контролирует, показывать ли уведомление, отображающее правильность или неправильность представленного ответа. Default: `true`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __failureMsg__ | `string`: сообщение, которое будет отображаться, когда ученик ответит неправильно.. Default: `none`.
* __successMsg__ | `string`: сообщение, которое будет отображаться при отправке учеником правильного ответа.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов, который срабатывает после перетаскивания элемента; имеет два параметра: `булеан`, указывающий, были ли элементы размещены в правильном порядке, и `массив` с текущим порядком расположения элементов. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратный вызов, вызываемый при отправке ответа; имеет в качестве единственного параметра `булеан`, указывающий, были ли элементы размещены в правильном порядке. Default: `onSubmit() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
