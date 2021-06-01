---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Balss ievades komponents.

## Iespējas

* __autorecord__ | `boolean`: kontrolē, vai automātiski sākt ierakstīšanu.. Default: `false`.
* __defaultValue__ | `string`: noklusējuma teksta vērtība. Default: `''`.
* __grammars__ | `array`: runas gramatikas saraksts (neatbalstīts). Default: `[]`.
* __legend__ | `(string|node)`: ievades lauka priekšā parādīta leģenda. Default: `''`.
* __mode__ | `string`: iestatīt uz `pilns`, lai līdzās mikrofonam parādītu teksta ievades lauku, `statuss`, lai parādītu tikai statusa joslu ar transkribētajiem tekstiem, `mikrofons`, lai parādītu tikai pogu ierakstīšanas pārslēgšanai, vai `viens`, ja balss ievades lauks ir neredzams un to pārvalda tikai ar karstajiem taustiņiem / balss komandām.. Default: `'full'`.
* __maxAlternatives__ | `number`: maksimālais alternatīvu skaits, kas sniegts vienam runas atpazīšanas rezultātam.. Default: `1`.
* __onChange__ | `function`: atsauces funkcija, kas tiek izsaukta, kad tiek atjaunināta teksta ievades vērtība.. Default: `onChange() {}`.
* __onClick__ | `function`: atsauces funkcija, kas tiek izsaukta, noklikšķinot uz mikrofona pogas.. Default: `onClick() {}`.
* __onFinalText__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta pēc galīgā teksta saņemšanas.. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, kad tiek sākts ierakstīšana.. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, kad ierakstīšana ir pārtraukta.. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: atgriezeniskā zvana funkcija, kas izsaukta ar teksta segmentiem. Default: `onSegment() {}`.
* __onSubmit__ | `function`: atsauces funkcija, kad teksta ievades vērtība tiek iesniegta, nospiežot "Enter".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: teksta ievades vietas turētājs. Default: `none`.
* __remote__ | `object`: objekts ar `start`, `stop` un `pārslēgt` un ar tiem saistītiem karstajiem taustiņiem.. Default: `none`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __timeout__ | `number`: milisekunžu skaits, pēc kura pārtraukt ierakstīšanu.. Default: `none`.
* __stopTooltip__ | `string`: ierakstīšanas laikā parādīts uzdošanas ziņojums. Default: `none`.
* __startTooltip__ | `string`: Rīkjoslas ziņojums, kas tiek rādīts, kamēr netiek veikts ieraksts. Default: `none`.
* __tooltipPlacement__ | `string`: rīka uzraksta virziens. Default: `'left'`.
* __width__ | `number`: balss ievades platums (px). Default: `500`.
* __height__ | `number`: balss ievades augstums (px). Default: `36`.


## Piemēri

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



