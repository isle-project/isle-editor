---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Komponenta oblaka besed, zgrajena na podlagi [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Možnosti

* __data__ | `array`: bodisi polje besedil, iz katerih se ustvari besedni oblak, ali, če je `precalculated` nastavljeno na `true`, polje objektov za štetje besed (s ključema `text` in `value`).. Default: `[]`.
* __font__ | `(string|function)`: funkcijo dostopa, ki določa obraz pisave za vsako besedo. Namesto funkcije sprejme tudi konstanto. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: višina oblaka besed (v px). Default: `600`.
* __language__ | `string`: identifikator jezika (določa stopice, ki jih je treba odstraniti).. Default: `'en'`.
* __minCount__ | `number`: če je nastavljeno, vključi samo besede, ki se v danih podatkih pojavijo več kot `minCount` krat. Default: `none`.
* __saveButton__ | `boolean`: nadzoruje, ali naj se prikaže gumb za shranjevanje oblaka besed kot slike.. Default: `true`.
* __onClick__ | `function`: funkcija povratne zveze, ki se sproži ob kliku na besedo v oblaku besed.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: dostopna funkcija ali konstanta, ki označuje številčno podlogo za vsako besedo.. Default: `5`.
* __precalculated__ | `boolean`: nadzoruje, ali besedni oblak pričakuje polje vnaprej izračunanih števil besed ali jih bo ustvaril za dana besedila.. Default: `false`.
* __rotate__ | `(function|number)`: dostopna funkcija, ki za vsako besedo navaja kot vrtenja (v stopinjah). Namesto funkcije sprejme tudi konstanto. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: velikost serije novih dokumentov v `data` pred ponovnim prikazom oblaka besed. Default: `5`.
* __stopwords__ | `array`: dodatne stopice, ki jih je treba odstraniti pred prikazom oblaka besed.. Default: `[]`.
* __triggerRender__ | `boolean`: ponovni prikaz ob izmenjavi niza podatkov.. Default: `true`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __width__ | `number`: širina oblaka besed (v px). Default: `700`.


## Primeri

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
