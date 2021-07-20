---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

调查组件，教师可以实时收集学生的数字调查数据。

## 选项

* __question__ | `(string|node)`: 题目. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: 控制同一用户（或匿名的会话）是否可以提交多个答案）。. Default: `false`.
* __anonymous__ | `boolean`: 允许学生匿名提交数据。请注意，如果这个选项被设置为 "true"，那么教师将无法看到提交数据的学生的ID。. Default: `false`.
* __step__ | `(number|string)`: 一个 "字符串 "或 "数字 "值，表示当光标悬停在输入框上方时，箭头的步数。如果"'any'"，则步幅将设置为 "1"。. Default: `'any'`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSubmit__ | `function`: 当学生提交答案时，调用回调函数。. Default: `onSubmit() {}`.


## 例子

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

