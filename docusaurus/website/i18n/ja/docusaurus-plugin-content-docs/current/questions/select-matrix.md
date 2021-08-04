---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

複数のセレクトボックスで構成された回答付きの問題。

## オプション

* __question__ | `(string|node)`: 冒頭に表示される質問. Default: `''`.
* __rows__ | `array`: 行ラベル. Default: `[]`.
* __cols__ | `array`: 列ラベル. Default: `[]`.
* __options__ | `object`: オブジェクトで、`row:col` の形式を持つキーと値のペア、例えば `0:0`, `0:1`, `1:0` などを持ち、対応する値は個々の選択問題の解答選択肢の配列です。. Default: `{}`.
* __solution__ | `object`: 解オブジェクトで、`row:col` の形式を持つキーと値のペア、例えば `0:0`, `0:1`, `1:0` などを持ち、対応する値はそれぞれの `options` 配列の正解要素のインデックスとなります。. Default: `{}`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'bottom'`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __provideFeedback__ | `string`: 全く`なし`のフィードバックを提供するか、提出された回答に対する`個別`のフィードバックを提供するか、またはすべての質問に対する`全体`のフィードバックを提供するか。. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: 各セレクトボックスで選択せずに投稿を許可するかどうか. Default: `false`.
* __nTries__ | `number`: 何回試行してもそれ以上の回答は受け付けません ( `provideFeedback` が `none` でない場合). Default: `3`.
* __failureMsg__ | `string`: 誤答通知. Default: `none`.
* __successMsg__ | `string`: 出題通知文. Default: `none`.
* __cellLabels__ | `object`: キーが `row:col` の形式を持つオブジェクトで定義されたセルのラベル。. Default: `{}`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __panelProps__ | `object`: 外側の<Panel /> コンポーネントに渡される追加プロパティ. Default: `{}`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: コールバック関数は、第一のパラメータとして答えを、第二のパラメータとして正しさを示すブール値を指定して、提出時に呼び出されます。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

