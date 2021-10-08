---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

一个ISLE组件，用于呈现一个多选题。它支持在学习者必须选择一个答案的情况下，以及在可能有多个正确答案且必须选择所有正确答案的情况下。

## 选项

* __question__ | `(string|node)`: 题目显示在选择题的顶部。. Default: `''`.
* __solution__ | `(number|array)`: 表示正确答案的数字，或在学习者能够选择多个答案的情况下，表示正确答案的 "数组"。. Default: `none`.
* __answers__ | `array (required)`: 答案对象的 "数组"。每个答案应该是一个对象，有 "内容 "和 "解释 "字段，表示所显示的答案选项和提交问题后可见的解释，以解释为什么答案正确或不正确。. Default: `none`.
* __hintPlacement__ | `string`: 提示的位置（可以是 `top`、`left`、`right`, 或 `bottom`）。. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __disabled__ | `boolean`: 控制问题是否被禁用. Default: `false`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __provideFeedback__ | `string`: "full"、"incremental "或 "none"。如果 "完整"，则在学习者提交答案后显示包括正确答案在内的反馈；如果 "递增"，则只显示选定答案的反馈；如果 "无"，则不返回任何反馈。. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __displaySolution__ | `boolean`: 控制是否在前面显示解决方案. Default: `false`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 每当所选答案发生变化时调用回调；接收所选问题的索引作为唯一参数（如果问题类型为 "Choose all that apply"，则接收一个数组）。. Default: `onChange(){}`.
* __onSubmit__ | `function`: 提交回答后调用回调. Default: `onSubmit(){}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="singleAnswer"
    values={[
        { label: 'Single Answer', value: 'singleAnswer' },
        { label: 'Formatted Answers', value: 'formattedAnswers' },
        { label: 'Instant Feedback', value: 'instantFeedback' },
        { label: 'Multiple Answers', value: 'multipleAnswers' },
        { label: 'Series of Questions', value: 'aSeries' },
        { label: 'With Hints', value: 'withHints' }
    ]}
    lazy
>

<TabItem value="singleAnswer">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
/>
```

</TabItem>

<TabItem value="formattedAnswers" >

```jsx live
<MultipleChoiceQuestion
    answers={[
        {content: <span>**bold**</span>},
        {content: <span>*italic*</span>},
        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}
    ]}
    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}
/>
```

</TabItem>

<TabItem value="instantFeedback">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
    provideFeedback="full"
/>
```

</TabItem>

<TabItem value="multipleAnswers">

```jsx live
<MultipleChoiceQuestion
    solution={[ 0, 3 ]}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"},
        {content:"kmeans"}
    ]}
    question="Which of the following methods are used for clustering?"
    style={{ background: '#FFF6F3'}}
/>
```

</TabItem>

<TabItem value="aSeries">

```jsx live
<Slider>
    <MultipleChoiceQuestion
        solution={[ 1, 3 ]}
        answers={[
            { content:"George Washington", explanation: "Yes, he was the first president." },
            { content:"Benjamin Franklin", explanation: "He was a founding father."},
            { content:"Ulysses S. Grant", explanation: "General and 18th president." },
            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
        ]}
        question="Who was not a president of the United States?"
        style={{ background: 'lightblue'}}
        feedback={false}
    />
    <MultipleChoiceQuestion
        solution={[ 0, 3 ]}
        answers={[
            {content:"Hierarchical Clustering", explanation:""},
            {content:"LASSO", explanation:""},
            {content:"Multiple regression", explanation:""},
            {content:"kmeans", explanation:""}
        ]}
        question="Which of the following methods are used for clustering?"
        style={{ background: '#FFF6F3'}}
        feedback={false}
    />
</Slider>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<MultipleChoiceQuestion
    solution={[ 1, 3 ]}
    answers={[
        { content:"George Washington", explanation: "Yes, he was the first president." },
        { content:"Benjamin Franklin", explanation: "He was a founding father."},
        { content:"Ulysses S. Grant", explanation: "General and 18th president." },
        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
    ]}
    question="Who was not a president of the United States?"
    style={{ background: 'lightblue'}}
    feedback={false}
    hints={[
        'Washington - that is a no-brainer, isn\'t it?',
        'Franklin was famous for his invention of the lightning rod - so why become more?',
        'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.',
    ]}
    hintPlacement="top"
/>
```

</TabItem>

</Tabs>
