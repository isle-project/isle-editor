---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Eine Frage, die den Benutzer auffordert, ein Bild hochzuladen.

## Optionen

* __question__ | `(string|node)`: Text für die Frage. Default: `''`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `top`, `left`, `right`, oder `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Tasten angezeigt werden sollen. Default: `true`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __disableSubmitNotification__ | `boolean`: steuert, ob nach dem Einreichen eines Bildes eine Benachrichtigung angezeigt werden soll. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __sketchpad__ | `object`: Eigenschaften, die an die <Sketchpad />-Komponente übergeben werden sollen; um den Skizzenblock zu rendern, übergeben Sie mindestens ein leeres Objekt `{}`. Default: `none`.
* __solution__ | `string`: Bild-URL der Musterlösung. Default: `none`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen dürfen. Default: `none`.
* __points__ | `number`: maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: `10`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onSubmit__ | `function`: Callback, der beim Absenden der Antwort aufgerufen wird; hat als einzigen Parameter ein `Boolesches`, das angibt, ob die Elemente in der richtigen Reihenfolge platziert wurden. Default: `onSubmit() {}`.


## Beispiele

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
