---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Kysymys, jossa käyttäjää pyydetään lataamaan kuva.

## Vaihtoehdot

* __question__ | `(string|node)`: kysymyksen teksti. Default: `''`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko "ylhäällä", "vasemmalla", "oikealla" tai "alhaalla").. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __disableSubmitNotification__ | `boolean`: valvoo, näytetäänkö ilmoitus kuvan lähettämisen jälkeen.. Default: `false`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __sketchpad__ | `object`:  <Sketchpad /> -komponentille välitettävät ominaisuudet; jos haluat renderöidä luonnoslehden, välitä vähintään tyhjä objekti `{}`.. Default: `none`.
* __solution__ | `string`: mallin ratkaisun kuvan URL-osoite. Default: `none`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onSubmit__ | `function`: callback, joka käynnistetään, kun vastaus on lähetetty; ainoana parametrina on `boolean`, joka kertoo, onko elementit asetettu oikeaan järjestykseen.. Default: `onSubmit() {}`.


## Esimerkkejä

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
