---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Tekstieditori muistiinpanojen tai raporttien kirjoittamiseen. Tukee muistiinpanojen vientiä HTML- tai PDF-tiedostoina sekä automaattista lähettämistä ISLE-palvelimelle.

## Vaihtoehdot

* __allowSubmissions__ | `boolean`: valvoo, voivatko opiskelijat lähettää raporttinsa palvelimelle.. Default: `true`.
* __canLoadHTML__ | `boolean`: valvoo, näytetäänkö painike tallennetun HTML-tiedoston lataamiseksi editoriin.. Default: `true`.
* __defaultValue__ | `string`: editorin oletusteksti. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: valvoo, sisältääkö editori historiannäkymän. Default: `true`.
* __mode__ | `string`: ohjaa tekstinmuokkaustilaa (joko `yksilöllinen` henkilökohtaiselle asiakirjalle, `ryhmä` ryhmäkohtaiselle asiakirjalle, `yhteistyö` kaikille yhteiselle asiakirjalle tai `ryhmä` kohorttikohtaiselle asiakirjalle).. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objekti, jolla mukautetaan modaalia asiakirjan nollaamiseksi (yleensä sitä ei pitäisi muuttaa).. Default: `none`.
* __sendSubmissionEmails__ | `boolean`: valvoo, lähetetäänkö lähetyksen yhteydessä vahvistussähköposteja PDF/HTML-tulosteen kanssa. Default: `false`.
* __voiceTimeout__ | `number`: aika millisekunneissa sen jälkeen, kun äänitetyn äänitiedoston osa on lisätty.. Default: `5000`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
