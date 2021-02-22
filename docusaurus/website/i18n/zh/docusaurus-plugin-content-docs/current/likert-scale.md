---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

一个显示问题的组件和一个供学生回答的五分制。

## 选项

* __question__ | `(string|node)`: 拟印问题. Default: `''`.
* __options__ | `array`: 一个由五个元素组成的数组，其中包含不同刻度级别的标签。. Default: `none`.
* __noMultipleResponses__ | `boolean`: 不允许一个学生提交多份资料. Default: `false`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

