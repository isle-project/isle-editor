---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

一个选择题组件。

## 选项

* __question__ | `(string|node)`: 问题，学生必须选择一个可用的答案选项。. Default: `''`.
* __options__ | `array (required)`: 可用的答案选项，学生可以从中选择. Default: `none`.
* __solution__ | `number (required)`: "选项 "中解决方案要素的索引。. Default: `none`.
* __preselected__ | `number`: 预选答案选项索引. Default: `0`.
* __inline__ | `boolean`: 控制该组件是否被内嵌渲染。. Default: `false`.
* __hintPlacement__ | `string`: 提示的位置（可以是 "上"、"左"、"右 "或 "下"）。. Default: `'top'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __provideFeedback__ | `boolean`: 表示是否应该在学习者提交答案后显示包括正确答案在内的反馈信息。. Default: `true`.
* __failureMsg__ | `string`: 当学生选择了错误的答案时，要显示的信息。. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: 当学生选择正确的答案时，将显示的信息. Default: `'That's the correct answer!'`.
* __points__ | `number`: 最高分. Default: `10`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 在提交动作后触发的回调。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 提交答案时调用的回调；第一个参数是一个 "boolean"，表示答案是否正确（如果适用，否则为 "null"），第二个参数是提供的答案。. Default: `onSubmit() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={2}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
