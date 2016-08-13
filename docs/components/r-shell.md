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
* `solution`: For programming questions, an R code `string` representing the official solution can be supplied.
* `libraries`: `Array` of R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* `hints`: For programming questions, an `Array` of `strings` providing guidance on how to approach the problem. Default: `[]`.
* `fontSize`: `number` specifying the used font size in the shell window. Default: `16`.
* `fontFamily`: `string` denoting the font-family used in the shell window. Default: `Courier New`.
