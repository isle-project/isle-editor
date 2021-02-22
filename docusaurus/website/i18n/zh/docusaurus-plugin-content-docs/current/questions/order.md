---
id: order-question
title: Order Question
sidebar_label: Order Question
---

顺序问题组件，要求学生把一个元素的集合归入正确的顺序。

## 选项

* __question__ | `(string|node)`: 学生必须将可用的 "选项 "按正确的顺序排列出来。. Default: `''`.
* __options__ | `array (required)`: 课文数组，学生必须将课文按正确的顺序排列（假设为提供的顺序）。. Default: `none`.
* __provideFeedback__ | `boolean`: 控制是否显示提交的答案是否正确的通知。. Default: `true`.
* __hintPlacement__ | `string`: 提示的位置（可以是 "上"、"左"、"右 "或 "下"）。. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __failureMsg__ | `string`: 当学生提交错误答案时，将显示的信息。. Default: `none`.
* __successMsg__ | `string`: 当学生提交正确答案时，将显示的信息. Default: `none`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 回调，在拖动元素后触发；有两个参数：一个 "boolean "表示元素是否按正确的顺序放置，另一个 "array "表示当前的顺序。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 提交答案时调用的回调；唯一的参数是一个 "boolean"，表示元素是否按正确的顺序放置。. Default: `onSubmit() {}`.


## 例子

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
