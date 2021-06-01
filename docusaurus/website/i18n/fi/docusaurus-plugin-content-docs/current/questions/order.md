---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Järjestyskysymyskomponentti, jossa oppilasta pyydetään saattamaan kokoelma elementtejä oikeaan järjestykseen.

## Vaihtoehdot

* __question__ | `(string|node)`: kysymys, jossa opiskelijan on asetettava käytettävissä olevat "vaihtoehdot" oikeaan järjestykseen.. Default: `''`.
* __options__ | `array (required)`: joukko tekstejä, jotka oppilaan on saatettava oikeaan järjestykseen (oletetaan, että ne ovat annetussa järjestyksessä).. Default: `none`.
* __provideFeedback__ | `boolean`: valvoo, näytetäänkö ilmoitus siitä, onko vastaus oikein vai ei.. Default: `true`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko "ylhäällä", "vasemmalla", "oikealla" tai "alhaalla").. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __failureMsg__ | `string`: viesti, joka näytetään, kun oppilas antaa väärän vastauksen.. Default: `none`.
* __successMsg__ | `string`: viesti, joka näytetään, kun oppilas lähettää oikean vastauksen.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy elementin raahaamisen jälkeen; sillä on kaksi parametria: `boolean`, joka ilmaisee, onko elementit sijoitettu oikeaan järjestykseen, ja `array`, jossa on nykyinen järjestys.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, joka käynnistetään, kun vastaus on lähetetty; ainoana parametrina on `boolean`, joka kertoo, onko elementit asetettu oikeaan järjestykseen.. Default: `onSubmit() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
