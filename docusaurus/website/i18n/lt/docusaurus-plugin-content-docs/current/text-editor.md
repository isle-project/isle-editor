---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Teksto redaktorius, skirtas užrašams ar ataskaitoms rašyti. Palaikomas užrašų eksportavimas į HTML arba PDF failus, taip pat automatinis pateikimas į ISLE serverį.

## Parinktys

* __allowSubmissions__ | `boolean`: kontroliuoja, ar mokiniai gali pateikti savo ataskaitas į serverį.. Default: `true`.
* __canLoadHTML__ | `boolean`: kontroliuoja, ar rodyti išsaugoto HTML failo įkėlimo į redaktorių mygtuką.. Default: `true`.
* __defaultValue__ | `string`: numatytasis redaktoriaus tekstas. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: kontroliuoja, ar į redaktorių turi būti įtrauktas istorijos rodinys.. Default: `true`.
* __mode__ | `string`: valdo teksto redagavimo režimą (`individualus` - asmeniniam dokumentui, `grupinis` - dokumentui kiekvienai grupei, `bendradarbiavimas` - vienam dokumentui visiems arba `kohortos` - dokumentui kiekvienai grupei).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objektas, skirtas pritaikyti dokumento atstatymo modalą (paprastai neturėtų būti keičiamas).. Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontroliuoja, ar pateikus duomenis siųsti patvirtinimo el. laiškus su PDF/HTML išvestimi.. Default: `false`.
* __voiceTimeout__ | `number`: laikas milisekundėmis po įrašytos balso įvesties dalies įterpimo. Default: `5000`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
