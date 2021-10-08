---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

学生による回答がフリーテキストの形で提供されるべき問題のためのISLEコンポーネント。

## オプション

* __question__ | `(string|node)`: フリーテキストの質問コンポーネントの上部に表示される質問. Default: `''`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'top'`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __solution__ | `(string|node)`: 問題の模範解答. Default: `''`.
* __instantSolution__ | `boolean`: 模範解答の表示をすぐに切り替えられるかどうか. Default: `false`.
* __rows__ | `number`: 学生が答えを入力するためのテキストフィールドの行数. Default: `5`.
* __chat__ | `boolean`: 質問に対してグループチャットを有効にするかどうかを制御します。. Default: `false`.
* __resizable__ | `boolean`: テキストエリアのサイズを変更するかどうかを制御します。. Default: `false`.
* __placeholder__ | `string`: プレースホルダテキスト. Default: `''`.
* __disableSubmitNotification__ | `boolean`: 投稿通知を無効にするかどうかを制御します。. Default: `false`.
* __submissionMsg__ | `string`: 出題通知. Default: `''`.
* __resubmissionMsg__ | `string`: 以後の投稿通知. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: は、学習者が解答を提出した後に、正解を含むフィードバックを表示するかどうかを指定します。. Default: `true`.
* __maxlength__ | `number`: 最大許容文字数. Default: `2500`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: テキストエリアの値が変更されるたびに呼び出されるコールバック; 現在のテキストを唯一の引数として受け取ります。. Default: `onChange() {}`.
* __onSubmit__ | `function`: ユーザが回答を送信する際に呼び出されるコールバック; 送信されたテキストを唯一の引数として受け取ります。. Default: `onSubmit() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
