---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

[d3-cloud](https://github.com/jasondavies/d3-cloud)の上に構築されたワードクラウドコンポーネント。

## オプション

* __data__ | `array`: 単語群を生成するテキストの配列、あるいは `precalculated` が `true` に設定されている場合は単語数オブジェクトの配列 (`text` と `value` のキーを持つ)。. Default: `[]`.
* __font__ | `(string|function)`: アクセサ関数で、各単語のフォントフェイスを指定します。関数の代わりに定数を指定することもできます。. Default: `'serif'`.
* __fontSizeMapper__ | `function`: 各単語のフォントサイズを指定するアクセッサ関数です。デフォルトは `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0` で、`min` と `max` はそれぞれ単語の最小数と最大数 `counts` を表します。. Default: `none`.
* __height__ | `number`: 語高. Default: `600`.
* __language__ | `string`: げんごしきべつし. Default: `'en'`.
* __minCount__ | `number`: セットされている場合、指定されたデータの中で `minCount` 回以上出現する単語のみを含む。. Default: `none`.
* __saveButton__ | `boolean`: ワードクラウドを画像として保存するためのボタンを表示するかどうかを制御します。. Default: `true`.
* __onClick__ | `function`: クリックされた単語のコールバック関数. Default: `onClick() {}`.
* __padding__ | `(function|number)`: 各単語の数値パディングを示すアクセサ関数または定数. Default: `5`.
* __precalculated__ | `boolean`: は、ワードクラウドが事前に計算された単語数の配列を期待するか、与えられたテキストに対して単語数を生成するかを制御します。. Default: `false`.
* __rotate__ | `(function|number)`: 各単語の回転角度（度数）を表すアクセサ関数。関数の代わりに定数を受け取ることもできます。. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: ワードクラウドが再レンダリングされる前の `data` の新しいドキュメントのバッチサイズ. Default: `5`.
* __stopwords__ | `array`: 単語の雲をレンダリングする前に削除する追加のストップワード. Default: `[]`.
* __triggerRender__ | `boolean`: データセットを交換する際のレンダー. Default: `true`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __width__ | `number`: 語雲の幅. Default: `700`.


## 例としては、以下のようなものがあります。

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
