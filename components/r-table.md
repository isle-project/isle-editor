# R Table

Component for rendering a R data frame or matrix in a tabular display. This component uses the [fixed-data-package](http://facebook.github.io/fixed-data-table) library under the hood.

#### Example:

``` js
<RTable
    code={`data <- matrix( runif(16), nrow=4, ncol=4)
data`}
/>
```

#### Options:

* __code__: R code `string` from which to form the table. The last line must refer to a `data.frame` or `matrix`. Default: `''`.
* __columnNames__: `array` of `strings` specifying the column names of the table. Setting this attribute overrides any existing column names attached to the R object, which will be used otherwise. Default: `null`.
* __columnWidth__: `number` or `array` of values specifying the exact column width(s) of the table (in px). Default: `null`.
* __maxHeight__:  `number` giving the maximum height of the created table (in px). A vertical scrollbar appears in case not all rows fit. Default: `600`.
* __prependCode__: `string` or an `Array` of R code to be prepended to the code stored in `code` when evaluating. Default: `''`.
* __width__: `number` giving the width of the created plot (in percent). Default: `0.5`.

