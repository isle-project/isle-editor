---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Komponenta mraku slov postavená nad [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Možnosti

* __data__ | `array`: buď pole textů, ze kterých se generuje mračno slov, nebo, pokud je `precalculated` nastaveno na `true`, pole objektů s počtem slov (s klíči `text` a `value`).. Default: `[]`.
* __font__ | `(string|function)`: přístupová funkce, která určuje tvář písma pro každé slovo. Místo funkce přijímá také konstantu. Default: `'serif'`.
* __fontSizeMapper__ | `function`: přístupová funkce, která udává velikost písma pro každé slovo. Výchozí hodnota je `( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 14,0`, kde `min` a `max` označují minimální a maximální počet slov.. Default: `none`.
* __height__ | `number`: výška mraku slov (v px). Default: `600`.
* __language__ | `string`: identifikátor jazyka (určuje stopslova, která mají být odstraněna).. Default: `'en'`.
* __minCount__ | `number`: pokud je nastaveno, zahrne pouze slova, která se v daných datech vyskytují více než `minCount`.. Default: `none`.
* __saveButton__ | `boolean`: určuje, zda se má zobrazit tlačítko pro uložení mračna slov jako obrázku.. Default: `true`.
* __onClick__ | `function`: funkce zpětného volání vyvolaná po kliknutí na slovo v mračnu slov.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: přístupová funkce nebo konstanta udávající číselnou výplň pro každé slovo.. Default: `5`.
* __precalculated__ | `boolean`: řídí, zda mračno slov očekává pole předpočítaných počtů slov, nebo zda je bude generovat pro zadané texty.. Default: `false`.
* __rotate__ | `(function|number)`: přístupová funkce udávající úhel natočení (ve stupních) pro každé slovo. Místo funkce přijímá také konstantu. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: velikost dávky nových dokumentů v `data` před opětovným vykreslením mračna slov.. Default: `5`.
* __stopwords__ | `array`: další stopslova, která se odstraní před vykreslením mračna slov.. Default: `[]`.
* __triggerRender__ | `boolean`: znovu vykreslit při výměně datové sady.. Default: `true`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __width__ | `number`: šířka mračna slov (v px). Default: `700`.


## Příklady

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
