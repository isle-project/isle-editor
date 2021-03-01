---
id: generator
title: Generator
sidebar_label: Generator
---

A component for generating other components (e.g., automatically generated questions).

## Options

* __autoStart__ | `boolean`: controls whether to automatically invoke the generator after mounting. Default: `true`.
* __buttonLabel__ | `(string|node)`: label for button. Default: `'Generate'`.
* __onGenerate__ | `function (required)`: function invoked that should return a new component to be rendered in the lesson. Default: `none`.


## Examples

[Adaptive Review Questions](https://isle.stat.cmu.edu/adaptive-review/questions/)
