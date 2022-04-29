---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Komponent słowny chmury zbudowany na szczycie [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Opcje

* __data__ | `array`: albo tablicę tekstów, z której można wygenerować chmurę słów lub, jeśli `prekalkulowane` jest ustawione na `prawdziwe`, oraz tablicę obiektów zliczających słowa (z klawiszami `tekstowymi` i `wartościowymi`). Default: `[]`.
* __font__ | `(string|function)`: funkcja dostępowa określająca oblicze czcionki dla każdego słowa. Przyjmuje również stałą zamiast funkcji. Default: `'serif'`.
* __fontSizeMapper__ | `function`: funkcja akcesora określająca rozmiar czcionki dla każdego słowa. Domyślnie `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, gdzie `min` i `max` oznaczają odpowiednio minimalną i maksymalną `liczbę słów`.. Default: `none`.
* __height__ | `number`: wysokość słowa "chmura" (w px). Default: `600`.
* __language__ | `string`: identyfikator języka (określa stopery, które mają być usunięte). Default: `'en'`.
* __minCount__ | `number`: jeśli jest ustawiony, zawiera tylko te słowa, które pojawiają się więcej niż `minCount` razy w podanych danych. Default: `none`.
* __saveButton__ | `boolean`: kontroluje, czy ma być wyświetlany przycisk do zapisywania chmury słów jako obrazu. Default: `true`.
* __onClick__ | `function`: funkcja callback wywoływana po kliknięciu słowa na chmurze słów. Default: `onClick() {}`.
* __padding__ | `(function|number)`: funkcja dostępowa lub stała wskazująca numeryczne wypełnienie dla każdego słowa. Default: `5`.
* __precalculated__ | `boolean`: kontroluje, czy chmura słów oczekuje tablicy wstępnie obliczonych zliczeń słów, czy też wygeneruje je dla danych tekstów. Default: `false`.
* __rotate__ | `(function|number)`: funkcja dostępowa wskazująca kąt obrotu (w stopniach) dla każdego słowa. Przyjmuje również stałą zamiast funkcji. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: wielkość partii nowych dokumentów w `danych` przed ponownym odesłaniem chmury słownej. Default: `5`.
* __stopwords__ | `array`: dodatkowe stopery do usunięcia przed renderowaniem chmury słów. Default: `[]`.
* __triggerRender__ | `boolean`: umorzenie podczas wymiany zestawu danych. Default: `true`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __width__ | `number`: szerokość słowa chmura (w px). Default: `700`.


## Przykłady

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
