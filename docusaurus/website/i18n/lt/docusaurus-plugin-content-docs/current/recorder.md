---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

ISLE komponentas, skirtas garso, ekrano ir vaizdo įrašymui.

## Parinktys

* __audio__ | `boolean`: nurodo, ar turėtų būti įrašomas garsas.. Default: `false`.
* __camera__ | `boolean`: nurodo, ar turi būti įrašoma interneto kamera.. Default: `false`.
* __screen__ | `boolean`: nurodo, ar ekranas turi būti užfiksuotas.. Default: `false`.
* __autostart__ | `boolean`: nurodo, ar įrašymas turėtų būti pradėtas nedelsiant.. Default: `false`.
* __downloadable__ | `boolean`: nurodo, ar naudotojai turėtų galėti atsisiųsti įrašą.. Default: `false`.
* __uploadable__ | `boolean`: nurodo, ar naudotojai turėtų galėti įkelti įrašą į serverį.. Default: `false`.
* __bitsPerSecond__ | `number`: bitų per sekundę. Default: `1280000`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



