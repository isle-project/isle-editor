---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Een component voor spraakinvoer.

## Opties

* __autorecord__ | `boolean`: regelt of de opname automatisch wordt gestart. Default: `false`.
* __defaultValue__ | `string`: standaardtekstwaarde. Default: `''`.
* __grammars__ | `array`: spraakgrammatica lijst (niet ondersteund). Default: `[]`.
* __legend__ | `(string|node)`: legenda weergegeven voor het invoerveld. Default: `''`.
* __mode__ | `string`: ingesteld op `volledig` om een tekstinvoerveld naast de microfoon weer te geven, `status` om alleen een statusbalk met de getranscribeerde teksten weer te geven, `microfoon` om alleen een knop te tonen om de opname te schakelen, of `niet` wanneer de spraakinvoer onzichtbaar moet zijn en puur via sneltoetsen / spraakcommando's moet worden geregeld. Default: `'full'`.
* __maxAlternatives__ | `number`: maximaal aantal alternatieven per spraakherkenningsresultaat. Default: `1`.
* __onChange__ | `function`: terugbelfunctie die wordt aangeroepen wanneer de waarde van de tekstinvoer wordt geüpdatet. Default: `onChange() {}`.
* __onClick__ | `function`: terugbelfunctie ingeroepen bij het klikken op de microfoonknop. Default: `onClick() {}`.
* __onFinalText__ | `function`: terugbelfunctie die wordt aangeroepen zodra de definitieve tekst is ontvangen. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: terugbelfunctie die wordt aangeroepen bij het starten van de opname. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: terugbelfunctie die wordt aangeroepen zodra de opname is gestopt. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: terugbelfunctie ingeroepen met tekstsegmenten. Default: `onSegment() {}`.
* __onSubmit__ | `function`: terugbelfunctie bij het indienen van tekstinvoerwaarde door op "Enter" te drukken. Default: `onSubmit() {}`.
* __placeholder__ | `string`: tekstinvoerplaathouder. Default: `none`.
* __remote__ | `object`: object met `start`, `stop`, en `schakel` en bijbehorende sneltoetsen. Default: `none`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __timeout__ | `number`: aantal milliseconden waarna de opname wordt uitgesteld. Default: `none`.
* __stopTooltip__ | `string`: tooltipbericht weergegeven tijdens de opname. Default: `none`.
* __startTooltip__ | `string`: tooltip-bericht dat wordt weergegeven terwijl er niet wordt opgenomen. Default: `none`.
* __tooltipPlacement__ | `string`: richting van de tooltip. Default: `'left'`.
* __width__ | `number`: spraakinvoerbreedte (in px). Default: `500`.
* __height__ | `number`: spraakinvoerhoogte (in px). Default: `36`.


## Voorbeelden

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



