---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Eine Schaltfläche, die am Ende einer Lektion angezeigt wird und auf die die Schüler klicken können. Standardmäßig wird eine Nachricht zur Bestätigung des Abschlusses der Lektion an ihre E-Mail-Adresse gesendet.

## Optionen

* __coverage__ | `array<string>`: Liste der zu übermittelnden und in das Antwortdokument aufzunehmenden Identifikatoren. Default: `none`.
* __label__ | `string`: Beschriftung der Submit-Taste. Default: `none`.
* __message__ | `string`: Nachricht für Bestätigungsmail. Default: `''`.
* __requireLogin__ | `boolean`: steuert, ob der Benutzer angemeldet sein muss, damit die Schaltfläche aktiv ist (für anonyme Benutzer wird keine E-Mail-Bestätigung versendet). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: steuert, ob bei Lektionsübermittlung eine Bestätigungs-E-Mail gesendet werden soll. Default: `true`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onClick__ | `function`: Callback, der beim Klicken auf die Schaltfläche "Senden" aufgerufen wird. Default: `onClick() {}`.


## Beispiele

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
