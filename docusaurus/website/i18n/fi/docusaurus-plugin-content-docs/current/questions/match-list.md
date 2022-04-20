---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

ISLE-komponentti, joka esittää kysymyksen, jossa oppijan on yhdistettävä kahden luettelon elementit toisiinsa oikealla tavalla.

## Vaihtoehdot

* __question__ | `(string|node)`: kysymys, joka näytetään otteluluettelon kysymyskomponentin yläosassa.. Default: `''`.
* __elements__ | `array<{a,b}>`: `array`, jossa oikeat parit näkyvät vapaan tekstin kysymysosan yläosassa. Jokaisen `array`-elementin on oltava `objekti`, jolla on `a`- ja `b`-ominaisuudet; anna elementtejä, joilla on vain `a`- tai `b`-ominaisuudet, lisätäksesi häiritseviä vastauksia.. Default: `[]`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __provideFeedback__ | `boolean`: ilmoittaa, onko ratkaisun oltava käytettävissä sen jälkeen, kun oppijat ovat lähettäneet vastauksensa.. Default: `true`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __colorScale__ | `array`: jos asetettu, laatoissa käytetään toimitettuja värejä.. Default: `none`.
* __shuffle__ | `string`: määrittää, sekoitetaanko sarakkeet "vasemmalle", "oikealle" vai "molemmille", joiden elementit on sovitettava yhteen; jos annat arvon "ei mitään" tai jonkin muun arvon, elementtejä ei sekoiteta kummallakaan puolella (voi olla hyödyllistä silloin, kun ratkaisua ei ole).. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __submissionMsg__ | `string`: ilmoitus, joka näytetään, kun oppija lähettää vastauksensa ensimmäisen kerran.. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: ilmoitus, joka näytetään kaikista ensimmäisen lähetyksen jälkeisistä lähetyksistä.. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, jota kutsutaan, kun opiskelijat muuttavat vastausta. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, jota kutsutaan, kun opiskelija lähettää vastauksen. Default: `onSubmit() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
