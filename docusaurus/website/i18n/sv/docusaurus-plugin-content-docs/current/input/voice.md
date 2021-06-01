---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

En komponent för röstinmatning.

## Alternativ

* __autorecord__ | `boolean`: kontrollerar om inspelningen ska startas automatiskt. Default: `false`.
* __defaultValue__ | `string`: standardvärde för text. Default: `''`.
* __grammars__ | `array`: lista över talgrammatik (stöds inte). Default: `[]`.
* __legend__ | `(string|node)`: Legenden visas framför inmatningsfältet.. Default: `''`.
* __mode__ | `string`: ställ in på `full` för att visa ett textinmatningsfält tillsammans med mikrofonen, `status` för att bara visa ett statusfält med de transkriberade texterna, `microphone` för att bara visa en knapp för att växla inspelning, eller `none` för att röstinmatningen ska vara osynlig och enbart styras via snabbknappar/röstkommandon.. Default: `'full'`.
* __maxAlternatives__ | `number`: Maximalt antal alternativ som tillhandahålls per resultat av taligenkänning.. Default: `1`.
* __onChange__ | `function`: callback-funktion som anropas när värdet av textinmatningen uppdateras. Default: `onChange() {}`.
* __onClick__ | `function`: callback-funktion som aktiveras när man klickar på mikrofonknappen. Default: `onClick() {}`.
* __onFinalText__ | `function`: callback-funktion som anropas när den slutliga texten har mottagits. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: callback-funktion som anropas när inspelningen startas. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: callback-funktion som anropas när inspelningen stoppas. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: callback-funktion som anropas med textsegment. Default: `onSegment() {}`.
* __onSubmit__ | `function`: callback-funktion när du skickar in ett värde i en textinmatning genom att trycka på "Enter".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: platshållare för textinmatning. Default: `none`.
* __remote__ | `object`: objekt med `start`, `stop` och `toggle` och tillhörande snabbknappar. Default: `none`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __timeout__ | `number`: Antal millisekunder efter vilket inspelningen ska tidsbegränsas.. Default: `none`.
* __stopTooltip__ | `string`: Tooltip-meddelande som visas under inspelning. Default: `none`.
* __startTooltip__ | `string`: Tooltip-meddelande som visas när det inte spelas in. Default: `none`.
* __tooltipPlacement__ | `string`: riktningen för verktygstipsen. Default: `'left'`.
* __width__ | `number`: bredd för röstinmatning (i px). Default: `500`.
* __height__ | `number`: höjd för röstinmatning (i px). Default: `36`.


## Exempel

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



