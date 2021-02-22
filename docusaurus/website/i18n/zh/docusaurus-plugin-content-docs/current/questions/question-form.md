---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

一个表单组件，将不同的问题组件与一个提交按钮结合在一起。

## 选项

* __buttonLabel__ | `string`: 提交按钮的标签. Default: `none`.
* __onSubmit__ | `function`: 点击提交按钮时调用的回调。. Default: `onSubmit() {}`.


## 例子

```jsx live
<QuestionForm>
    <NumberQuestion
        question="What is 2+2?"
    />
    <FreeTextQuestion
        question="What is the meaning of life?"
    />    
</QuestionForm>
```
