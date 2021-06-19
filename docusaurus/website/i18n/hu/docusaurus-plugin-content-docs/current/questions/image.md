---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Olyan kérdés, amely arra kéri a felhasználót, hogy töltsön fel egy képet.

## Opciók

* __question__ | `(string|node)`: a kérdés szövege. Default: `''`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __disableSubmitNotification__ | `boolean`: szabályozza, hogy a kép elküldése után megjelenjen-e egy értesítés. Default: `false`.
* __className__ | `string`: osztály neve. Default: `''`.
* __sketchpad__ | `object`: a <Sketchpad /> komponensnek átadandó tulajdonságok; a sketchpad megjelenítéséhez adjon át legalább egy üres objektumot `{}`.. Default: `none`.
* __solution__ | `string`: a modellmegoldás kép URL címe. Default: `none`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onSubmit__ | `function`: callback, amelyet a válasz elküldésekor hívnak meg; egyetlen paramétere egy "bóluszi", amely azt jelzi, hogy az elemek a helyes sorrendben lettek-e elhelyezve.. Default: `onSubmit() {}`.


## Példák

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
