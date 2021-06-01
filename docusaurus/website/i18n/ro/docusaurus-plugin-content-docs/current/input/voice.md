---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

O componentă de intrare vocală.

## Opțiuni

* __autorecord__ | `boolean`: controlează dacă se pornește automat înregistrarea. Default: `false`.
* __defaultValue__ | `string`: valoarea textului implicit. Default: `''`.
* __grammars__ | `array`: listă de gramatici de vorbire (neacceptată). Default: `[]`.
* __legend__ | `(string|node)`: legenda afișată în fața câmpului de intrare. Default: `''`.
* __mode__ | `string`: setați la `full` pentru a afișa un câmp de introducere a textului alături de microfon, `status` pentru a afișa doar o bară de stare cu textele transcrise, `microphone` pentru a afișa doar un buton de comutare a înregistrării, sau `none` când intrarea vocală trebuie să fie invizibilă și controlată exclusiv prin taste rapide / comenzi vocale.. Default: `'full'`.
* __maxAlternatives__ | `number`: numărul maxim de alternative furnizate pentru fiecare rezultat al recunoașterii vocale. Default: `1`.
* __onChange__ | `function`: funcția de callback invocată la actualizarea valorii de intrare a textului. Default: `onChange() {}`.
* __onClick__ | `function`: funcția de callback invocată la apăsarea butonului de microfon. Default: `onClick() {}`.
* __onFinalText__ | `function`: funcția de callback invocată odată ce se primește textul final. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: funcția de callback invocată la începerea înregistrării. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: funcția de callback invocată odată ce înregistrarea este oprită. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: funcția de callback invocată cu segmente de text. Default: `onSegment() {}`.
* __onSubmit__ | `function`: funcția callback la trimiterea valorii de intrare a textului prin apăsarea "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: spațiu de introducere a textului. Default: `none`.
* __remote__ | `object`: obiect cu `start`, `stop`, și `toggle` și tastele rapide asociate. Default: `none`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __timeout__ | `number`: numărul de milisecunde după care trebuie să se întrerupă înregistrarea. Default: `none`.
* __stopTooltip__ | `string`: mesaj tooltip afișat în timpul înregistrării. Default: `none`.
* __startTooltip__ | `string`: mesaj tooltip afișat în timp ce nu se înregistrează. Default: `none`.
* __tooltipPlacement__ | `string`: direcția indicatorului de instrumente. Default: `'left'`.
* __width__ | `number`: lățimea intrării vocale (în px). Default: `500`.
* __height__ | `number`: înălțimea intrării vocale (în px). Default: `36`.


## Exemple

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



