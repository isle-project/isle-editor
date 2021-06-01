---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Häälsisestuse komponent.

## Valikud

* __autorecord__ | `boolean`: kontrollib, kas salvestamine käivitub automaatselt. Default: `false`.
* __defaultValue__ | `string`: vaikimisi tekstiväärtus. Default: `''`.
* __grammars__ | `array`: kõne grammatika nimekiri (toetamata). Default: `[]`.
* __legend__ | `(string|node)`: sisendvälja ees kuvatav legend. Default: `''`.
* __mode__ | `string`: määrata `täielik`, et kuvada tekstisisestusvälja koos mikrofoniga, `staatus`, et kuvada ainult olekuriba koos transkribeeritud tekstidega, `mikrofon`, et kuvada ainult nuppu salvestuse lülitamiseks, või `keegi`, kui häälsisend peaks olema nähtamatu ja ainult kontrollitavate klahvide / häälkäskluste kaudu.. Default: `'full'`.
* __maxAlternatives__ | `number`: ühe kõnetuvastuse tulemuse kohta esitatud maksimaalne arv alternatiive. Default: `1`.
* __onChange__ | `function`: callback-funktsioon, mida kutsutakse üles, kui tekstisisendi väärtus uuendatakse. Default: `onChange() {}`.
* __onClick__ | `function`: tagasilöögifunktsioon, mis käivitub mikrofoninupule klõpsates. Default: `onClick() {}`.
* __onFinalText__ | `function`: Callback-funktsioon, mis käivitub pärast lõpliku teksti saamist. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: Callback-funktsioon, mis käivitub salvestuse alustamisel. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: Callback-funktsioon, mis käivitub pärast salvestuse peatamist. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: tagasilöögifunktsioon, mida kutsutakse üles tekstisegmentidega. Default: `onSegment() {}`.
* __onSubmit__ | `function`: tagasilöögifunktsioon, kui tekstisisendi väärtus esitatakse vajutades "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: teksti sisestamise kohaomanik. Default: `none`.
* __remote__ | `object`: objekt koos "start", "stopp" ja "lülitus" ning nendega seotud kiirklahvidega. Default: `none`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __timeout__ | `number`: millisekundite arv, mille möödumisel tuleb salvestus katkestada.. Default: `none`.
* __stopTooltip__ | `string`: salvestamise ajal kuvatav tööriistakäsk. Default: `none`.
* __startTooltip__ | `string`: tööriistakriipsu sõnum, mis kuvatakse, kui salvestamine ei toimu. Default: `none`.
* __tooltipPlacement__ | `string`: tööriistatähe suund. Default: `'left'`.
* __width__ | `number`: häälsisendi laius (px). Default: `500`.
* __height__ | `number`: häälsisendi kõrgus (px). Default: `36`.


## Näited

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



