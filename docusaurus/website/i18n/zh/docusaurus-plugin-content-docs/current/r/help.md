---
id: r-help
title: R Help
sidebar_label: R Help
---

让单词在点击时在模态窗口中调出R文档。

## 选项

* __func__ | `string`: 打开文档的`R函数'的名称，如果没有提供，则假定`RHelp`标签的内容等于函数的名称。如果没有提供，则假定`RHelp`标签的内容等于函数的名称。. Default: `''`.
* __library__ | `string`: 函数所在的R包的名称。. Default: `'base'`.
* __visible__ | `boolean`: 控制是否应该在启动时打开帮助模式窗口。. Default: `false`.


## 例子

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

