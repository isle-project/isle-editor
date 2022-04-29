---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

一个数字问题的组成部分。

## 选项

* __question__ | `(string|node)`: 号码题. Default: `''`.
* __hintPlacement__ | `string`: 提示的位置（可以是 `top`、`left`、`right`, 或 `bottom`）。. Default: `'top'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __solution__ | `(number|array<number>)`: 问题的数字答案（如果提供数组，则提供多个正确答案. Default: `none`.
* __digits__ | `number`: 学生提供的答案必须与解决方案相匹配才能被认为是正确的数字。设置为0可以作为一个整数进行匹配。如果设置为空，它将搜索一个完全匹配的答案。. Default: `3`.
* __max__ | `number`: 最大允许输入值. Default: `null`.
* __min__ | `number`: 最小允许输入值. Default: `null`.
* __defaultValue__ | `number`: 预先选择的数字输入值. Default: `none`.
* __provideFeedback__ | `boolean`: 表示是否应该在学习者提交答案后显示包括正确答案在内的反馈信息。. Default: `true`.
* __submitAfterFeedback__ | `boolean`: 控制一个人是否应该能够在解决方案被揭示后重新提交。. Default: `false`.
* __nTries__ | `number`: 在多少次尝试后，应提供反馈（如果`provideFeedback`为`true`）。. Default: `1`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 回调，在数字字段的值改变后触发；接收当前值作为唯一的参数。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 提交答案时调用的回调；第一个参数是一个 "boolean"，表示答案是否正确（如果适用，否则为 "null"），第二个参数是提供的答案。. Default: `onSubmit() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
