---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Pulsanti per raccogliere i feedback degli utenti.

## Options

* __confusedMsg__ | `string`: messaggio da visualizzare nel tooltip per il pulsante confuso. Default: `none`.
* __feedbackMsg__ | `string`: messaggio da visualizzare nel tooltip per un feedback dettagliato pulsante di feedback. Default: `none`.
* __understoodMsg__ | `string`: messaggio da visualizzare nel tooltip per la comprensione del pulsante. Default: `none`.
* __customFeedback__ | `boolean`: controlla se il componente accetta il feedback personalizzato. Default: `true`.
* __vertical__ | `boolean`: vengono visualizzati verticalmente se impostati su "true".. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

