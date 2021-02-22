---
id: order-question
title: Order Question
sidebar_label: Order Question
---

生徒に要素の集合体を正しい順序に持ってくるように求める順序問題のコンポーネントです。

## Options

* __question__ | `(string|node)`: 択一問題. Default: `''`.
* __options__ | `array (required)`: 序列を正す. Default: `none`.
* __provideFeedback__ | `boolean`: は、提出された答えが正しいかどうかを表示する通知を表示するかどうかを制御します。. Default: `true`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __failureMsg__ | `string`: 学生が間違った答えを提出したときに表示されるメッセージ. Default: `none`.
* __successMsg__ | `string`: 学生が正解を提出したときに表示されるメッセージ. Default: `none`.
* __disableSubmitNotification__ | `boolean`: 投稿通知を無効にするかどうかを制御します。. Default: `false`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: これは要素をドラッグした後にトリガされるコールバックで、2つのパラメータを持ちます: 要素が正しい順序で配置されているかどうかを示す `boolean` と、現在の順序を示す `array` です。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 回答が提出されたときに呼び出されるコールバック; 唯一のパラメータとして、要素が正しい順序で配置されているかどうかを示す `boolean` を持ちます。. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
