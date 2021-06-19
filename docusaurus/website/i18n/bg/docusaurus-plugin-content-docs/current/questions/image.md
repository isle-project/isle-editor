---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Въпрос, който изисква от потребителя да качи изображение.

## Опции

* __question__ | `(string|node)`: текст на въпроса. Default: `''`.
* __hintPlacement__ | `string`: разположение на подсказките (или `top`, `right`, `left`, или `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: указания за това как да отговорите на въпроса. Default: `[]`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __disableSubmitNotification__ | `boolean`: контролира дали да се показва известие след изпращане на изображение. Default: `false`.
* __className__ | `string`: име на класа. Default: `''`.
* __sketchpad__ | `object`: свойства, които да бъдат предадени на компонента <Sketchpad />; за да визуализирате скицника, подайте поне празен обект `{}`. Default: `none`.
* __solution__ | `string`: URL адрес на изображението на решението на модела. Default: `none`.
* __until__ | `Date`: времето, до което учениците трябва да могат да подават отговори. Default: `none`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onSubmit__ | `function`: обратна връзка, задействана при изпращане на отговора; единственият параметър е `boolean`, който показва дали елементите са поставени в правилен ред. Default: `onSubmit() {}`.


## Примери

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
