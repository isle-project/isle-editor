---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Przycisk, który ma być wyświetlany na końcu lekcji, na który uczniowie mogą kliknąć. Domyślnie, wiadomość potwierdzająca ukończenie lekcji jest wysyłana na ich adres e-mail.

## Opcje

* __coverage__ | `array<string>`: lista identyfikatorów, które należy przekazać i zawrzeć w dokumencie odpowiedzi. Default: `none`.
* __label__ | `string`: etykieta przycisku przedłożenia. Default: `none`.
* __message__ | `string`: wiadomość do potwierdzenia e-mail. Default: `''`.
* __requireLogin__ | `boolean`: kontroluje, czy wymagane jest zalogowanie użytkownika, aby przycisk był aktywny (w przypadku użytkowników anonimowych nie jest wysyłane potwierdzenie e-mail). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontroluje, czy wysyłać potwierdzenie e-mailem po wysłaniu lekcji. Default: `true`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onClick__ | `function`: wywołanie zwrotne po kliknięciu przycisku zgłoszenia. Default: `onClick() {}`.


## Przykłady

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
