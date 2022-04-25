---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Компонент за облак от думи, изграден върху [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Опции

* __data__ | `array`: или масив от текстове, от които да се генерира облакът от думи, или, ако `precalculated` е зададено на `true`, и масив от обекти за брой думи (с ключове `text` и `value`). Default: `[]`.
* __font__ | `(string|function)`: функция за достъп, задаваща лицето на шрифта за всяка дума. Приема също константа вместо функция. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: височина на облака от думи (в px). Default: `600`.
* __language__ | `string`: идентификатор на езика (определя стоповете, които ще бъдат премахнати). Default: `'en'`.
* __minCount__ | `number`: ако е зададено, включва само думи, които се появяват повече от `minCount` пъти в дадените данни. Default: `none`.
* __saveButton__ | `boolean`: контролира дали да се показва бутон за запазване на облака от думи като изображение. Default: `true`.
* __onClick__ | `function`: функция за обратна връзка, която се задейства, когато се щракне върху дума в облака от думи. Default: `onClick() {}`.
* __padding__ | `(function|number)`: функция за достъп или константа, указваща цифровата подложка за всяка дума. Default: `5`.
* __precalculated__ | `boolean`: контролира дали облакът от думи очаква масив от предварително изчислени бройки думи или ще ги генерира за дадени текстове.. Default: `false`.
* __rotate__ | `(function|number)`: функция за достъп, указваща ъгъла на завъртане (в градуси) за всяка дума. Приема също константа вместо функция. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: размер на партидата от нови документи в `data` преди повторното визуализиране на облака от думи. Default: `5`.
* __stopwords__ | `array`: допълнителни спиращи думи, които да се премахнат, преди да се визуализира облакът от думи. Default: `[]`.
* __triggerRender__ | `boolean`: повторно визуализиране при обмен на набора от данни. Default: `true`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __width__ | `number`: ширина на облака от думи (в px). Default: `700`.


## Примери

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
