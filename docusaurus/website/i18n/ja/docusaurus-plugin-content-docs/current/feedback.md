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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Vertical', value: 'Vertical' },
        { label: 'Feedback Everywhere', value: 'feedbackEverywhere' },
        { label: 'Customized Style and Labels', value: 'fullyCustomized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>
  A panel with user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

</TabItem>

<TabItem value="Vertical">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
    vertical
  />
</Panel>
```
</TabItem>

<TabItem value="feedbackEverywhere">

```jsx live
<Panel style={{ width: 680}}>

<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
/>

  to get some user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />

</Panel>
```
</TabItem>

<TabItem value="fullyCustomized">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    style={{ boxShadow: '0 0 12px red' }}
    id="my_feedback"  
    feedbackMsg="You can customize the feedback tooltip!"
    understoodMsg="Tell me you got it!" 
    confusedMsg="Click me if your are confused!" 
  />
</Panel>
```
</TabItem>

</Tabs>
