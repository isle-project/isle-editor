---
id: generator
title: Generator
sidebar_label: Generator
---

用于生成其他组件的组件（例如，自动生成的问题）。

## 选项

* __autoStart__ | `boolean`: 控制是否在挂载后自动调用生成器。. Default: `true`.
* __buttonLabel__ | `(string|node)`: 扣袢. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: 调用的函数，该函数应返回一个新的组件，以便在课程中呈现。. Default: `none`.


## 例子

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
