---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

ユーザーのフィードバックを収集するためのボタン。

## Options

* __confusedMsg__ | `string`: 混乱したボタンのツールチップに表示されるメッセージ. Default: `none`.
* __feedbackMsg__ | `string`: 詳細フィードバックボタンのツールチップに表示されるメッセージ. Default: `none`.
* __understoodMsg__ | `string`: 理解されたボタンのツールチップに表示されるメッセージ. Default: `none`.
* __customFeedback__ | `boolean`: コンポーネントがカスタムフィードバックを受け入れるかどうかを制御します。. Default: `true`.
* __vertical__ | `boolean`: ボタンは、`true` に設定されている場合は垂直に表示されます。. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

