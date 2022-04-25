---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Een woordwolkcomponent die bovenop [d3-cloud](https://github.com/jasondavies/d3-cloud) is gebouwd.

## Opties

* __data__ | `array`: ofwel een reeks teksten waaruit de woordwolk wordt gegenereerd, ofwel, indien `voorgecalculeerd` is ingesteld op `waar`, en een reeks objecten voor het tellen van woorden (met `tekst` en `waarde` toetsen). Default: `[]`.
* __font__ | `(string|function)`: Accessor-functie die het lettertype voor elk woord specificeert. Accepteert ook een constante in plaats van een functie. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: hoogte van de woordwolk (in px). Default: `600`.
* __language__ | `string`: taalidentificatie (bepaalt de te verwijderen stopwoorden). Default: `'en'`.
* __minCount__ | `number`: indien ingesteld, alleen woorden opnemen die meer dan `minCount` maal in de gegeven gegevens voorkomen. Default: `none`.
* __saveButton__ | `boolean`: bepaalt of een knop voor het opslaan van de woordwolk als afbeelding moet worden weergegeven. Default: `true`.
* __onClick__ | `function`: terugbelfunctie aangeroepen wanneer een woord op de woordwolk wordt geklikt. Default: `onClick() {}`.
* __padding__ | `(function|number)`: Accessor-functie of constante aanduiding van de numerieke vulling voor elk woord. Default: `5`.
* __precalculated__ | `boolean`: bepaalt of de woordwolk een reeks vooraf berekende woordentellingen verwacht of deze voor bepaalde teksten zal genereren. Default: `false`.
* __rotate__ | `(function|number)`: Accessor-functie die de rotatiehoek (in graden) voor elk woord aangeeft. Accepteert ook een constante in plaats van een functie. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: batchgrootte van nieuwe documenten in `data` voordat het woord 'cloud' opnieuw wordt gereproduceerd. Default: `5`.
* __stopwords__ | `array`: extra stopwoorden te verwijderen voordat het woord "cloud" wordt weergegeven. Default: `[]`.
* __triggerRender__ | `boolean`: rerender wanneer de dataset wordt uitgewisseld. Default: `true`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __width__ | `number`: breedte van de woordwolk (in px). Default: `700`.


## Voorbeelden

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
