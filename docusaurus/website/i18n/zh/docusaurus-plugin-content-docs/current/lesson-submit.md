---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

在课程结束时显示的按钮，供学生点击。默认情况下，课程结束的确认信息会发送到学生的电子邮件地址。

## Options

* __label__ | `string`: 提交按钮的标签. Default: `none`.
* __message__ | `string`: 确认邮件. Default: `''`.
* __requireLogin__ | `boolean`: 控制是否需要用户登录才能激活按钮（对于匿名用户，不发送电子邮件确认）。. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: 控制是否在课程提交时发送确认邮件. Default: `true`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onClick__ | `function`: 点击提交按钮时调用的回调。. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

