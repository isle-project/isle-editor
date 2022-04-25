---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

A [d3-cloud](https://github.com/jasondavies/d3-cloud) tetejére épülő szófelhő komponens.

## Opciók

* __data__ | `array`: vagy szövegek tömbje, amelyekből a szófelhőt generálni kell, vagy, ha az `precalculated` értéke `true`, és szószám objektumok tömbje (a `text` és `value` kulcsokkal).. Default: `[]`.
* __font__ | `(string|function)`: accessor függvény, amely meghatározza az egyes szavak betűtípusát. Függvény helyett konstansot is elfogad. Default: `'serif'`.
* __fontSizeMapper__ | `function`: accessor függvény, amely minden szóhoz megadja a betűméretet. Alapértelmezett értéke `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, ahol `min` és `max` a minimális és maximális szószámot jelöli.. Default: `none`.
* __height__ | `number`: a szófelhő magassága (px-ben). Default: `600`.
* __language__ | `string`: nyelvi azonosító (meghatározza az eltávolítandó zárószavakat). Default: `'en'`.
* __minCount__ | `number`: ha be van állítva, csak azokat a szavakat tartalmazza, amelyek többször fordulnak elő a megadott adatokban, mint a "minCount".. Default: `none`.
* __saveButton__ | `boolean`: szabályozza, hogy megjelenjen-e egy gomb a szófelhő képként történő mentéséhez.. Default: `true`.
* __onClick__ | `function`: callback függvény, amely akkor hívódik elő, ha egy szóra kattintanak a szófelhőben.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: hozzáférési függvény vagy konstans, amely az egyes szavak numerikus kitöltését jelzi. Default: `5`.
* __precalculated__ | `boolean`: szabályozza, hogy a szófelhő az előre kiszámított szószámok tömbjét várja-e, vagy a megadott szövegekhez generálja azokat.. Default: `false`.
* __rotate__ | `(function|number)`: accessor függvény, amely minden szóhoz megadja a forgatási szöget (fokban). A függvény helyett konstansot is elfogad. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: az új dokumentumok kötegelt mérete az "adatokban", mielőtt a szófelhő újra renderelésre kerülne.. Default: `5`.
* __stopwords__ | `array`: a szófelhő megjelenítése előtt eltávolítandó további zárószavak. Default: `[]`.
* __triggerRender__ | `boolean`: újraszerkesztés az adathalmaz cseréjekor. Default: `true`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __width__ | `number`: a szófelhő szélessége (px-ben). Default: `700`.


## Példák

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
