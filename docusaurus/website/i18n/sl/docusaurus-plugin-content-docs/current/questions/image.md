---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Vprašanje, ki od uporabnika zahteva, da naloži sliko.

## Možnosti

* __question__ | `(string|node)`: besedilo za vprašanje. Default: `''`.
* __hintPlacement__ | `string`: umestitev namigov (`zgoraj`, `levo`, `desno` ali `spodaj`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali naj se po predložitvi slike prikaže obvestilo.. Default: `false`.
* __className__ | `string`: ime razreda. Default: `''`.
* __sketchpad__ | `object`: lastnosti, ki se posredujejo komponenti <Sketchpad />; če želite izrisati skico, posredujete vsaj prazen objekt `{}`. Default: `none`.
* __solution__ | `string`: URL slike vzorčne rešitve. Default: `none`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži ob oddaji odgovora; edini parameter je `boolean`, ki označuje, ali so bili elementi postavljeni v pravilnem vrstnem redu. Default: `onSubmit() {}`.


## Primeri

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
