---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Textový editor na písanie poznámok alebo správ. Podporuje export poznámok ako súborov HTML alebo PDF, ako aj automatické odosielanie na server ISLE.

## Možnosti

* __allowSubmissions__ | `boolean`: kontroluje, či študenti môžu odosielať svoje správy na server.. Default: `true`.
* __canLoadHTML__ | `boolean`: kontroluje, či sa má zobraziť tlačidlo na načítanie uloženého súboru HTML do editora.. Default: `true`.
* __defaultValue__ | `string`: predvolený text editora. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: kontroluje, či má editor obsahovať zobrazenie histórie.. Default: `true`.
* __mode__ | `string`: ovláda režim úpravy textu (buď `individuálny` pre osobný dokument, `skupinový` pre dokument pre skupiny, `spolupráca` pre jeden dokument pre všetkých alebo `skupinový` pre dokument pre skupinu). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekt na prispôsobenie modálneho okna na resetovanie dokumentu (zvyčajne by sa nemal meniť). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontroluje, či sa majú po odoslaní odoslať potvrdzujúce e-maily s výstupom PDF/HTML.. Default: `false`.
* __voiceTimeout__ | `number`: čas v milisekundách po vložení časti nahraného hlasového vstupu. Default: `5000`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
