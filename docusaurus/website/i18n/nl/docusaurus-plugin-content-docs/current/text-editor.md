---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Een tekstverwerker voor het schrijven van aantekeningen of rapporten. Ondersteunt het exporteren van notities als HTML- of PDF-bestanden, evenals het automatisch aanleveren aan de ISLE-server.

## Options

* __allowSubmissions__ | `boolean`: controleert of de leerlingen hun rapporten mogen indienen bij de server. Default: `true`.
* __canLoadHTML__ | `boolean`: bepaalt of een knop moet worden weergegeven om een opgeslagen HTML-bestand in de editor te laden. Default: `true`.
* __defaultValue__ | `string`: standaardtekst van de redacteur. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: bepaalt de tekstbewerkingsmodus (`individual` voor een persoonlijk document, `group` voor een document per groep, `collaborative` voor een enkel document voor iedereen, of `cohort` voor een document per cohort). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: tijd in milliseconden nadat een brok opgenomen steminvoer is ingevoegd. Default: `5000`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

