---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Кнопка, которая будет отображаться в конце лекции, чтобы ученики могли нажать на нее. По умолчанию на их электронный адрес отправляется сообщение с подтверждением завершения лекции.

## Options

* __label__ | `string`: кнопка отправки. Default: `none`.
* __message__ | `string`: письмо-подтверждение. Default: `''`.
* __requireLogin__ | `boolean`: контролирует, нужно ли требовать от пользователя, чтобы кнопка была активной (для анонимных пользователей подтверждение по электронной почте не рассылается). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: контролирует, отправлять ли подтверждение по электронной почте при подаче урока. Default: `true`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onClick__ | `function`: вызов обратного вызова при нажатии кнопки подачи заявки. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

