---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

講師がリアルタイムで学生から数値調査データを収集することができる調査コンポーネント。

## オプション

* __question__ | `(string|node)`: 出題. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: は、同じユーザー（匿名の場合はセッション）が複数の回答を提出できるかどうかを制御します). Default: `false`.
* __anonymous__ | `boolean`: 学生が匿名でデータを提出できるようにします。このオプションが "true "に設定されている場合、講師は提出した学生のIDを見ることができませんので注意してください。. Default: `false`.
* __step__ | `(number|string)`: カーソルを入力ボックスの上に置いたときに表示される矢印のステップを示す `string` または `numeric` の値。any'`の場合、ステップは `1` に設定される。. Default: `'any'`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: コールバック関数. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

