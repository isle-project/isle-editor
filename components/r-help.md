# R Help

Make words pull up R documentation in a modal window when clicked.

#### Example:

``` js
<RHelp library="graphics">hist</RHelp> is used to create a histogram.
```

 [Open interactive preview](https://isle.heinz.cmu.edu/components/r-help/)



#### Options:

* __func__: name of the `R function` for which to open the documentation. If not supplied, the content of the `RHelp` tag is assumed to be equal to the name of the function. Default: `''`.
* __library__: name of the R package in which the function resides. Default: `base`.
* __visible__: `boolean` indicating whether the help modal window should be opened at startup. Default: `false`.
