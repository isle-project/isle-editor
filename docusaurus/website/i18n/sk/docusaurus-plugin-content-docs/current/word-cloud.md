---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Komponent mraku slov postavený nad [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Možnosti

* __data__ | `array`: buď pole textov, z ktorých sa má vygenerovať mrak slov, alebo ak je `precalculated` nastavené na `true`, a pole objektov s počtom slov (s kľúčmi `text` a `value`). Default: `[]`.
* __font__ | `(string|function)`: prístupová funkcia určujúca tvár písma pre každé slovo. Namiesto funkcie akceptuje aj konštantu. Default: `'serif'`.
* __fontSizeMapper__ | `function`: prístupová funkcia, ktorá udáva veľkosť písma pre každé slovo. Predvolené nastavenie je `( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 14,0`, kde `min` a `max` označujú minimálny a maximálny počet slov. Default: `none`.
* __height__ | `number`: výška mraku slov (v px). Default: `600`.
* __language__ | `string`: identifikátor jazyka (určuje stopslova, ktoré sa majú odstrániť). Default: `'en'`.
* __minCount__ | `number`: ak je nastavené, zahrnie iba slová, ktoré sa v daných údajoch vyskytujú viac ako `minCount` krát. Default: `none`.
* __saveButton__ | `boolean`: kontroluje, či sa má zobraziť tlačidlo na uloženie mraku slov ako obrázka.. Default: `true`.
* __onClick__ | `function`: spätná funkcia vyvolaná po kliknutí na slovo v mraku slov. Default: `onClick() {}`.
* __padding__ | `(function|number)`: prístupová funkcia alebo konštanta udávajúca číselnú výplň pre každé slovo. Default: `5`.
* __precalculated__ | `boolean`: ovláda, či mrak slov očakáva pole predpočítaných počtov slov alebo ich bude generovať pre dané texty.. Default: `false`.
* __rotate__ | `(function|number)`: prístupová funkcia udávajúca uhol natočenia (v stupňoch) pre každé slovo. Namiesto funkcie akceptuje aj konštantu. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: veľkosť dávky nových dokumentov v `data` pred opätovným vykreslením mraku slov. Default: `5`.
* __stopwords__ | `array`: ďalšie stopslová, ktoré sa majú odstrániť pred vykreslením mraku slov. Default: `[]`.
* __triggerRender__ | `boolean`: opätovné vykreslenie pri výmene súboru údajov. Default: `true`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __width__ | `number`: šírka mraku slov (v px). Default: `700`.


## Príklady

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
