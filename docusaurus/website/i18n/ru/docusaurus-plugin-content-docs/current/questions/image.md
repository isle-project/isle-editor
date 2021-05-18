---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Вопрос, в котором пользователю предлагается загрузить изображение.

## Варианты

* __question__ | `(string|node)`: текст для вопроса. Default: `''`.
* __hintPlacement__ | `string`: размещение подсказок (или `top`, `left`, `right`, или `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: подсказки с рекомендациями, как ответить на вопрос. Default: `[]`.
* __feedback__ | `boolean`: управляет отображением кнопок обратной связи. Default: `true`.
* __chat__ | `boolean`: контролирует, должен ли элемент иметь встроенный чат. Default: `false`.
* __disableSubmitNotification__ | `boolean`: контролирует, должно ли уведомление отображаться после отправки изображения. Default: `false`.
* __className__ | `string`: название класса. Default: `''`.
* __sketchpad__ | `object`: свойства, которые должны быть переданы компоненту <Sketchpad />; чтобы отрисовать эскиз, передайте, по крайней мере, пустой объект `{}`. Default: `none`.
* __solution__ | `string`: URL-адрес изображения решения модели. Default: `none`.
* __until__ | `Date`: время до тех пор, пока студенты не смогут представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, полученных при градации. Default: `10`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSubmit__ | `function`: обратный вызов, вызываемый при отправке ответа; имеет в качестве единственного параметра `булеан`, указывающий, были ли элементы размещены в правильном порядке. Default: `onSubmit() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Sketchpad', value: 'witchSketchpad' },
        { label: 'Submit Plot', value: 'submitPlot' },
        { label: 'Solution', value: 'solution' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ImageQuestion question="You may upload an image." feedback={false}  />
```
</TabItem>

<TabItem value="witchSketchpad">

```jsx live
<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />
```

</TabItem>

<TabItem value="submitPlot">

```jsx live
<div>
  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />
  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />
</div>
```
</TabItem>

<TabItem value="solution">

```jsx live
<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter 'Gamma'." feedback={false} sketchpad={{ canvasHeight: 300}} />
```
</TabItem>

</Tabs>
