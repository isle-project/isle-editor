---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

一个要求用户上传图片的问题。

## Options

* __question__ | `(string|node)`: 学生必须将可用的 "选项 "按正确的顺序排列出来。. Default: `''`.
* __hintPlacement__ | `string`: 提示的位置（可以是 "上"、"左"、"右 "或 "下"）。. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __disableSubmitNotification__ | `boolean`: 控制在提交图片后是否应显示通知。. Default: `false`.
* __className__ | `string`: 班名. Default: `''`.
* __sketchpad__ | `object`: 属性传递给<Sketchpad />组件；要渲染sketchpad，至少要传递一个空对象`{}`。. Default: `none`.
* __solution__ | `string`: 模型解决方案的图像URL. Default: `none`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSubmit__ | `function`: 提交答案时调用的回调；唯一的参数是一个 "boolean"，表示元素是否按正确的顺序放置。. Default: `onSubmit() {}`.


## Examples
