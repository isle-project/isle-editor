---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Balso įvesties komponentas.

## Parinktys

* __autorecord__ | `boolean`: kontroliuoja, ar automatiškai pradėti įrašymą.. Default: `false`.
* __defaultValue__ | `string`: numatytoji teksto vertė. Default: `''`.
* __grammars__ | `array`: kalbos gramatikos sąrašas (nepalaikomas). Default: `[]`.
* __legend__ | `(string|node)`: priešais įvesties lauką rodoma legenda. Default: `''`.
* __mode__ | `string`: Nustatykite `full`, kad šalia mikrofono būtų rodomas teksto įvesties laukas, `status`, kad būtų rodoma tik būsenos juosta su transkribuotais tekstais, `mikrofonas`, kad būtų rodomas tik įrašymo perjungimo mygtukas, arba `none`, kai balso įvestis turėtų būti nematoma ir valdoma tik sparčiaisiais klavišais / balso komandomis.. Default: `'full'`.
* __maxAlternatives__ | `number`: didžiausias alternatyvų, pateiktų vienam kalbos atpažinimo rezultatui, skaičius.. Default: `1`.
* __onChange__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai atnaujinama teksto įvesties vertė.. Default: `onChange() {}`.
* __onClick__ | `function`: grįžtamojo ryšio funkcija, iškviečiama paspaudus mikrofono mygtuką.. Default: `onClick() {}`.
* __onFinalText__ | `function`: grįžtamojo ryšio funkcija, iškviečiama gavus galutinį tekstą.. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: grįžtamojo ryšio funkcija, iškviečiama pradėjus įrašymą.. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: grįžtamojo ryšio funkcija, iškviečiama sustabdžius įrašymą.. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: grįžtamojo ryšio funkcija, iškviečiama su teksto segmentais. Default: `onSegment() {}`.
* __onSubmit__ | `function`: grįžtamojo ryšio funkcija, kai teksto įvesties reikšmė pateikiama paspaudus "Enter".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: teksto įvesties žymeklis. Default: `none`.
* __remote__ | `object`: objektas su `start`, `stop`, `toggle` ir susijusiais sparčiaisiais klavišais. Default: `none`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __timeout__ | `number`: milisekundžių skaičius, po kurio turi būti nutrauktas įrašymas. Default: `none`.
* __stopTooltip__ | `string`: įrašymo metu rodomas įrankių užuominos pranešimas. Default: `none`.
* __startTooltip__ | `string`: įrankių užuominos pranešimas rodomas neįrašant. Default: `none`.
* __tooltipPlacement__ | `string`: įrankių užuominos kryptis. Default: `'left'`.
* __width__ | `number`: balso įvesties plotis (px). Default: `500`.
* __height__ | `number`: balso įvesties aukštis (px). Default: `36`.


## Pavyzdžiai

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



