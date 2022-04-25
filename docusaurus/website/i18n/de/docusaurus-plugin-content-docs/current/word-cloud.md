---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Eine Wortwolken-Komponente, die auf [d3-cloud] (https://github.com/jasondavies/d3-cloud) aufbaut.

## Optionen

* __data__ | `array`: entweder ein Array mit Texten, aus denen die Wortwolke erzeugt werden soll, oder, wenn `precalculated` auf `true` gesetzt ist, ein Array mit Wortzählungsobjekten (mit den Schlüsseln `text` und `value`). Default: `[]`.
* __font__ | `(string|function)`: Accessorfunktion, die die Schriftart für jedes Wort angibt. Akzeptiert auch eine Konstante anstelle einer Funktion. Default: `'serif'`.
* __fontSizeMapper__ | `function`: Accessor-Funktion, die die Schriftgröße für jedes Wort angibt. Die Standardeinstellung ist `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, wobei `min` und `max` die minimale bzw. maximale Wortanzahl bezeichnen. Default: `none`.
* __height__ | `number`: Höhe der Wortwolke (in px). Default: `600`.
* __language__ | `string`: Sprachidentifikator (bestimmt die zu entfernenden Stoppwörter). Default: `'en'`.
* __minCount__ | `number`: wenn gesetzt, nur Wörter einbeziehen, die mehr als `minCount` Mal in den angegebenen Daten vorkommen. Default: `none`.
* __saveButton__ | `boolean`: steuert, ob eine Schaltfläche zum Speichern der Wortwolke als Bild angezeigt werden soll. Default: `true`.
* __onClick__ | `function`: Callback-Funktion, die aufgerufen wird, wenn ein Wort in der Wortwolke angeklickt wird. Default: `onClick() {}`.
* __padding__ | `(function|number)`: Accessorfunktion oder Konstante, die das numerische Padding für jedes Wort angibt. Default: `5`.
* __precalculated__ | `boolean`: steuert, ob die Wortwolke ein Array mit vorberechneten Wortzahlen erwartet oder diese für gegebene Texte generiert. Default: `false`.
* __rotate__ | `(function|number)`: Accessorfunktion, die den Drehwinkel (in Grad) für jedes Wort angibt. Akzeptiert auch eine Konstante anstelle einer Funktion. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: Stapelgröße der neuen Dokumente in `Daten`, bevor die Wortwolke neu gerendert wird. Default: `5`.
* __stopwords__ | `array`: zusätzliche Stoppwörter, die vor dem Rendern der Wortwolke entfernt werden sollen. Default: `[]`.
* __triggerRender__ | `boolean`: erneut wiedergeben, wenn der Datensatz ausgetauscht wird. Default: `true`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __width__ | `number`: Breite der Wortwolke (in px). Default: `700`.


## Beispiele

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
