---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

複数のセレクトボックスで構成された回答付きの問題。

## Options

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
* __nTries__ | `number`: 何回試行してもそれ以上の回答は受け付けません ( `provideFeedback` が `none` でない場合). Default: `1`.
* __failureMsg__ | `string`: 誤答通知. Default: `none`.
* __successMsg__ | `string`: 出題通知文. Default: `none`.
* __cellLabels__ | `object`: キーが `row:col` の形式を持つオブジェクトで定義されたセルのラベル。. Default: `{}`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: コールバック関数は、第一のパラメータとして答えを、第二のパラメータとして正しさを示すブール値を指定して、提出時に呼び出されます。. Default: `onSubmit() {}`.


## Examples

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
