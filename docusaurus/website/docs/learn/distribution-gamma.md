---
id: distribution-gamma
title: Gamma Distribution
sidebar_label: Gamma Distribution
---

A learning component for calculating probabilities of a gamma distribution.

## Options

* __domain__ | `object`: object of `x` and `y` arrays with the starting and end points for the respective axis. Default: `none`.
* __scaleParameterization__ | `boolean`: controls whether to use the parameterization involving a shape and scale parameter instead of shape and rate. Default: `false`.
* __step__ | `(number|string)`: step size of the scroll input. Default: `0.01`.
* __symbols__ | `boolean`: whether to display Greek symbols for parameters. Default: `true`.
* __tabs__ | `array<string>`: which tabs to display (either `smaller`, `greater`, or `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<LearnGammaDistribution />
```

