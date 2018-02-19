# Markdown Editor

`Editor` is an ISLE element that can be used to create md and html files.

#### Example:

``` js
<MarkdownEditor
    defaultValue="Use this as a markdown editor"
    voiceControl />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/markdown-editor/)

#### Options:

* __autoSave__: `boolean` value indicating whether the content of the editor is saved after a certain interval. Defualt: `true`.
* __defaultValue__: `string` indicating the content of the editor. Default: ` `.
* __intervalTime__: `number` value indicating the time interval between autosaves in milliseconds. Default: `3000`.
* __onChange__: Callback `function` invoked whenever the user types a letter. Default: `function(){}`.
* __options__: `object` of options used for the [SimpleMDE](https://simplemede.com) editor which forms the basis of this component. Default: `{}`.
* __submitButton__: `boolean` value indicating whether or not to include a button allowing for students to submit the contents of their editor to the server. Default: `false`.
* __voiceControl__: Emebds voice recognition in the editor (works only in Chrome). Default: `false`.
* __voiceTimeout__: `number` indicating the time in milliseconds until voice control is de-activated. Default: `5000`.

