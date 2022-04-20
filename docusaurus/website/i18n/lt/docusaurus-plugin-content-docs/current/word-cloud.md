---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Žodžių debesies komponentas, sukurtas ant [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Parinktys

* __data__ | `array`: arba tekstų masyvas, iš kurio generuojamas žodžių debesis, arba, jei `precalculated` nustatyta į `true`, žodžių skaičiaus objektų masyvas (su `text` ir `value` raktais).. Default: `[]`.
* __font__ | `(string|function)`: prieigos funkcija, nurodanti kiekvieno žodžio šrifto veidą. Taip pat priima konstantą vietoj funkcijos. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: žodžių debesies aukštis (px). Default: `600`.
* __language__ | `string`: kalbos identifikatorius (nustato šalintinus stopžodžius).. Default: `'en'`.
* __minCount__ | `number`: jei nustatyta, įtraukti tik tuos žodžius, kurie duotuose duomenyse yra daugiau nei `minCount` kartų.. Default: `none`.
* __saveButton__ | `boolean`: kontroliuoja, ar rodyti mygtuką, skirtą žodžių debesiui išsaugoti kaip paveikslėlį.. Default: `true`.
* __onClick__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai spustelėjamas žodis žodžių debesyje.. Default: `onClick() {}`.
* __padding__ | `(function|number)`: prieigos funkcija arba konstanta, nurodanti kiekvieno žodžio skaitmeninį užpildą.. Default: `5`.
* __precalculated__ | `boolean`: kontroliuoja, ar žodžių debesis tikisi iš anksto apskaičiuoto žodžių skaičiaus masyvo, ar jį sukurs duotiems tekstams.. Default: `false`.
* __rotate__ | `(function|number)`: prieigos funkcija, nurodanti kiekvieno žodžio pasukimo kampą (laipsniais). Taip pat vietoj funkcijos priimama konstanta. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: naujų dokumentų, esančių `data`, partijos dydis, prieš atvaizduojant žodžių debesį.. Default: `5`.
* __stopwords__ | `array`: papildomus sustabarėjusius žodžius, kuriuos reikia pašalinti prieš atvaizduojant žodžių debesį.. Default: `[]`.
* __triggerRender__ | `boolean`: iš naujo atvaizduoti, kai keičiamasi duomenų rinkiniu.. Default: `true`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __width__ | `number`: žodžių debesies plotis (px). Default: `700`.


## Pavyzdžiai

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
