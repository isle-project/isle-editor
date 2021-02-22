---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

用于在ISLE课程中渲染R图的组件。

## 选项

* __code__ | `string`: 生成图的R代码. Default: `''`.
* __width__ | `(number|string)`: 绘图宽度(单位：px). Default: `600`.
* __height__ | `(number|string)`: 绘图高度(单位：px). Default: `'auto'`.
* __draggable__ | `boolean`: 控制情节是否可以拖动. Default: `false`.
* __fileType__ | `string`: 绘图的文件类型(`png`或`svg`). Default: `'svg'`.
* __libraries__ | `array`: 当输入的 "code "被执行时，应自动加载的R库。. Default: `[]`.
* __prependCode__ | `(string|array)`: `string`或`array`的R代码片断，在评估`code`中存储的代码时，将其前置。. Default: `''`.
* __meta__ | `object`: 绘制元信息. Default: `none`.
* __className__ | `string`: 班名. Default: `''`.
* __onDone__ | `function`: 一旦创建绘图，就会调用带有`err`、`img`和`body`参数的回调。. Default: `onDone() {}`.


## 例子

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

