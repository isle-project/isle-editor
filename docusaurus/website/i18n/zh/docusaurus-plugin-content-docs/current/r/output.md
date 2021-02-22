---
id: r-output
title: R Output
sidebar_label: R Output
---

用于在ISLE课程中渲染R输出的组件。

## 选项

* __code__ | `string`: 用于评估的R代码. Default: `''`.
* __libraries__ | `array`: 当输入的 "code "被执行时，应自动加载的R库。. Default: `[]`.
* __prependCode__ | `(string|array)`: 在评估 "code "中存储的代码时，要把R代码（或代码块的 "数组"）放在前面。. Default: `''`.
* __onPlots__ | `function`: 回调调用任何生成的绘图. Default: `onPlots() {}`.
* __onResult__ | `function`: 调用 "error"(如果操作成功则为 "null")和 "result "的回调，保留R的输出。. Default: `onResult() {}`.


## 例子

```jsx live
<ROutput code="runif(10)" />
```

