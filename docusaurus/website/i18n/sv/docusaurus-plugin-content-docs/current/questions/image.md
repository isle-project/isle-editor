---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

En fråga som ber användaren att ladda upp en bild.

## Alternativ

* __question__ | `(string|node)`: text för frågan. Default: `''`.
* __hintPlacement__ | `string`: placering av tipsen (antingen "topp", "vänster", "höger" eller "botten"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om ett meddelande ska visas efter att en bild har skickats in. Default: `false`.
* __className__ | `string`: klassens namn. Default: `''`.
* __sketchpad__ | `object`: egenskaper som ska skickas till <Sketchpad /> -komponenten; för att återge skissblocket ska du skicka in minst ett tomt objekt `{}`.. Default: `none`.
* __solution__ | `string`: URL för modellens bildlösning.. Default: `none`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onSubmit__ | `function`: callback som aktiveras när svaret har skickats in; har som enda parameter en "boolean" som anger om elementen har placerats i rätt ordning.. Default: `onSubmit() {}`.


## Exempel

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
