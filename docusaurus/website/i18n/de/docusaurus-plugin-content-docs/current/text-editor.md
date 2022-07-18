---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Ein Texteditor zum Schreiben von Notizen oder Berichten. Unterstützt den Export von Notizen als HTML- oder PDF-Dateien sowie die automatische Übermittlung an den ISLE-Server.

## Optionen

* __allowSubmissions__ | `boolean`: steuert, ob Schüler ihre Berichte an den Server senden dürfen. Default: `true`.
* __canLoadHTML__ | `boolean`: steuert, ob die Schaltfläche zum Laden einer gespeicherten HTML-Datei in den Editor angezeigt werden soll. Default: `true`.
* __defaultValue__ | `string`: Standardtext des Editors. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: steuert, ob der Editor eine Verlaufsansicht enthalten soll. Default: `true`.
* __mode__ | `string`: steuert den Textbearbeitungsmodus (entweder `individual` für ein persönliches Dokument, `group` für ein Dokument pro Gruppe, `collaborative` für ein einzelnes Dokument für alle oder `cohort` für ein Dokument pro Kohorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: Objekt zum Anpassen des Modals zum Zurücksetzen des Dokuments (sollte normalerweise nicht geändert werden). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: steuert, ob bei der Übermittlung Bestätigungs-E-Mails mit PDF/HTML-Ausgabe gesendet werden sollen. Default: `false`.
* __voiceTimeout__ | `number`: Zeit in Millisekunden nach dem Einfügen eines Chunks der aufgenommenen Spracheingabe. Default: `5000`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

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
