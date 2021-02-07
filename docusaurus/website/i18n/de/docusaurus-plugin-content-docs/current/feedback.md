---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Schaltflächen zum Sammeln von Benutzer-Feedback.

## Options

* __confusedMsg__ | `string`: Meldung, die im Tooltip für die verwirrte Schaltfläche angezeigt werden soll. Default: `none`.
* __feedbackMsg__ | `string`: Meldung, die im Tooltip für die Schaltfläche für detailliertes Feedback angezeigt werden soll. Default: `none`.
* __understoodMsg__ | `string`: Meldung, die im Tooltip für die verstandene Schaltfläche angezeigt werden soll. Default: `none`.
* __customFeedback__ | `boolean`: steuert, ob die Komponente benutzerdefinierte Rückmeldungen annimmt. Default: `true`.
* __vertical__ | `boolean`: Schaltflächen werden vertikal angezeigt, wenn auf `true` gesetzt. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

