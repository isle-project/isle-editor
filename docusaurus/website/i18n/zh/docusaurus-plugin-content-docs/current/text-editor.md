---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

一个用于编写笔记或报告的文本编辑器。支持将笔记导出为HTML或PDF文件，以及自动提交到ISLE服务器。

## Options

* __allowSubmissions__ | `boolean`: 控制学生是否可以向服务器提交他们的报告. Default: `true`.
* __canLoadHTML__ | `boolean`: 控制是否显示将保存的HTML文件加载到编辑器中的按钮。. Default: `true`.
* __defaultValue__ | `string`: 编辑器默认文本. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: 控制文本编辑模式(`individual`代表个人文件，`group`代表每个小组的文件，`collaborative`代表每个人的单一文件，或 `cohort`代表每个群体的文件). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: 对象，用于自定义重置文档的模式(通常不应更改). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: 控制是否在提交时发送带有PDF/HTML输出的确认邮件。. Default: `false`.
* __voiceTimeout__ | `number`: 插入一段语音输入后的时间（毫秒）。. Default: `5000`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

