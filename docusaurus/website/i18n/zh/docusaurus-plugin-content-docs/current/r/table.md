---
id: r-table
title: R Table
sidebar_label: R Table
---

用于在表格显示中渲染R数据框架或矩阵的组件。

## Options

* __code__ | `string`: 返回一个data.frame的R代码，该frame包含要在表中显示的数据。. Default: `''`.
* __libraries__ | `array`: 当输入的 "code "被执行时，应自动加载的R库。. Default: `[]`.
* __prependCode__ | `(string|array)`: 在评估 "code "时，将R代码 "string"(或R代码块 "array")前置到存储在 "code "中的代码。. Default: `''`.
* __width__ | `number`: 幅宽. Default: `0.5`.


## Examples

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

