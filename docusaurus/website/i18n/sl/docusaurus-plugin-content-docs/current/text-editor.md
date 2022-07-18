---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Urejevalnik besedila za pisanje opomb ali poročil. Podpira izvoz zapiskov kot datotek HTML ali PDF ter samodejno pošiljanje na strežnik ISLE.

## Možnosti

* __allowSubmissions__ | `boolean`: nadzoruje, ali lahko učenci svoja poročila pošljejo v strežnik.. Default: `true`.
* __canLoadHTML__ | `boolean`: nadzoruje, ali se prikaže gumb za nalaganje shranjene datoteke HTML v urejevalnik.. Default: `true`.
* __defaultValue__ | `string`: privzeto besedilo urejevalnika. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: določa, ali naj urejevalnik vključuje pogled zgodovine.. Default: `true`.
* __mode__ | `string`: nadzoruje način urejanja besedila (`individual` za osebni dokument, `group` za dokument za skupine, `collaborative` za en dokument za vse ali `cohort` za dokument za kohorto).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: predmet za prilagajanje modalnega okna za ponastavitev dokumenta (običajno se ne sme spreminjati).. Default: `none`.
* __sendSubmissionEmails__ | `boolean`: nadzoruje, ali naj se ob predložitvi pošljejo potrditvena e-poštna sporočila z izpisom PDF/HTML.. Default: `false`.
* __voiceTimeout__ | `number`: čas v milisekundah po vstavitvi posnetega glasovnega vnosa. Default: `5000`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
