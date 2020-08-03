---
id: r-output
title: R Output
sidebar_label: R Output
---

Component for rendering R output inside an ISLE lesson.

## Example

```jsx live
<ROutput code="runif(10)" />
```

## Options

* __code__ | `string`: R code used to evaluate. Default: `''`.
* __libraries__ | `array`: R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __prependCode__ | `(string|array)`: R code (or `array` of code blocks) to be prepended to the code stored in `code` when evaluating. Default: `''`.
* __onResult__ | `function`: callback invoked with `error` (`null` if operation was successful) and `result` holding R output. Default: `onResult() {}`.
