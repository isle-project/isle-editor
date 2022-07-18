---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Szövegszerkesztő jegyzetek vagy jelentések írásához. Támogatja a jegyzetek HTML- vagy PDF-fájlként történő exportálását, valamint az ISLE szerverre történő automatikus küldést.

## Opciók

* __allowSubmissions__ | `boolean`: szabályozza, hogy a diákok elküldhetik-e jelentéseiket a szerverre.. Default: `true`.
* __canLoadHTML__ | `boolean`: szabályozza, hogy megjelenjen-e a mentett HTML fájl betöltésére szolgáló gomb a szerkesztőbe.. Default: `true`.
* __defaultValue__ | `string`: a szerkesztő alapértelmezett szövege. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: szabályozza, hogy a szerkesztő tartalmazzon-e előzménynézetet. Default: `true`.
* __mode__ | `string`: a szövegszerkesztés módját vezérli (egyéni dokumentum esetén "egyéni", csoportos dokumentum esetén "csoportonként", közös dokumentum esetén "kollaboratív", ha mindenki számára egy dokumentumot készít, vagy csoportonként "kohorsz").. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objektum a dokumentum visszaállítására szolgáló modál testreszabásához (általában nem kell megváltoztatni). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: ellenőrzi, hogy küldjön-e visszaigazoló e-mailt PDF/HTML kimenettel a benyújtáskor. Default: `false`.
* __voiceTimeout__ | `number`: idő milliszekundumban, miután a rögzített hangbemenet egy darabja beillesztésre került. Default: `5000`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
