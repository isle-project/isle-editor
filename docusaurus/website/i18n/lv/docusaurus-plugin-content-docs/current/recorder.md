---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

ISLE komponents audio, ekrāna un video ierakstīšanai.

## Iespējas

* __audio__ | `boolean`: norāda, vai jāreģistrē audio. Default: `false`.
* __camera__ | `boolean`: norāda, vai tīmekļa kamerai jābūt ierakstītai.. Default: `false`.
* __screen__ | `boolean`: norāda, vai ekrāns jāfiksē. Default: `false`.
* __autostart__ | `boolean`: norāda, vai ierakstīšana jāsāk nekavējoties. Default: `false`.
* __downloadable__ | `boolean`: norāda, vai lietotājiem jābūt iespējai lejupielādēt ierakstu.. Default: `false`.
* __uploadable__ | `boolean`: norāda, vai lietotājiem jābūt iespējai augšupielādēt ierakstu uz serveri.. Default: `false`.
* __bitsPerSecond__ | `number`: bitu sekundē. Default: `1280000`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



