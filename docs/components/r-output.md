# R Output

Component for rendering R output inside an ISLE lesson.

#### Example:

``` js
<ROutput code={this.state.code} />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/r-output/)

#### Options:

* __code__: R code used to evaluate. Default: `''`.
* __libraries__: `Array` of R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __prependCode__: `string` or an `Array` of R code to be prepended to the code stored in `code` when evaluating. Default: `''`.
