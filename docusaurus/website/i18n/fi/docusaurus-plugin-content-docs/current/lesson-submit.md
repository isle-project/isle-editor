---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Oppitunnin lopussa näytettävä painike, jota oppilaat voivat klikata. Oletusarvoisesti oppilaiden sähköpostiosoitteeseen lähetetään viesti, joka vahvistaa oppitunnin päättymisen.

## Vaihtoehdot

* __coverage__ | `array<string>`: luettelo tunnisteista, jotka on toimitettava ja sisällytettävä vastausasiakirjaan.. Default: `none`.
* __label__ | `string`: lähetä-painikkeen etiketti. Default: `none`.
* __message__ | `string`: viesti vahvistussähköpostia varten. Default: `''`.
* __requireLogin__ | `boolean`: valvoo, vaaditaanko käyttäjältä kirjautuminen, jotta painike on aktiivinen (anonyymeille käyttäjille ei lähetetä sähköpostivahvistusta).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: valvoo, lähetetäänkö vahvistussähköposti oppitunnin lähettämisen jälkeen. Default: `true`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onClick__ | `function`: callback, joka käynnistetään, kun napsautetaan lähetyspainiketta.. Default: `onClick() {}`.


## Esimerkkejä

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
