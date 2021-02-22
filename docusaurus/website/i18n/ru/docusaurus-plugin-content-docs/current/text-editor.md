---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Текстовый редактор для написания заметок или отчетов. Поддерживает экспорт заметок в виде HTML или PDF файлов, а также автоматическую отправку на ISLE сервер.

## Варианты

* __allowSubmissions__ | `boolean`: контролирует, могут ли студенты передавать свои отчёты на сервер. Default: `true`.
* __canLoadHTML__ | `boolean`: управляет отображением кнопки для загрузки сохраненного HTML-файла в редактор. Default: `true`.
* __defaultValue__ | `string`: текст редактора по умолчанию. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: управляет режимом редактирования текста (либо `individual` для личного документа, `group` для документа на группу, `collaborative` для одного документа на всех, либо `cohort` для документа на когорту). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: объект настройки мода для сброса документа (обычно не должен быть изменен). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: контролирует отправку подтверждающих электронных писем с выводом в формате PDF/HTML после отправки.. Default: `false`.
* __voiceTimeout__ | `number`: время в миллисекундах после вставки фрагмента записанного голосового ввода. Default: `5000`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<TextEditor />
```

