---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

O componentă de nor de cuvinte construită pe baza [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Opțiuni

* __data__ | `array`: fie o matrice de texte din care să se genereze norul de cuvinte, fie, dacă `precalculated` este setat la `true`, o matrice de obiecte de număr de cuvinte (cu cheile `text` și `value`).. Default: `[]`.
* __font__ | `(string|function)`: funcție de accesor care specifică fontul pentru fiecare cuvânt. Acceptă, de asemenea, o constantă în loc de o funcție. Default: `'serif'`.
* __fontSizeMapper__ | `function`: funcție accesor care indică dimensiunea fontului pentru fiecare cuvânt. Valoarea implicită este `( număr - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, unde `min` și `max` reprezintă numărul minim și, respectiv, numărul maxim de cuvinte.. Default: `none`.
* __height__ | `number`: înălțimea norului de cuvinte (în px). Default: `600`.
* __language__ | `string`: identificatorul de limbă (determină cuvintele de oprire care trebuie eliminate). Default: `'en'`.
* __minCount__ | `number`: dacă este setat, include numai cuvintele care apar de mai mult de `minCount` ori în datele date. Default: `none`.
* __saveButton__ | `boolean`: controlează dacă se afișează sau nu un buton pentru salvarea norului de cuvinte sub formă de imagine. Default: `true`.
* __onClick__ | `function`: funcția de callback invocată atunci când se face clic pe un cuvânt din norul de cuvinte. Default: `onClick() {}`.
* __padding__ | `(function|number)`: funcție de accesor sau constantă care indică umplutura numerică pentru fiecare cuvânt. Default: `5`.
* __precalculated__ | `boolean`: controlează dacă norul de cuvinte așteaptă o matrice de numere de cuvinte precalculate sau le va genera pentru textele date. Default: `false`.
* __rotate__ | `(function|number)`: funcție de accesor care indică unghiul de rotație (în grade) pentru fiecare cuvânt. Acceptă, de asemenea, o constantă în loc de o funcție. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: dimensiunea lotului de documente noi din `data` înainte de re-reprezentarea norului de cuvinte. Default: `5`.
* __stopwords__ | `array`: cuvinte de oprire suplimentare care trebuie eliminate înainte de redarea norului de cuvinte. Default: `[]`.
* __triggerRender__ | `boolean`: redarea atunci când setul de date este schimbat. Default: `true`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __width__ | `number`: lățimea norului de cuvinte (în px). Default: `700`.


## Exemple

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
