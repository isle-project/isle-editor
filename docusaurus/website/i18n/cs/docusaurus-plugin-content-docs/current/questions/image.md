---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Otázka, která uživatele vyzve k nahrání obrázku.

## Možnosti

* __question__ | `(string|node)`: text otázky. Default: `''`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `top`, `left`, `right`, nebo `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __chat__ | `boolean`: řídí, zda má mít prvek integrovaný chat. Default: `false`.
* __disableSubmitNotification__ | `boolean`: řídí, zda se má po odeslání obrázku zobrazit oznámení.. Default: `false`.
* __className__ | `string`: název třídy. Default: `''`.
* __sketchpad__ | `object`: vlastnosti předávané komponentě <Sketchpad />; pro vykreslení náčrtníku předejte alespoň prázdný objekt `{}`.. Default: `none`.
* __solution__ | `string`: URL adresa obrázku modelového řešení. Default: `none`.
* __until__ | `Date`: čas, do kdy by studenti měli mít možnost odevzdat odpovědi. Default: `none`.
* __points__ | `number`: maximální počet bodů udělených při klasifikaci. Default: `10`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onSubmit__ | `function`: zpětné volání vyvolané při odeslání odpovědi; jako jediný parametr má `boolean`, který udává, zda byly prvky umístěny ve správném pořadí.. Default: `onSubmit() {}`.


## Příklady

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
