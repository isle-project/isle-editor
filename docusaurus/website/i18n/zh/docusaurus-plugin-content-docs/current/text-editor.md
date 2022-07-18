---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

一个用于编写笔记或报告的文本编辑器。支持将笔记导出为HTML或PDF文件，以及自动提交到ISLE服务器。

## 选项

* __allowSubmissions__ | `boolean`: 控制学生是否可以向服务器提交他们的报告. Default: `true`.
* __canLoadHTML__ | `boolean`: 控制是否显示将保存的HTML文件加载到编辑器中的按钮。. Default: `true`.
* __defaultValue__ | `string`: 编辑器默认文本. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: 控制编辑器是否应该包括一个历史视图. Default: `true`.
* __mode__ | `string`: 控制文本编辑模式(`individual`代表个人文件，`group`代表每个小组的文件，`collaborative`代表每个人的单一文件，或 `cohort`代表每个群体的文件). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: 对象，用于自定义重置文档的模式(通常不应更改). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: 控制是否在提交时发送带有PDF/HTML输出的确认邮件。. Default: `false`.
* __voiceTimeout__ | `number`: 插入一段语音输入后的时间（毫秒）。. Default: `5000`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
