---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

一个ISLE组件，用于学生以自由文本形式提供答案的问题。该组件与**FreeTextQuestion**的不同之处在于，汇总的小组数据会实时显示给大家。

## Options

* __question__ | `(string|node)`: 问学生的问题. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: 控制是否允许学生多次回答调查问卷。. Default: `false`.
* __anonymous__ | `boolean`: 控制是否匿名收集学生答案. Default: `false`.
* __rows__ | `number`: 输入栏的文字行数. Default: `4`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSubmit__ | `function`: 提交答案时调用的回调函数. Default: `onSubmit() {}`.


## Examples

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

