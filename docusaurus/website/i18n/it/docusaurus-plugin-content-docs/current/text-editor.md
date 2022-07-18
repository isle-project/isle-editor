---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Un editor di testo per scrivere note o rapporti. Supporta l'esportazione di note come file HTML o PDF, nonché l'invio automatico al server ISLE.

## Opzioni

* __allowSubmissions__ | `boolean`: controlla se gli studenti possono inviare i loro rapporti al server. Default: `true`.
* __canLoadHTML__ | `boolean`: controlla se visualizzare il pulsante per caricare un file HTML salvato nell'editor. Default: `true`.
* __defaultValue__ | `string`: testo predefinito dell'editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: controlla se l'editor deve includere una vista della cronologia. Default: `true`.
* __mode__ | `string`: controlla la modalità di modifica del testo (sia `individual` per un documento personale, `group` per un documento per gruppi, `collaborative` per un singolo documento per tutti, o `cohort` per un documento per coorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: oggetto per personalizzare il modale per il ripristino del documento (di solito non dovrebbe essere cambiato). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controlla se inviare e-mail di conferma con l'output PDF/HTML al momento dell'invio. Default: `false`.
* __voiceTimeout__ | `number`: tempo in millisecondi dopo l'inserimento di una porzione di voce registrata. Default: `5000`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

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
