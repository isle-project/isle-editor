---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

レッスンの最後に表示されるボタンです。デフォルトでは、レッスンの完了を確認するメッセージが学生のメールアドレスに送信されます。

## オプション

* __coverage__ | `array<string>`: 提出する識別子のリストと回答文書に含まれる識別子のリスト. Default: `none`.
* __label__ | `string`: 送信ボタンのラベル. Default: `none`.
* __message__ | `string`: 確認メールのメッセージ. Default: `''`.
* __requireLogin__ | `boolean`: ボタンを有効にするためにユーザーにサインインを要求するかどうかを制御します（匿名ユーザーの場合、確認のメールを送信しません）。. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: レッスンの提出時に確認メールを送信するかどうかを制御する. Default: `true`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onClick__ | `function`: 投稿ボタンをクリックしたときに呼び出されるコールバック. Default: `onClick() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
