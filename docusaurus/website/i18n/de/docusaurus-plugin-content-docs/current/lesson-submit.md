---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Eine Schaltfläche, die am Ende einer Lektion angezeigt wird und auf die die Schüler klicken können. Standardmäßig wird eine Nachricht zur Bestätigung des Abschlusses der Lektion an ihre E-Mail-Adresse gesendet.

## Options

* __label__ | `string`: Beschriftung der Submit-Taste. Default: `none`.
* __message__ | `string`: Nachricht für Bestätigungsmail. Default: `''`.
* __requireLogin__ | `boolean`: steuert, ob der Benutzer angemeldet sein muss, damit die Schaltfläche aktiv ist (für anonyme Benutzer wird keine E-Mail-Bestätigung versendet). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: steuert, ob bei Lektionsübermittlung eine Bestätigungs-E-Mail gesendet werden soll. Default: `true`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onClick__ | `function`: Callback, der beim Klicken auf die Schaltfläche "Senden" aufgerufen wird. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

