# R Shell

An interactive R Shell that can be used to execute R commands in the cloud using [OpenCPU](https://www.opencpu.org/).

Example:

``` html
<RShell
    code="abs(c(-2,3,-1))"
/>
```

## Options

* `code`: R code `string` to be evaluated. Default: `''`.
* `lines`: `number` specifying how many lines to display. Default: `5`.
* `onResult`: Callback `function` that is invoked whenever the result of a code execution is obtained from the cloud. The result `string` is passed as the only argument to the callback function. Default: `null`.
