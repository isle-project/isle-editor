---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

En teksteditor til at skrive noter eller rapporter. Understøtter eksport af noter som HTML- eller PDF-filer samt automatisk indsendelse til ISLE-serveren.

## Indstillinger

* __allowSubmissions__ | `boolean`: styrer, om eleverne kan sende deres rapporter til serveren. Default: `true`.
* __canLoadHTML__ | `boolean`: styrer, om der skal vises en knap til indlæsning af en gemt HTML-fil i editoren. Default: `true`.
* __defaultValue__ | `string`: standardtekst i editoren. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: styrer, om editoren skal indeholde en historikvisning. Default: `true`.
* __mode__ | `string`: styrer tekstredigeringstilstand (enten `individual` for et personligt dokument, `group` for et dokument pr. gruppe, `collaborative` for et enkelt dokument for alle, eller `cohort` for et dokument pr. gruppe). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekt til tilpasning af modal til nulstilling af dokumentet (bør normalt ikke ændres). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: styrer, om der skal sendes bekræftelses-e-mails med PDF/HTML-udskrift ved indsendelse. Default: `false`.
* __voiceTimeout__ | `number`: tid i millisekunder efter, at et stykke optaget stemmeinput er indsat. Default: `5000`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
