---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

调查组件，教师可以实时收集学生的多项选择调查数据。

## Options

* __question__ | `(string|node)`: 字符串. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: 控制是否允许学生多次回答调查问卷。. Default: `false`.
* __anonymous__ | `boolean`: 控制学生的答案是否被匿名化. Default: `false`.
* __answers__ | `array`: 数组，表示学生的答案选择. Default: `[]`.
* __multipleAnswers__ | `boolean`: 表示学生是否可以选择多个答案。请注意，这与allowMultipleAnswers的不同之处在于，allow使学生能够多次提交问题。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSubmit__ | `function`: 提交答案时调用的函数. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

