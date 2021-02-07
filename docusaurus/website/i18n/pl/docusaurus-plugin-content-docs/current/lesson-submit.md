---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Przycisk, który ma być wyświetlany na końcu lekcji, na który uczniowie mogą kliknąć. Domyślnie, wiadomość potwierdzająca ukończenie lekcji jest wysyłana na ich adres e-mail.

## Options

* __label__ | `string`: etykieta przycisku przedłożenia. Default: `none`.
* __message__ | `string`: wiadomość do potwierdzenia e-mail. Default: `''`.
* __requireLogin__ | `boolean`: kontroluje, czy wymagane jest zalogowanie użytkownika, aby przycisk był aktywny (w przypadku użytkowników anonimowych nie jest wysyłane potwierdzenie e-mail). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontroluje, czy wysyłać potwierdzenie e-mailem po wysłaniu lekcji. Default: `true`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onClick__ | `function`: wywołanie zwrotne po kliknięciu przycisku zgłoszenia. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

