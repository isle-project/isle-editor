---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Un editor de text pentru a scrie note sau rapoarte. Suportă exportul notelor ca fișiere HTML sau PDF, precum și trimiterea automată la serverul ISLE.

## Opțiuni

* __allowSubmissions__ | `boolean`: controlează dacă elevii pot trimite rapoartele lor către server. Default: `true`.
* __canLoadHTML__ | `boolean`: controlează dacă se afișează butonul pentru încărcarea unui fișier HTML salvat în editor. Default: `true`.
* __defaultValue__ | `string`: textul implicit al editorului. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: controlează dacă editorul trebuie să includă o vizualizare a istoricului. Default: `true`.
* __mode__ | `string`: controlează modul de editare a textului (fie `individual` pentru un document personal, `group` pentru un document pe grupuri, `collaborative` pentru un singur document pentru toată lumea, sau `cohort` pentru un document pe cohortă). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: obiect pentru personalizarea modalității de resetare a documentului (de obicei, nu ar trebui să fie modificat). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controlează dacă se trimit e-mailuri de confirmare cu ieșire PDF/HTML la trimitere. Default: `false`.
* __voiceTimeout__ | `number`: timpul în milisecunde după ce este introdusă o bucată de intrare vocală înregistrată. Default: `5000`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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
