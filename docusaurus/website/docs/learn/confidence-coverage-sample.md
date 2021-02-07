---
id: confidence-coverage-sample
title: Confidence Interval Coverage Sample
sidebar_label: Confidence Interval Coverage Sample
---

A learning component illustrating the Central Limit Theorem (CLT) when sampling from a supplied data set.

## Examples

```jsx live
<LearnConfidenceCoverageSample />
```

## Options

* __data__ | `object (required)`: data object with keys correspond to variable names and values holding the values of respective variables. Default: `none`.
* __samples__ | `(array<number>|number)`: array of numbers or a single numbers denoting the sample sizes that can be drawn. Default: `25`.
* __variables__ | `array (required)`: names of variables that can be sampled from. Default: `none`.
