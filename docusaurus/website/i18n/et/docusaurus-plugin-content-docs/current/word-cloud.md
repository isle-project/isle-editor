---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Sõnapilve komponent, mis on ehitatud [d3-cloud](https://github.com/jasondavies/d3-cloud) peal.

## Valikud

* __data__ | `array`: kas tekstide massiivi, millest sõnapilv genereeritakse, või, kui `precalculated` on seatud `true`, ja sõnade arvu objektide massiivi (võtmetega `text` ja `value`).. Default: `[]`.
* __font__ | `(string|function)`: accessor funktsioon, mis määrab iga sõna jaoks kirjatüübi näo. Aktsepteerib funktsiooni asemel ka konstanti. Default: `'serif'`.
* __fontSizeMapper__ | `function`: accessor funktsioon, mis näitab iga sõna kirjasuurust. Vaikimisi on `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, kus `min` ja `max` tähistavad vastavalt minimaalset ja maksimaalset sõnade `arvu`.. Default: `none`.
* __height__ | `number`: sõnapilve kõrgus (px). Default: `600`.
* __language__ | `string`: keele identifikaator (määrab eemaldatavad stoppsõnad). Default: `'en'`.
* __minCount__ | `number`: kui see on määratud, siis lisatakse ainult sõnad, mis esinevad antud andmetes rohkem kui `minCount` korda.. Default: `none`.
* __saveButton__ | `boolean`: kontrollib, kas kuvatakse nuppu sõnapilve salvestamiseks pildina.. Default: `true`.
* __onClick__ | `function`: callback-funktsioon, mis käivitub, kui sõnapilve sõnal klõpsatakse. Default: `onClick() {}`.
* __padding__ | `(function|number)`: juurdepääsufunktsioon või konstant, mis näitab iga sõna numbrilist polsterdamist. Default: `5`.
* __precalculated__ | `boolean`: kontrollib, kas sõnapilv ootab eelnevalt arvutatud sõnade arvu massiivi või genereerib need antud tekstide jaoks.. Default: `false`.
* __rotate__ | `(function|number)`: juurdepääsufunktsioon, mis näitab iga sõna pöördenurka (kraadides). Aktsepteerib funktsiooni asemel ka konstanti. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: uute dokumentide partii suurus "andmetes" enne sõnapilve uuesti renderdamist. Default: `5`.
* __stopwords__ | `array`: täiendavad peatussõnad, mis tuleb enne sõnapilve esitamist eemaldada.. Default: `[]`.
* __triggerRender__ | `boolean`: uuesti esitamine, kui andmekogum vahetatakse välja. Default: `true`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __width__ | `number`: sõnapilve laius (px). Default: `700`.


## Näited

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
