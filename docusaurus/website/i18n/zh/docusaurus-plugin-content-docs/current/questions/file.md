---
id: file-question 
title: File Question
sidebar_label: File Question
---

一个要求用户上传文件的问题。

## 选项

* __question__ | `(string|node)`: 显示在文件问题组件顶部的问题. Default: `''`.
* __hintPlacement__ | `string`: 提示的位置（"顶部"、"左侧"、"右侧 "或 "底部"）。. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 就如何回答问题提供指导的提示. Default: `[]`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天工具. Default: `false`.
* __accept__ | `string`: 逗号分隔的[唯一的文件标识符](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)列表，可被组件接受（例如，'image/*', '.pdf' or 'audio/*'）。. Default: `'*/*'`.
* __until__ | `Date`: 直到允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 分数上限. Default: `10`.
* __className__ | `string`: 类别名称. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 在收到文件时调用的回调. Default: `onChange() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Only PDFs', value: 'onlyPDF' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FileQuestion question="You may upload a file." feedback={false}  />
```
</TabItem>

<TabItem value="onlyPDF">

```jsx live
<FileQuestion question="Please upload a PDF file." feedback={false} accept=".pdf" />
```

</TabItem>

</Tabs>
