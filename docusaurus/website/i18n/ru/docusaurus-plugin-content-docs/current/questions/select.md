---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Компонент "Выбор вопроса".

## Варианты

* __question__ | `(string|node)`: вопрос, для которого ученик должен выбрать один из доступных вариантов ответа. Default: `''`.
* __options__ | `array (required)`: доступные варианты ответов, из которых ученик может выбрать. Default: `none`.
* __solution__ | `number`: индекс растворяющего элемента в `вариантах`. Default: `none`.
* __preselected__ | `number`: индекс предварительно выбранного варианта ответа. Default: `0`.
* __inline__ | `boolean`: контролирует, будет ли компонент выводиться в линию или нет. Default: `false`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __provideFeedback__ | `boolean`: указывает, следует ли отображать обратную связь, включая правильный ответ, после того, как учащиеся представят свои ответы. Default: `true`.
* __failureMsg__ | `string`: сообщение, которое будет отображаться, когда ученик выберет неправильный ответ. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: сообщение, которое будет отображаться, когда ученик выберет правильный ответ. Default: `'That's the correct answer!'`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов, который срабатывает после действия "Предъявить". Default: `onChange() {}`.
* __onSubmit__ | `function`: обратный вызов, вызываемый при отправке ответа; имеет в качестве первого параметра `булеан`, указывающий, был ли ответ правильным (если применимо, `нулеан` в противном случае), а в качестве второго параметра - ответ, который был отправлен. Default: `onSubmit() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
