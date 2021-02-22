---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

学生による解答がフリーテキスト形式で提供される問題のためのISLEコンポーネントです。このコンポーネントが**FreeTextQuestion**と異なる点は、集計されたグループデータがリアルタイムで全員に表示されることです。

## オプション

* __question__ | `(string|node)`: 問いかけ. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: は、学生にアンケートに複数回回答させるかどうかを制御します。. Default: `false`.
* __anonymous__ | `boolean`: 学生の回答が匿名で収集されるかどうかを制御する. Default: `false`.
* __rows__ | `number`: 入力フィールドのテキスト行数. Default: `4`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: コールバック関数. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

