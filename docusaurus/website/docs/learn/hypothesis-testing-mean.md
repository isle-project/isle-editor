---
id: hypothesis-testing-mean
title: Hypothesis Testing for Means
sidebar_label: Hypothesis Testing for Means
---

A learning component on hypothesis tests for a population mean.

## Examples

```jsx live
<LearnMeanTest />
```

## Options

* __types__ | `array<string>`: the type(s) of test (`One-Sample`, `Two-Sample`) the widget should expose. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __tests__ | `array<string>`: the test(s) exposed by the widget. Default: `[
  'Z-Test',
  'T-Test'
]`.
* __nullHypothesisAsValue__ | `boolean`: always display the null hypothesis as a single value. Default: `false`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
