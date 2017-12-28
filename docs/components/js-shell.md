# JS-Shell

An interactive Javascript Shell that can be used to execute JavascriptCommand. The shell contains a console that displays error messages, warnings etc. 

#### Example:

``` js
<JSShell id = "jseditor" 
        code = "var a = 22;" >
</JSShell>
```

 [Open interactive preview](https://isle.heinz.cmu.edu/components/js-shell/)

#### Options: 
* __chat__: this `boolean` indicates whether student may interact on this component via chat. Default: `false`.
*__code__: a `string` that contains code that will be displayed in the
* __hints__: For programming questions, an `Array` of `strings` providing guidance on how to approach the problem. Default: `[]`.
*__onEvaluate__: callback `function` that returns the code which is executed in the internal eval process
* __solution__: For programming questions, an Javascript code `string` representing the official solution can be supplied. Default: `''`.
* __disabled__: a `boolean` flag that allows the solution just to be seen after all the hints are exhausted
* __vars__: an `object` that can be handed over to the JSShell context (not implemented yet) 