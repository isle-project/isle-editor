---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

一个ISLE组件，它渲染一个问题，在这个问题中，学习者必须以正确的方式将两个列表中的元素相互匹配。

## 选项

* __question__ | `(string|node)`: 问题将显示在匹配列表问题组件的顶部。. Default: `''`.
* __elements__ | `array<{a,b}>`: 一个 "数组"，其中包含显示在自由文本问题组件顶部的正确对子。每个 "array "元素必须是一个具有 "a "和 "b "属性的 "对象"；只提供具有 "a "或 "b "属性的元素来添加分散注意力的答案。. Default: `[]`.
* __hintPlacement__ | `string`: 提示的位置（可以是 `top`、`left`、`right`, 或 `bottom`）。. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __provideFeedback__ | `boolean`: 表示在学习者提交答案后，是否应该访问解决方案。. Default: `true`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __colorScale__ | `array`: 如果设置，则瓷砖使用提供的颜色。. Default: `none`.
* __shuffle__ | `string`: 指定是否对元素必须匹配的 `left`、`right`, 或 "两 "列进行洗牌；提供 "none "或任何其他值，不对两边的元素进行洗牌（在没有解决方案的情况下可能有用）。. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __submissionMsg__ | `string`: 学习者首次提交答案时显示的通知。. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: 第一次提交后，所有提交的通知都会显示. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 当学生改变答案时调用的回调. Default: `onChange() {}`.
* __onSubmit__ | `function`: 当学生提交答案时调用回调。. Default: `onSubmit() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
