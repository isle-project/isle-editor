# JavaScript Shell

An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc.

#### Example:

``` js
<JSShell id = "jseditor" 
        code = "var a = 22;" >
</JSShell>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/js-shell/)

#### Options:

* __code__ | `string`: JavaScript code to be evaluated. Default: `''`.
* __solution__ | `string`: for programming questions, code `string` representing the official solution for the problem. Default: `''`.
* __hints__ | `array`: for programming questions, an array of hints providing guidance on how to approach the problem. Default: `[]`.
* __precompute__ | `boolean`: controls whether the default code should be executed once the component has mounted. Default: `false`.
* __chat__ | `boolean`: controls whether group chat functionality should be enabled. Default: `false`.
* __check__ | `string`: appended JavaScript code to check the `code` to be evaluated. Default: `none`.
* __disabled__ | `boolean`: controls whether to disable all user inputs and make the code block static. Default: `false`.
* __lines__ | `number`: number of lines to display. Default: `5`.
* __fontFamily__ | `string`: undefined. Default: `'Courier New'`.
* __fontSize__ | `number`: undefined. Default: `16`.
* __onEvaluate__ | `function`: callback invoked whenever the `Evaluate` button is clicked. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope object with variables that should be made available to evaluated `code`. Default: `none`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
