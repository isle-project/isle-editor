---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

En komponent för ordmoln som bygger på [d3-cloud] (https://github.com/jasondavies/d3-cloud).

## Alternativ

* __data__ | `array`: antingen en matris med texter från vilka ordmolnet ska genereras eller, om `precalculated` är satt till `true`, en matris med ordräkningsobjekt (med nycklarna `text` och `value`).. Default: `[]`.
* __font__ | `(string|function)`: som anger teckensnittet för varje ord. Accepterar även en konstant i stället för en funktion. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: ordmolnets höjd (i px). Default: `600`.
* __language__ | `string`: Språkidentifierare (bestämmer vilka stoppord som ska tas bort).. Default: `'en'`.
* __minCount__ | `number`: om den är inställd, inkludera endast ord som förekommer mer än `minCount` gånger i de givna uppgifterna. Default: `none`.
* __saveButton__ | `boolean`: styr om en knapp för att spara ordmolnet som en bild ska visas.. Default: `true`.
* __onClick__ | `function`: callback-funktion som aktiveras när man klickar på ett ord i ordmolnet.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: Accessor-funktion eller konstant som anger den numeriska stoppningen för varje ord.. Default: `5`.
* __precalculated__ | `boolean`: kontrollerar om ordmolnet förväntar sig en matris med förberäknade ordräkningar eller om det ska generera dem för givna texter. Default: `false`.
* __rotate__ | `(function|number)`: funktion som anger rotationsvinkeln (i grader) för varje ord. Accepterar även en konstant i stället för en funktion.. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: Storleken på partiet nya dokument i `data` innan ordmolnet återskapas.. Default: `5`.
* __stopwords__ | `array`: ytterligare stoppord som ska tas bort innan ordmolnet visas. Default: `[]`.
* __triggerRender__ | `boolean`: återges när datamängden byts ut. Default: `true`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __width__ | `number`: ordmolnets bredd (i px). Default: `700`.


## Exempel

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
