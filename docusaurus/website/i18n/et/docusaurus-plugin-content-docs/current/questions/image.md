---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Küsimus, milles palutakse kasutajal laadida üles pilt.

## Valikud

* __question__ | `(string|node)`: küsimuse tekst. Default: `''`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas pärast pildi esitamist peaks ilmuma teade. Default: `false`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __sketchpad__ | `object`: omadused, mis tuleb edastada komponendile <Sketchpad />; sketchpad'i renderdamiseks tuleb edastada vähemalt tühi objekt `{}`.. Default: `none`.
* __solution__ | `string`: mudellahenduse pildi URL. Default: `none`.
* __until__ | `Date`: aega, kuni õpilastel peaks olema lubatud vastuseid esitada. Default: `none`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onSubmit__ | `function`: callback, mida kutsutakse üles, kui vastus on esitatud; ainsa parameetrina on "boolean", mis näitab, kas elemendid on paigutatud õiges järjekorras.. Default: `onSubmit() {}`.


## Näited

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
