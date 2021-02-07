---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un pulsante da visualizzare alla fine di una lezione su cui gli studenti possono cliccare. Per impostazione predefinita, un messaggio di conferma del completamento della lezione viene inviato al loro indirizzo e-mail.

## Options

* __label__ | `string`: etichetta del pulsante di invio. Default: `none`.
* __message__ | `string`: messaggio per e-mail di conferma. Default: `''`.
* __requireLogin__ | `boolean`: controlla se richiedere all'utente l'accesso per l'attivazione del pulsante (per gli utenti anonimi non viene inviata alcuna conferma via e-mail). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controlla se inviare un'e-mail di conferma all'invio della lezione. Default: `true`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onClick__ | `function`: richiamata quando si clicca sul pulsante di invio. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

