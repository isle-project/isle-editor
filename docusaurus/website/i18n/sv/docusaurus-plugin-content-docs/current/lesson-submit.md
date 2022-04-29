---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

En knapp som eleverna kan klicka på i slutet av en lektion. Som standard skickas ett meddelande till elevernas e-postadress som bekräftar att lektionen är avslutad.

## Alternativ

* __coverage__ | `array<string>`: Förteckning över identifierare som ska lämnas in och ingå i svarsdokumentet.. Default: `none`.
* __label__ | `string`: Etikett för knappen "Skicka".. Default: `none`.
* __message__ | `string`: meddelande för bekräftelse via e-post. Default: `''`.
* __requireLogin__ | `boolean`: kontrollerar om användaren måste vara inloggad för att knappen ska vara aktiv (för anonyma användare skickas ingen e-postbekräftelse).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: Kontrollerar om ett bekräftelsemeddelande ska skickas vid inlämning av lektioner.. Default: `true`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onClick__ | `function`: callback som aktiveras när man klickar på inlämningsknappen. Default: `onClick() {}`.


## Exempel

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
