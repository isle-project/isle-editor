---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Текстов редактор за писане на бележки или отчети. Поддържа експортиране на бележките като HTML или PDF файлове, както и автоматично изпращане към сървъра ISLE.

## Опции

* __allowSubmissions__ | `boolean`: контролира дали учениците могат да изпращат отчетите си на сървъра.. Default: `true`.
* __canLoadHTML__ | `boolean`: контролира дали да се показва бутон за зареждане на запазен HTML файл в редактора. Default: `true`.
* __defaultValue__ | `string`: текст по подразбиране на редактора. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: контролира дали редакторът да включва изглед на историята. Default: `true`.
* __mode__ | `string`: контролира режима на редактиране на текст (или `индивидуален` за личен документ, или `групов` за документ за групи, или `съвместен` за единен документ за всички, или `кохорта` за документ за кохорта).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: обект за персонализиране на модала за нулиране на документа (обикновено не трябва да се променя). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: контролира дали да се изпращат имейли за потвърждение с PDF/HTML изход при подаване.. Default: `false`.
* __voiceTimeout__ | `number`: време в милисекунди след вмъкването на част от записания гласов вход. Default: `5000`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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
