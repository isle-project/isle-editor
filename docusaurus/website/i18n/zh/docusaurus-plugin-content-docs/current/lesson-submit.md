---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

在课程结束时显示的按钮，供学生点击。默认情况下，课程结束的确认信息会发送到学生的电子邮件地址。

## 选项

* __coverage__ | `array<string>`: 需要提交并包含在响应文件中的识别器清单. Default: `none`.
* __label__ | `string`: 提交按钮的标签. Default: `none`.
* __message__ | `string`: 确认邮件. Default: `''`.
* __requireLogin__ | `boolean`: 控制是否需要用户登录才能激活按钮（对于匿名用户，不发送电子邮件确认）。. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: 控制是否在课程提交时发送确认邮件. Default: `true`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onClick__ | `function`: 点击提交按钮时调用的回调。. Default: `onClick() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
