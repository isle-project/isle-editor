---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.

## Options

* __allowSubmissions__ | `boolean`: controls whether students may submit their reports to the server. Default: `true`.
* __canLoadHTML__ | `boolean`: controls whether to display button for loading a saved HTML file into the editor. Default: `true`.
* __defaultValue__ | `string`: default text of the editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: controls text editing mode (either `individual` for a personal document, `group` for a document per groups, `collaborative` for a single document for everyone, or `cohort` for a document per cohort). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: time in milliseconds after a chunk of recorded voice input is inserted. Default: `5000`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

