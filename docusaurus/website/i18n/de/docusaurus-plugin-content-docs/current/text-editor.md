---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Ein Texteditor zum Schreiben von Notizen oder Berichten. Unterstützt den Export von Notizen als HTML- oder PDF-Dateien sowie die automatische Übermittlung an den ISLE-Server.

## Options

* __allowSubmissions__ | `boolean`: steuert, ob Schüler ihre Berichte an den Server senden dürfen. Default: `true`.
* __canLoadHTML__ | `boolean`: steuert, ob die Schaltfläche zum Laden einer gespeicherten HTML-Datei in den Editor angezeigt werden soll. Default: `true`.
* __defaultValue__ | `string`: Standardtext des Editors. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: steuert den Textbearbeitungsmodus (entweder `individual` für ein persönliches Dokument, `group` für ein Dokument pro Gruppe, `collaborative` für ein einzelnes Dokument für alle oder `cohort` für ein Dokument pro Kohorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: Zeit in Millisekunden nach dem Einfügen eines Chunks der aufgenommenen Spracheingabe. Default: `5000`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

