---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Вопрос с ответом, состоящим из нескольких квадратов.

## Варианты

* __question__ | `(string|node)`: вопрос, который будет отображаться в верхней части матрицы выбранного вопроса. Default: `''`.
* __rows__ | `array`: строчные метки. Default: `[]`.
* __cols__ | `array`: ярлыки столбцов. Default: `[]`.
* __options__ | `object`: объект с парами ключ-значение с ключами, имеющими форму `row:col`, например `0:0`, `0:1`, `1:0` и т.д., и соответствующими им значениями, являющимися массивами возможных вариантов ответа на отдельные выбранные вопросы. Default: `{}`.
* __solution__ | `object`: объект решения с парами ключ-значение с ключами, имеющими форму `row:col`, например, `0:0`, `0:1`, `1:0` и т.д., и соответствующими им значениями, являющимися индексом правильного элемента ответа из соответствующего массива `options`. Default: `{}`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __provideFeedback__ | `string`: предоставлять ли вообще "нет" обратной связи, "индивидуальную" обратную связь по представленным ответам, или "обратную связь в устной форме" по всем вопросам. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: разрешать ли подачу заявок без выбора, сделанного в каждом поле выбора. Default: `false`.
* __nTries__ | `number`: после скольких попыток никакие дальнейшие ответы не принимаются (если `Ответы на запрос` не `нет`). Default: `3`.
* __failureMsg__ | `string`: текст уведомления, отображаемый при подаче неправильных ответов. Default: `none`.
* __successMsg__ | `string`: текст уведомления, отображаемый при предоставлении правильных ответов. Default: `none`.
* __cellLabels__ | `object`: метки для ячеек, определенных объектом, с ключами, имеющими формат `row:col`. Default: `{}`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __panelProps__ | `object`: дополнительные свойства, передаваемые внешнему компоненту <Panel />.. Default: `{}`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSubmit__ | `function`: функция обратного вызова, вызываемая при отправке с ответами в качестве первого и булевым указателем корректности в качестве второго параметра. Default: `onSubmit() {}`.


## Примеры


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

