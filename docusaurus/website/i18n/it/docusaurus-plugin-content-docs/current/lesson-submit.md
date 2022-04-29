---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un pulsante da visualizzare alla fine di una lezione su cui gli studenti possono cliccare. Per impostazione predefinita, un messaggio di conferma del completamento della lezione viene inviato al loro indirizzo e-mail.

## Opzioni

* __coverage__ | `array<string>`: elenco di identificatori da presentare e includere nel documento di risposta. Default: `none`.
* __label__ | `string`: etichetta del pulsante di invio. Default: `none`.
* __message__ | `string`: messaggio per e-mail di conferma. Default: `''`.
* __requireLogin__ | `boolean`: controlla se richiedere all'utente l'accesso per l'attivazione del pulsante (per gli utenti anonimi non viene inviata alcuna conferma via e-mail). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controlla se inviare un'e-mail di conferma all'invio della lezione. Default: `true`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onClick__ | `function`: richiamata quando si clicca sul pulsante di invio. Default: `onClick() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
