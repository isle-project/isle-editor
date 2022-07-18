---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Een tekstverwerker voor het schrijven van aantekeningen of rapporten. Ondersteunt het exporteren van notities als HTML- of PDF-bestanden, evenals het automatisch aanleveren aan de ISLE-server.

## Opties

* __allowSubmissions__ | `boolean`: controleert of de leerlingen hun rapporten mogen indienen bij de server. Default: `true`.
* __canLoadHTML__ | `boolean`: bepaalt of een knop moet worden weergegeven om een opgeslagen HTML-bestand in de editor te laden. Default: `true`.
* __defaultValue__ | `string`: standaardtekst van de redacteur. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: bepaalt of de editor een geschiedenisweergave moet bevatten. Default: `true`.
* __mode__ | `string`: bepaalt de tekstbewerkingsmodus (`individual` voor een persoonlijk document, `group` voor een document per groep, `collaborative` voor een enkel document voor iedereen, of `cohort` voor een document per cohort). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: object voor het aanpassen van de modal voor het resetten van het document (moet gewoonlijk niet worden gewijzigd). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controleert of er bevestigingsmails met PDF/HTML-uitvoer moeten worden verzonden bij de indiening ervan. Default: `false`.
* __voiceTimeout__ | `number`: tijd in milliseconden nadat een brok opgenomen steminvoer is ingevoegd. Default: `5000`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

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
