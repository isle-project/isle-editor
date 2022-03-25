---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Vaihteluvälikysymys, jossa oppilaita pyydetään antamaan alempi ja ylempi loppupiste.

## Vaihtoehdot

* __question__ | `(string|node)`: näytetty kysymys. Default: `''`.
* __solution__ | `array<number>`: kahden elementin joukko, joka sisältää oikean alueen päätepisteet.. Default: `none`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __labels__ | `array`: kahden elementin joukko muita mukautettuja merkintöjä kuin "Lower" ja "Upper".. Default: `none`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __digits__ | `number`: niiden numeroiden määrä, joiden on täsmättävä ratkaisun ja käyttäjän antaman vastauksen välillä. Jos arvoa ei anneta tai se on nolla, komponentti tarkistaa, että vastaus on täsmälleen sama. Jos arvoksi asetetaan 0, tarkistetaan kokonaislukujen yhtäläisyys.. Default: `3`.
* __max__ | `number`: suurin tuloarvo. Default: `null`.
* __min__ | `number`: pienin syöttöarvo. Default: `null`.
* __provideFeedback__ | `boolean`: ilmoittaa, näytetäänkö palaute, joka sisältää oikean vastauksen, sen jälkeen, kun oppijat ovat lähettäneet vastauksensa.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: valvoo, voiko lähettää useita vastauksia. Default: `false`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChangeLower__ | `function`: takaisinkutsu, joka käynnistyy sen jälkeen, kun käyttäjä on muuttanut alarajaa.. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: takaisinsoitto, joka käynnistyy sen jälkeen, kun käyttäjä on muuttanut ylärajaa.. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, joka käynnistetään, kun vastaus on lähetetty; ensimmäisenä parametrina on `boolean`, joka ilmaisee, onko vastaukseen vastattu oikein (jos mahdollista, muuten `null`) ja toisena parametrina annettu vastaus.. Default: `onSubmit() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
