---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Tekstiredaktor märkmete või aruannete kirjutamiseks. Toetab märkmete eksportimist HTML- või PDF-failidena ning automaatset esitamist ISLE serverisse.

## Valikud

* __allowSubmissions__ | `boolean`: kontrollib, kas õpilased võivad oma aruandeid serverisse esitada.. Default: `true`.
* __canLoadHTML__ | `boolean`: kontrollib, kas kuvatakse nuppu salvestatud HTML-faili laadimiseks redaktorisse. Default: `true`.
* __defaultValue__ | `string`: redaktori vaikimisi tekst. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: kontrollib, kas toimetaja peaks sisaldama ajaloovaadet. Default: `true`.
* __mode__ | `string`: kontrollib teksti redigeerimise režiimi (kas `individuaalne` isikliku dokumendi puhul, `gruppi` dokumendi puhul rühmade kaupa, `koostöö` ühe dokumendi puhul kõigi jaoks või `koondise` dokumendi puhul kohordi kaupa).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekt dokumendi lähtestamise modaali kohandamiseks (tavaliselt ei tohiks seda muuta). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontrollib, kas saata PDF/HTML-väljundiga kinnituse e-kirju esitamisel.. Default: `false`.
* __voiceTimeout__ | `number`: aeg millisekundites pärast salvestatud häälsisendi tükikese sisestamist. Default: `5000`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
