---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

一个ISLE组件，它可以呈现一个具有相同答案的多选题矩阵。

## 选项

* __questions__ | `array (required)`: 千头万绪. Default: `none`.
* __answers__ | `array (required)`: 一系列答案. Default: `none`.
* __title__ | `(string|node)`: 题目，显示在问题汇总表的顶部. Default: `none`.
* __solution__ | `array<array>`: 布尔矩阵，其中的元素表示是否应该勾选相应的单选按钮或复选框。. Default: `none`.
* __type__ | `string`: 问题类型("radio "对应 "选择一个"，"checkbox "对应 "选择所有适用的"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __onChange__ | `function`: 当复选框/单选按钮的值发生变化时调用的回调；调用的是每个答案选项的活动状态的二维布尔数组。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 当用户点击 "提交 "按钮时调用的回调；调用的是每个回答选项的活动状态的二维布尔数组。. Default: `onSubmit() {}`.


## 例子

```jsx live
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```
