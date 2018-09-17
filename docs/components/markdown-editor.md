# Markdown Editor

A markdown editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.

#### Example:

``` js
<MarkdownEditor />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/markdown-editor/)

#### Options:

* __defaultValue__ | `string`: default text of the editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __toolbarConfig__ | `array`: array of toolbar element identifiers to be displayed. Default: `[
  'bold',
  'italic',
  'underline',
  'font_size',
  'new_line',
  'center',
  '|',
  'insert_table',
  'heading',
  'unordered_list',
  'ordered_list',
  'link',
  'insert_columns',
  '|',
  'title_insert',
  'preview',
  'side_by_side',
  'fullscreen',
  '|',
  'open_markdown',
  'save',
  'submit',
  '|',
  'voice',
  'guides'
]`.
* __options__ | `object`: options passed to the SimpleMDE constructor, the package on which this component is based; see their documentation for available options. Default: `{}`.
* __autoSave__ | `boolean`: controls whether the editor should save the current text to the local storage of the browser at a given time interval. Default: `true`.
* __intervalTime__ | `number`: time between auto saves. Default: `60000`.
* __voiceControl__ | `boolean`: controls whether voice input is enabled. Default: `false`.
* __voiceTimeout__ | `number`: time in milliseconds after a chunk of recorded voice input is inserted. Default: `5000`.
* __language__ | `string`: language identifier. Default: `'en-US'`.
* __plots__ | `array`: undefined. Default: `[]`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked when editor text changes; receives the current text as its sole argument. Default: `onChange() {}`.
