---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.

## Example

```jsx live
<TextEditor />
```



## Options

* __autoSave__ | `boolean`: controls whether the editor should save the current text to the local storage of the browser at a given time interval. Default: `true`.
* __allowSubmissions__ | `boolean`: controls whether students may submit their reports to the server. Default: `true`.
* __canLoadHTML__ | `boolean`: undefined. Default: `true`.
* __defaultValue__ | `string`: default text of the editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __groupMode__ | `boolean`: controls whether to enable collaborative text editing. Default: `false`.
* __intervalTime__ | `number`: time between auto saves. Default: `10000`.
* __peerReview__ | `{submitButtonLabel,reviewButtonLabel,finalButtonLabel,filterOwners}`: if not null, enables peer review mode in which each submission is sent to another randomly chosen student and vice versa. Default: `none`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: time in milliseconds after a chunk of recorded voice input is inserted. Default: `5000`.
* __language__ | `string`: language identifier. Default: `'en-US'`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
