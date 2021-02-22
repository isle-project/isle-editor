---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Eine Spracheingabekomponente.

## Optionen

* __autorecord__ | `boolean`: steuert, ob die Aufnahme automatisch gestartet werden soll. Default: `false`.
* __defaultValue__ | `string`: Standard-Textwert. Default: `''`.
* __grammars__ | `array`: Sprachgrammatikliste (nicht unterstützt). Default: `[]`.
* __legend__ | `(string|node)`: Legende vor dem Eingabefeld angezeigt. Default: `''`.
* __mode__ | `string`: auf `full` setzen, um ein Texteingabefeld neben dem Mikrofon anzuzeigen, `status`, um nur eine Statusleiste mit den transkribierten Texten anzuzeigen, `microphone`, um nur eine Schaltfläche zum Umschalten der Aufnahme anzuzeigen, oder `none`, wenn die Spracheingabe unsichtbar sein und rein über Hotkeys / Sprachbefehle gesteuert werden soll. Default: `'full'`.
* __maxAlternatives__ | `number`: maximale Anzahl der angebotenen Alternativen pro Spracherkennungsergebnis. Default: `1`.
* __onChange__ | `function`: Callback-Funktion, die aufgerufen wird, wenn der Texteingabewert aktualisiert wird. Default: `onChange() {}`.
* __onClick__ | `function`: Callback-Funktion, die beim Klicken auf die Mikrofontaste aufgerufen wird. Default: `onClick() {}`.
* __onFinalText__ | `function`: Callback-Funktion, die aufgerufen wird, sobald der endgültige Text empfangen wurde. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: Callback-Funktion, die beim Start der Aufnahme aufgerufen wird. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: Callback-Funktion, die aufgerufen wird, sobald die Aufnahme gestoppt ist. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: Callback-Funktion, die mit Textsegmenten aufgerufen wird. Default: `onSegment() {}`.
* __onSubmit__ | `function`: Callback-Funktion beim Absenden eines Texteingabewertes durch Drücken von "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: Texteingabe-Platzhalter. Default: `none`.
* __remote__ | `object`: Objekt mit `start`, `stop` und `toggle` und zugehörigen Hotkeys. Default: `none`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __timeout__ | `number`: Anzahl der Millisekunden, nach denen die Aufnahme zeitlich begrenzt werden soll. Default: `none`.
* __stopTooltip__ | `string`: Tooltip-Meldung, die während der Aufnahme angezeigt wird. Default: `none`.
* __startTooltip__ | `string`: Tooltip-Meldung wird angezeigt, wenn keine Aufnahme erfolgt. Default: `none`.
* __tooltipPlacement__ | `string`: Richtung des Tooltips. Default: `'left'`.
* __width__ | `number`: Spracheingabebreite (in px). Default: `500`.
* __height__ | `number`: Spracheingabehöhe (in px). Default: `36`.


## Beispiele

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



