---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Otázka, ktorá žiada používateľa, aby nahral obrázok.

## Možnosti

* __question__ | `(string|node)`: text otázky. Default: `''`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `hore`, `vľavo`, `vpravo` alebo `spodku`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa má po odoslaní obrázka zobraziť oznámenie.. Default: `false`.
* __className__ | `string`: názov triedy. Default: `''`.
* __sketchpad__ | `object`: vlastnosti, ktoré sa majú odovzdať komponentu <Sketchpad />; ak chcete vykresliť skicár, odovzdajte aspoň prázdny objekt `{}`. Default: `none`.
* __solution__ | `string`: URL adresa obrázka modelového riešenia. Default: `none`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede; ako jediný parameter má `boolean`, ktorý udáva, či boli prvky umiestnené v správnom poradí. Default: `onSubmit() {}`.


## Príklady

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
