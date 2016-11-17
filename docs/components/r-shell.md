# R Shell

An interactive R Shell that can be used to execute R commands in the cloud using [OpenCPU](https://www.opencpu.org/).

Example:

``` html
<RShell
    code="abs(c(-2,3,-1))"
/>
```

## Options

* __code__: R code `string` to be evaluated. Default: `''`.
* __disabled__: `boolean` indicating whether to disable all user inputs and make the code block static. Default: `false`.
* __fontSize__: `number` specifying the used font size in the shell window. Default: `16`.
* __fontFamily__: `string` denoting the font-family used in the shell window. Default: `Courier New`.
* __hints__: For programming questions, an `Array` of `strings` providing guidance on how to approach the problem. Default: `[]`.
* __libraries__: `Array` of R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __lines__: `number` specifying how many lines to display. Default: `5`.
* __onEvaluate__: Callback `function` that is invoked whenever the `Evaluate` button is clicked. Default: `null`.
* __onResult__: Callback `function` that is invoked whenever the result of a code execution is obtained from the cloud. The result `string` is passed as the only argument to the callback function. Default: `null`.
* __prependCode__: `string` or an `Array` of R code to be prepended to the code stored in `code` when evaluating. Default: `''`.
* __solution__: For programming questions, an R code `string` representing the official solution can be supplied. Default: `''`.

