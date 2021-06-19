---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Jautājums, kurā lietotājam tiek prasīts augšupielādēt attēlu.

## Iespējas

* __question__ | `(string|node)`: jautājuma teksts. Default: `''`.
* __hintPlacement__ | `string`: mājienu izvietojums (`top`, `left`, `right` vai `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai pēc attēla iesniegšanas ir jāparādās paziņojumam.. Default: `false`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __sketchpad__ | `object`:  <Sketchpad /> komponentei nododamās īpašības; lai atveidotu skiču bloku, ievadiet vismaz tukšu objektu `{}`.. Default: `none`.
* __solution__ | `string`: modeļa risinājuma attēla URL. Default: `none`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad atbilde ir iesniegta; vienīgais parametrs ir `boolean`, kas norāda, vai elementi ir sakārtoti pareizā secībā.. Default: `onSubmit() {}`.


## Piemēri

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
