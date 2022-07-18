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
* __history__ | `boolean`: контролирует, должен ли редактор включать просмотр истории. Default: `true`.
* __mode__ | `string`: управляет режимом редактирования текста (либо `individual` для личного документа, `group` для документа на группу, `collaborative` для одного документа на всех, либо `cohort` для документа на когорту). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: объект настройки мода для сброса документа (обычно не должен быть изменен). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: контролирует отправку подтверждающих электронных писем с выводом в формате PDF/HTML после отправки. Default: `false`.
* __voiceTimeout__ | `number`: время в миллисекундах после вставки фрагмента записанного голосового ввода. Default: `5000`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
