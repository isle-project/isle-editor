# R Output

Component for rendering R output inside an ISLE lesson.

#### Example:

``` js
<ROutput code="runif(10)" />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/r-output/)

#### Options:

* __code__ | `string`: R code used to evaluate. Default: `''`.
* __libraries__ | `array`: R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __prependCode__ | `(string|array)`: R code (or `array` of code blocks) to be prepended to the code stored in `code` when evaluating. Default: `''`.
