---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Et spørgsmål, der beder brugeren om at uploade et billede.

## Indstillinger

* __question__ | `(string|node)`: tekst til spørgsmålet. Default: `''`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten "top", "venstre", "højre" eller "nederst"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __disableSubmitNotification__ | `boolean`: styrer, om der skal vises en meddelelse efter indsendelse af et billede. Default: `false`.
* __className__ | `string`: klassens navn. Default: `''`.
* __sketchpad__ | `object`: egenskaber, der skal overføres til <Sketchpad /> komponenten; for at gengive skitseblokken skal du som minimum overføre et tomt objekt `{}`.. Default: `none`.
* __solution__ | `string`: URL-adresse til billedet af modelløsningen. Default: `none`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onSubmit__ | `function`: callback, der påkaldes, når svaret er indsendt; har som eneste parameter en `boolean`, der angiver, om elementerne blev placeret i den korrekte rækkefølge. Default: `onSubmit() {}`.


## Eksempler

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
