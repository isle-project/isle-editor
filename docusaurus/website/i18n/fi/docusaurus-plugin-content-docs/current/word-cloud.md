---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Sanapilvi-komponentti, joka on rakennettu [d3-cloud](https://github.com/jasondavies/d3-cloud) päälle.

## Vaihtoehdot

* __data__ | `array`: joko joukko tekstejä, joista luodaan sanapilvi, tai, jos `precalculated` on asetettu arvoon `true`, joukko sanojen lukumäärän objekteja (avaimilla `text` ja `value`).. Default: `[]`.
* __font__ | `(string|function)`: accessor-funktio, joka määrittelee kunkin sanan fonttipinnan. Hyväksyy myös vakion funktion sijasta. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: sanapilven korkeus (px). Default: `600`.
* __language__ | `string`: kielitunniste (määrittää poistettavat stop-sanat). Default: `'en'`.
* __minCount__ | `number`: jos asetettu, otetaan mukaan vain sanat, jotka esiintyvät yli `minCount`-kertaa annetussa aineistossa.. Default: `none`.
* __saveButton__ | `boolean`: valvoo, näytetäänkö painike sanapilven tallentamiseksi kuvana.. Default: `true`.
* __onClick__ | `function`: callback-funktio, joka käynnistyy, kun sanapilven sanaa napsautetaan.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: accessor-funktio tai vakio, joka ilmoittaa kunkin sanan numeerisen pehmustuksen. Default: `5`.
* __precalculated__ | `boolean`: määrittää, odottaako sanapilvi ennalta laskettujen sanojen lukumäärän joukkoa vai luoko se ne annetuille teksteille.. Default: `false`.
* __rotate__ | `(function|number)`: accessor-funktio, joka ilmoittaa kunkin sanan kiertokulman (asteina). Hyväksyy myös vakion funktion sijasta. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: uusien asiakirjojen eräkoko `data`:ssa ennen kuin sanapilvi renderöidään uudelleen.. Default: `5`.
* __stopwords__ | `array`: ylimääräiset pysäytyssanat, jotka on poistettava ennen sanapilven esittämistä.. Default: `[]`.
* __triggerRender__ | `boolean`: renderöinti, kun tietokokonaisuus vaihdetaan.. Default: `true`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __width__ | `number`: sanapilven leveys (px). Default: `700`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Stopwords', value: 'withStopwords' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<WordCloud data={[
  'This is my holiday', 
  'Breakfast is great', 
  'My house is my castle', 
  'A castle for a kingdom', 
  'I am longing for breakfast',
  'Having rolls for breakfast is a must',
  'A horse for a kingdom',
  'Mom like rolls',
  'Orange juice is fine',
  'Where is the butter',
  'I am looking for a spoon',
  'Coffee for coffee drinkers',
  'Tea for the sleepy ones',
  'The sleepy, sloppy, crazy King lives in a castle',
  'A house for everybody'
]} />
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<WordCloud 
  style={{ boxShadow: '10px 0 25px black' }}
  rotate={-7}
  data={[
    'This is my castle', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is a castle drink',
    'Where is the butter',
    'I am looking for a castle',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A holiday for everybody'
]} />
```
</TabItem>

<TabItem value="withStopwords">

```jsx live
<WordCloud 
  stopwords={[ 'castle', 'crap', 'damn' ]}
  data={[
    'This is my holiday', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is fine',
    'Where is the butter',
    'I am looking for a spoon',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A house for everybody',
    'castle castle castle castle castle castle castle castle castle castle',
    'crap crap crap crap crap crap crap damn damn damn dam'
]} />
```

</TabItem>

</Tabs>
