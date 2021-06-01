---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Komponenta glasovnega vnosa.

## Možnosti

* __autorecord__ | `boolean`: nadzoruje, ali se samodejno začne snemanje.. Default: `false`.
* __defaultValue__ | `string`: privzeta vrednost besedila. Default: `''`.
* __grammars__ | `array`: seznam slovnice govora (nepodprto). Default: `[]`.
* __legend__ | `(string|node)`: legenda, prikazana pred vnosnim poljem. Default: `''`.
* __mode__ | `string`: nastavite na `full` za prikaz polja za vnos besedila poleg mikrofona, `status` za prikaz samo vrstice stanja s prepisanimi besedili, `microphone` za prikaz samo gumba za preklapljanje snemanja ali `none`, če naj bo glasovni vnos neviden in se upravlja samo s tipkami / glasovnimi ukazi.. Default: `'full'`.
* __maxAlternatives__ | `number`: največje število alternativnih možnosti na rezultat prepoznavanja govora. Default: `1`.
* __onChange__ | `function`: funkcija povratnega klica, ki se sproži, ko se posodobi vrednost vnosa besedila.. Default: `onChange() {}`.
* __onClick__ | `function`: funkcija povratne zveze, ki se sproži ob kliku na gumb za mikrofon.. Default: `onClick() {}`.
* __onFinalText__ | `function`: funkcija povratnega klica, ki se sproži, ko je prejeto končno besedilo.. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: povratna funkcija, ki se sproži ob začetku snemanja.. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: povratna funkcija, ki se sproži, ko je snemanje ustavljeno.. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: funkcija povratnega klica, ki se sproži z besedilnimi segmenti. Default: `onSegment() {}`.
* __onSubmit__ | `function`: funkcija povratne zveze pri oddaji vrednosti vnosa besedila s pritiskom na tipko "Enter".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: Namestnik za vnos besedila. Default: `none`.
* __remote__ | `object`: objekt z `start`, `stop` in `toggle` ter pripadajočimi vročimi tipkami. Default: `none`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __timeout__ | `number`: število milisekund, po katerih se prekine čas snemanja. Default: `none`.
* __stopTooltip__ | `string`: sporočilo z namigom, ki se prikaže med snemanjem. Default: `none`.
* __startTooltip__ | `string`: prikazano sporočilo s podnapisom, ko ne snemate. Default: `none`.
* __tooltipPlacement__ | `string`: smer vrstice z napisom.. Default: `'left'`.
* __width__ | `number`: širina glasovnega vnosa (v px). Default: `500`.
* __height__ | `number`: višina glasovnega vnosa (v px). Default: `36`.


## Primeri

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



