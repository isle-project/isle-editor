---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Klausimas, kuriame naudotojo prašoma įkelti paveikslėlį.

## Parinktys

* __question__ | `(string|node)`: klausimo tekstas. Default: `''`.
* __hintPlacement__ | `string`: užuominų vieta (`viršuje`, `kairėje`, `dešinėje`, `dešinėje` arba `apačioje`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontroliuoja, ar pateikus paveikslėlį turėtų būti rodomas pranešimas.. Default: `false`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __sketchpad__ | `object`: savybės, kurios bus perduotos <Sketchpad /> komponentui; norint atvaizduoti eskizų bloknotą, perduokite bent tuščią objektą `{}`.. Default: `none`.
* __solution__ | `string`: modelio sprendimo vaizdo URL. Default: `none`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onSubmit__ | `function`: grįžtamasis skambutis, inicijuojamas pateikus atsakymą; vienintelis parametras - `boolean`, nurodantis, ar elementai buvo išdėstyti teisinga tvarka.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
