---
id: range-question
title: Range Question
sidebar_label: Range Question
---

一个要求学生提供下端和上端点的范围问题部分。

## 选项

* __question__ | `(string|node)`: 题目. Default: `''`.
* __solution__ | `array<number>`: 包含正确范围端点的两元素数组。. Default: `none`.
* __hintPlacement__ | `string`: 提示的位置（可以是 `top`、`left`、`right`, 或 `bottom`）。. Default: `'top'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __labels__ | `array`: 除 "较低"和 "上层"以外的自定义标签的双元素数组。. Default: `none`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __digits__ | `number`: 解决方案和用户提供的答案之间必须匹配的数字数量。如果没有给定或设置为空，则该组件检查是否严格相同。如果设置为0，则检查整数相等。. Default: `3`.
* __max__ | `number`: 最大输入值. Default: `null`.
* __min__ | `number`: 最小输入值. Default: `null`.
* __provideFeedback__ | `boolean`: 表示是否应该在学习者提交答案后显示包括正确答案在内的反馈信息。. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: 控制是否可以提交多个答案. Default: `false`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChangeLower__ | `function`: 在用户改变下限后触发的回调。. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: 在用户改变上界后触发的回调。. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: 在用户改变边界后触发的回调（以下限和上限为参数）。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 提交答案时调用的回调；第一个参数是一个 "boolean"，表示答案是否正确（如果适用，否则为 "null"），第二个参数是提供的答案。. Default: `onSubmit() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
