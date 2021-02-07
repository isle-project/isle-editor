---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

レッスンの最後に表示されるボタンです。デフォルトでは、レッスンの完了を確認するメッセージが学生のメールアドレスに送信されます。

## Options

* __label__ | `string`: 送信ボタンのラベル. Default: `none`.
* __message__ | `string`: 確認メールのメッセージ. Default: `''`.
* __requireLogin__ | `boolean`: ボタンを有効にするためにユーザーにサインインを要求するかどうかを制御します（匿名ユーザーの場合、確認のメールを送信しません）。. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: レッスンの提出時に確認メールを送信するかどうかを制御する. Default: `true`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onClick__ | `function`: 投稿ボタンをクリックしたときに呼び出されるコールバック. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

