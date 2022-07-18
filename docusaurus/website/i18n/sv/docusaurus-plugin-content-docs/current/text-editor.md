---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

En textredigerare för att skriva anteckningar eller rapporter. Stödjer export av anteckningar som HTML- eller PDF-filer samt automatisk inlämning till ISLE-servern.

## Alternativ

* __allowSubmissions__ | `boolean`: kontrollerar om eleverna får skicka sina rapporter till servern. Default: `true`.
* __canLoadHTML__ | `boolean`: kontrollerar om knappen för att ladda en sparad HTML-fil i redigeraren ska visas eller inte. Default: `true`.
* __defaultValue__ | `string`: standardtext för redaktören. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: kontrollerar om redigeraren ska innehålla en historikvy. Default: `true`.
* __mode__ | `string`: kontrollerar textredigeringsläget (antingen `individual` för ett personligt dokument, `group` för ett dokument per grupp, `collaborative` för ett enda dokument för alla, eller `cohort` för ett dokument per grupp).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekt för anpassning av modalfunktionen för återställning av dokumentet (bör vanligtvis inte ändras). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: Kontrollerar om det ska skickas e-postmeddelanden med PDF-/HTML-utgång vid inlämning.. Default: `false`.
* __voiceTimeout__ | `number`: Tid i millisekunder efter att en bit av inspelad röst har lagts in.. Default: `5000`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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
