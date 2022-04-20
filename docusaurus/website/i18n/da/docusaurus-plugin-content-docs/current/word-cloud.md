---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

En ordsky-komponent bygget oven på [d3-cloud] (https://github.com/jasondavies/d3-cloud).

## Indstillinger

* __data__ | `array`: enten et array af tekster, hvorfra ordskyen skal genereres, eller, hvis `precalculated` er sat til `true`, et array af ordtællingsobjekter (med nøgler `text` og `value`). Default: `[]`.
* __font__ | `(string|function)`: accessor-funktion, der angiver skrifttypen for hvert ord. Accepterer også en konstant i stedet for en funktion. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: højden af ordskyen (i px). Default: `600`.
* __language__ | `string`: sprogidentifikator (bestemmer de stopord, der skal fjernes). Default: `'en'`.
* __minCount__ | `number`: hvis indstillet, medtages kun ord, der forekommer mere end `minCount` gange i de givne data. Default: `none`.
* __saveButton__ | `boolean`: styrer, om der skal vises en knap til at gemme ordskyen som et billede. Default: `true`.
* __onClick__ | `function`: callback-funktion, der påkaldes, når der klikkes på et ord i ordskyen. Default: `onClick() {}`.
* __padding__ | `(function|number)`: accessorfunktion eller konstant, der angiver den numeriske polstring for hvert ord. Default: `5`.
* __precalculated__ | `boolean`: styrer, om ordskyen forventer et array af forudberegnede ordtællinger eller om den skal generere dem for givne tekster. Default: `false`.
* __rotate__ | `(function|number)`: accessorfunktion, der angiver rotationsvinklen (i grader) for hvert ord. Accepterer også en konstant i stedet for en funktion. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: batchstørrelse af nye dokumenter i `data`, før ordskyen gengives. Default: `5`.
* __stopwords__ | `array`: yderligere stopord, der skal fjernes, før ordskyen gengives. Default: `[]`.
* __triggerRender__ | `boolean`: genberegning, når datasættet udveksles. Default: `true`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __width__ | `number`: bredden af ordskyen (i px). Default: `700`.


## Eksempler

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
