---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Словесный компонент "облако", построенный поверх [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Варианты

* __data__ | `array`: либо массив текстов, из которого генерируется слово "облако", либо, если `precalculated` установлен в `true`, и массив объектов подсчета слов (с ключами `текст` и `значение`). Default: `[]`.
* __font__ | `(string|function)`: функция аксессуара с указанием лица шрифта для каждого слова. Также принимает константу вместо функции. Default: `'serif'`.
* __fontSizeMapper__ | `function`: функция доступа, указывающая размер шрифта для каждого слова. По умолчанию `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, где `min` и `max` обозначают минимальное и максимальное количество слов соответственно.. Default: `none`.
* __height__ | `number`: высота слова "облако" (в px). Default: `600`.
* __language__ | `string`: идентификатор языка (определяет удаляемые стоп-слова). Default: `'en'`.
* __minCount__ | `number`: если установлено, включать только слова, которые появляются в данных более `минСчет` раз. Default: `none`.
* __saveButton__ | `boolean`: управляет тем, нужно ли отображать кнопку для сохранения слова "облако" в виде изображения. Default: `true`.
* __onClick__ | `function`: функция обратного вызова, вызываемая при нажатии на слово в слове "облако". Default: `onClick() {}`.
* __padding__ | `(function|number)`: аксессуарная функция или константа, указывающая числовую подкладку для каждого слова. Default: `5`.
* __precalculated__ | `boolean`: управляет тем, ожидает ли "облако слов" массив предварительно рассчитанных слов или будет генерировать их для заданных текстов. Default: `false`.
* __rotate__ | `(function|number)`: функция аксессуара, указывающая угол поворота (в градусах) для каждого слова. Также принимает константу вместо функции. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: пакетный размер новых документов в `данных` до переотправки слова cloud. Default: `5`.
* __stopwords__ | `array`: дополнительные стоп-слова, которые необходимо удалить перед отрисовкой слова "облако". Default: `[]`.
* __triggerRender__ | `boolean`: повторная отправка при обмене данными. Default: `true`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __width__ | `number`: ширина слова "облако" (в px). Default: `700`.


## Примеры

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
