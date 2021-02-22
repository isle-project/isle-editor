---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

一道题的答案由多个选择框组成。

## 选项

* __question__ | `(string|node)`: 在选择问题矩阵的顶部显示的问题。. Default: `''`.
* __rows__ | `array`: 行标签. Default: `[]`.
* __cols__ | `array`: 列标签. Default: `[]`.
* __options__ | `object`: 对象的键值对，键值形式为`row:col`，例如`0:0`、`0:1`、`1:0`等，其相应的值是各个选择题可能的答案选择数组。. Default: `{}`.
* __solution__ | `object`: 含有键值对的解决方案对象，键值形式为`row:col`，例如`0:0`，`0:1`，`1:0`等，其相应的值是相应`选项`数组中正确答案元素的索引。. Default: `{}`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __hintPlacement__ | `string`: 提示的位置（可以是 "上"、"左"、"右 "或 "下"）。. Default: `'bottom'`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __provideFeedback__ | `string`: 是提供 "无 "反馈，还是对提交的答案提供 "个别 "反馈，还是对所有问题提供 "总体 "反馈；. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: 是否允许在每个选择框中不做选择的情况下进行提交。. Default: `false`.
* __nTries__ | `number`: 经过多少次尝试后，不再接受进一步的答案（如果`provideFeedback`不是`none`）。. Default: `1`.
* __failureMsg__ | `string`: 提交错误答案时显示的通知文字. Default: `none`.
* __successMsg__ | `string`: 提交正确答案时显示的通知文字. Default: `none`.
* __cellLabels__ | `object`: 对象定义的单元格的标签，键值格式为 "row:col"。. Default: `{}`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onSubmit__ | `function`: 提交时调用的回调函数，第一个参数是答案，第二个参数是表示正确性的布尔值。. Default: `onSubmit() {}`.


## 例子

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
