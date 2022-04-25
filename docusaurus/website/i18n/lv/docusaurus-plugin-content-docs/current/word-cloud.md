---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Uz [d3-cloud](https://github.com/jasondavies/d3-cloud) balstīta vārdu mākoņa komponente.

## Iespējas

* __data__ | `array`: vai nu tekstu masīvs, no kura ģenerēt vārdu mākoni, vai, ja `precalculated` ir iestatīts uz `true`, un vārdu skaita objektu masīvs (ar `text` un `value` atslēgām).. Default: `[]`.
* __font__ | `(string|function)`: piekļuves funkcija, kas norāda katra vārda fonta seju. Funkcijas vietā pieņem arī konstantu. Default: `'serif'`.
* __fontSizeMapper__ | `function`: piekļuves funkcija, kas norāda katra vārda fonta lielumu. Standarta noklusējuma vērtība ir `( count - min + 1 ) / ( max - min + 6 ) * 30,0 + 14,0`, kur `min` un `max` apzīmē attiecīgi minimālo un maksimālo vārdu `skaitli`.. Default: `none`.
* __height__ | `number`: vārdu mākoņa augstums (px). Default: `600`.
* __language__ | `string`: valodas identifikators (nosaka noņemtās pieturas vārdi).. Default: `'en'`.
* __minCount__ | `number`: ja iestatīts, iekļauj tikai tos vārdus, kas dotajos datos parādās vairāk nekā `minCount` reižu.. Default: `none`.
* __saveButton__ | `boolean`: kontrolē, vai tiek rādīta poga, lai saglabātu vārdu mākoni kā attēlu.. Default: `true`.
* __onClick__ | `function`: atsauces funkcija, kas tiek izsaukta, kad tiek noklikšķināts uz vārda vārdu mākonī.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: piekļuves funkcija vai konstante, kas norāda katra vārda skaitlisko pildījumu.. Default: `5`.
* __precalculated__ | `boolean`: kontrolē, vai vārdu mākonis sagaida iepriekš aprēķinātu vārdu skaita masīvu vai ģenerē to dotajiem tekstiem.. Default: `false`.
* __rotate__ | `(function|number)`: piekļuves funkcija, kas norāda pagrieziena leņķi (grādos) katram vārdam. Funkcijas vietā pieņem arī konstantu. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: jaunu dokumentu partijas lielums `data` pirms vārdu mākoņa pārrenderēšanas.. Default: `5`.
* __stopwords__ | `array`: papildu aizliedzošie vārdi, kas jādzēš pirms vārdu mākoņa atveidošanas.. Default: `[]`.
* __triggerRender__ | `boolean`: pārrenderēt, kad datu kopa tiek apmainīta.. Default: `true`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __width__ | `number`: vārdu mākoņa platums (px). Default: `700`.


## Piemēri

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
