---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

O întrebare care solicită utilizatorului să încarce o imagine.

## Opțiuni

* __question__ | `(string|node)`: textul întrebării. Default: `''`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controlează dacă trebuie afișată o notificare după trimiterea unei imagini. Default: `false`.
* __className__ | `string`: numele clasei. Default: `''`.
* __sketchpad__ | `object`: proprietăți care trebuie transmise componentei <Sketchpad />; pentru a reda sketchpad-ul, treceți cel puțin un obiect gol `{}`. Default: `none`.
* __solution__ | `string`: imaginea URL a soluției modelului. Default: `none`.
* __until__ | `Date`: timpul până la care elevii ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onSubmit__ | `function`: callback invocat la trimiterea răspunsului; are ca unic parametru un `boolean` care indică dacă elementele au fost plasate în ordinea corectă. Default: `onSubmit() {}`.


## Exemple

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
