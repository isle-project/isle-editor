---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Textový editor pro psaní poznámek nebo zpráv. Podporuje export poznámek jako souborů HTML nebo PDF a automatické odesílání na server ISLE.

## Možnosti

* __allowSubmissions__ | `boolean`: kontroluje, zda studenti mohou odesílat své zprávy na server.. Default: `true`.
* __canLoadHTML__ | `boolean`: řídí, zda se má zobrazit tlačítko pro načtení uloženého souboru HTML do editoru.. Default: `true`.
* __defaultValue__ | `string`: výchozí text editoru. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: určuje, zda má editor obsahovat zobrazení historie.. Default: `true`.
* __mode__ | `string`: ovládá režim úprav textu (buď `individuální` pro osobní dokument, `skupinový` pro dokument pro skupiny, `spolupracovní` pro jeden dokument pro všechny nebo `kohorta` pro dokument pro kohortu).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekt pro přizpůsobení modálního okna pro resetování dokumentu (obvykle by se neměl měnit).. Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontroluje, zda se mají po odeslání odeslat potvrzovací e-maily s výstupem PDF/HTML.. Default: `false`.
* __voiceTimeout__ | `number`: čas v milisekundách po vložení části nahraného hlasového vstupu.. Default: `5000`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
