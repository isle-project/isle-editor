---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

Een ISLE-component voor het opnemen van audio, scherm en video.

## Opties

* __audio__ | `boolean`: geeft aan of het geluid moet worden opgenomen. Default: `false`.
* __camera__ | `boolean`: geeft aan of de webcam moet worden opgenomen. Default: `false`.
* __screen__ | `boolean`: geeft aan of het scherm moet worden vastgelegd. Default: `false`.
* __autostart__ | `boolean`: geeft aan of de opname onmiddellijk moet beginnen. Default: `false`.
* __downloadable__ | `boolean`: geeft aan of gebruikers in staat moeten zijn om de opname te downloaden. Default: `false`.
* __uploadable__ | `boolean`: geeft aan of gebruikers in staat moeten zijn om de opname te uploaden naar de server. Default: `false`.
* __bitsPerSecond__ | `number`: bits per seconde. Default: `1280000`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



