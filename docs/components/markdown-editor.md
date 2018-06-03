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
* __voiceTimeout__: `number` indicating the time in milliseconds until voice control is de-activated. Default: `5000`.
* __toolbarConfig__: `array` of `strings` indicating the arrangement of the toolbar, including vertical separators ('|'). Default value: `['bold', 'italic', 'underline', 'new_line', 'center', '|',' insert_table', 'heading', 'unordered_list', 'ordered_list', 'link', '|', 'open_markdown', 'save', 'submit', '|']`. 
Each element must be some combination of the following elements:
    - `'bold'`
    - `'italic'`
    - `'underline'`
    - `'new_line'`
    - `'center'`
    - `'|'`
    - `'insert_table'`
    - `'heading'`
    - `'unordered_list'`
    - `'ordered_list'`
    - `'link'`
    - `'open_markdown'`
    - `'save'`
    - `'submit'`
    - `'voice'`

