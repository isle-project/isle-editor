# Markdown Editor

`Editor` is an ISLE element that can be used to create md and html files.

#### Example:

``` js
<Editor
    defaultValue="Use this as a markdown editor"
    voiceControl />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/markdown-editor/)

#### Options:

* __defaultValue__: `string` indicating the content of the editor. Default: ` `.
* __onChange__: Callback `function` invoked whenever the user types a letter. Default: `function(){}`.
* __options__: `object` of options used for the [SimpleMDE](https://simplemede.com) editor which forms the basis of this component. Default: `{}`.
* __voiceControl__: Emebds voice recognition in the editor (works only in Chrome).
