---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Teksta redaktors piezīmju vai ziņojumu rakstīšanai. Atbalsta piezīmju eksportēšanu HTML vai PDF formātā, kā arī automātisku nosūtīšanu uz ISLE serveri.

## Iespējas

* __allowSubmissions__ | `boolean`: kontrolē, vai skolēni var iesniegt savus ziņojumus serverī.. Default: `true`.
* __canLoadHTML__ | `boolean`: kontrolē, vai tiek rādīta poga saglabātā HTML faila ielādēšanai redaktorā.. Default: `true`.
* __defaultValue__ | `string`: redaktora noklusējuma teksts. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: nosaka, vai redaktoram jāiekļauj vēstures skats.. Default: `true`.
* __mode__ | `string`: kontrolē teksta rediģēšanas režīmu (`individuāls` personīgajam dokumentam, `grupa` dokumentam katrai grupai, `kooperatīvs` dokumentam visiem vai `kohortas` dokumentam katrai grupai).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekts, kas paredzēts modālā modāla pielāgošanai dokumenta atiestatīšanai (parasti nav jāmaina).. Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontrolē, vai pēc iesniegšanas sūtīt apstiprinājuma e-pasta ziņojumus ar PDF/HTML izvades failiem.. Default: `false`.
* __voiceTimeout__ | `number`: laiks milisekundēs pēc ierakstītā balss ievades fragmenta ievietošanas.. Default: `5000`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
