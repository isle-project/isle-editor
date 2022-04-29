---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Numerokysymyskomponentti.

## Vaihtoehdot

* __question__ | `(string|node)`: numerokysymys. Default: `''`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __solution__ | `(number|array<number>)`: numeerinen vastaus ongelmaan (tai useita oikeita vastauksia, jos on annettu joukko).. Default: `none`.
* __digits__ | `number`: niiden numeroiden lukumäärä, joiden osalta opiskelijan antaman vastauksen on vastattava ratkaisua, jotta sitä voidaan pitää oikeana. Asetetaan arvoksi 0, jos vastaus on kokonaisluku. Jos arvoksi asetetaan nolla, etsitään tarkkaa vastaavuutta.. Default: `3`.
* __max__ | `number`: suurin sallittu syöttöarvo. Default: `null`.
* __min__ | `number`: pienin sallittu syöttöarvo. Default: `null`.
* __defaultValue__ | `number`: esivalittu arvo numeron syötölle. Default: `none`.
* __provideFeedback__ | `boolean`: ilmoittaa, näytetäänkö palaute, joka sisältää oikean vastauksen, sen jälkeen, kun oppijat ovat lähettäneet vastauksensa.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: valvoo, voiko ehdotuksen jättää uudelleen, vaikka ratkaisu olisi jo paljastunut.. Default: `false`.
* __nTries__ | `number`: kuinka monen yrityksen jälkeen palaute on annettava (jos `provideFeedback` on `true`).. Default: `1`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy, kun numerokentän arvo muuttuu; saa ainoana argumenttinaan nykyisen arvon.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, joka käynnistetään, kun vastaus on lähetetty; ensimmäisenä parametrina on `boolean`, joka ilmaisee, onko vastaukseen vastattu oikein (jos mahdollista, muuten `null`) ja toisena parametrina annettu vastaus.. Default: `onSubmit() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
