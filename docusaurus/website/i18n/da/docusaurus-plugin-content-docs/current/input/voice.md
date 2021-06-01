---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

En komponent til stemmeindtastning.

## Indstillinger

* __autorecord__ | `boolean`: styrer, om optagelsen skal starte automatisk. Default: `false`.
* __defaultValue__ | `string`: standard tekstværdi. Default: `''`.
* __grammars__ | `array`: liste over talegrammatikker (understøttes ikke). Default: `[]`.
* __legend__ | `(string|node)`: legende vises foran indtastningsfeltet. Default: `''`.
* __mode__ | `string`: indstillet til `full` for at vise et tekstindtastningsfelt sammen med mikrofonen, `status` for kun at vise en statuslinje med de transskriberede tekster, `microphone` for kun at vise en knap til at skifte til optagelse eller `none`, når stemmeindtastningen skal være usynlig og udelukkende styres via genvejstaster/stemkommandoer. Default: `'full'`.
* __maxAlternatives__ | `number`: det maksimale antal alternativer pr. talegenkendelsesresultat. Default: `1`.
* __onChange__ | `function`: callback-funktion, der påkaldes, når tekstinputværdien opdateres. Default: `onChange() {}`.
* __onClick__ | `function`: callback-funktion, der kaldes, når der klikkes på mikrofonknappen. Default: `onClick() {}`.
* __onFinalText__ | `function`: callback-funktion, der påberåbes, når den endelige tekst er modtaget. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: callback-funktion, der påkaldes, når optagelsen startes. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: callback-funktion, der påkaldes, når optagelsen er stoppet. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: callback-funktion, der påkaldes med tekstsegmenter. Default: `onSegment() {}`.
* __onSubmit__ | `function`: callback-funktion ved indsendelse af tekstinputværdi ved at trykke på "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: pladsholder for tekstindtastning. Default: `none`.
* __remote__ | `object`: objekt med `start`, `stop` og `toggle` og tilhørende genvejstaster. Default: `none`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __timeout__ | `number`: antal millisekunder, hvorefter optagelsen skal timeoutes. Default: `none`.
* __stopTooltip__ | `string`: tooltip-meddelelse, der vises under optagelse. Default: `none`.
* __startTooltip__ | `string`: tooltip-meddelelse vises, mens der ikke optages. Default: `none`.
* __tooltipPlacement__ | `string`: retning af værktøjstip. Default: `'left'`.
* __width__ | `number`: bredde af stemmeindtastning (i px). Default: `500`.
* __height__ | `number`: højde for stemmeindtastning (i px). Default: `36`.


## Eksempler

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



