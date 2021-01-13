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

* __allowSubmissions__ | `boolean`: controls whether students may submit their reports to the server. Default: `true`.
* __canLoadHTML__ | `boolean`: undefined. Default: `true`.
* __defaultValue__ | `string`: default text of the editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: controls whether to enable text editing for groups (when set to `group`) or for everyone (when set to `collaborative`). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: time in milliseconds after a chunk of recorded voice input is inserted. Default: `5000`.
* __language__ | `string`: language identifier. Default: `'en-US'`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
