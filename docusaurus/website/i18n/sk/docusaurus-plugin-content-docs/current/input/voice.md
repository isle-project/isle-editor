---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Komponent hlasového vstupu.

## Možnosti

* __autorecord__ | `boolean`: ovláda, či sa má automaticky spustiť nahrávanie. Default: `false`.
* __defaultValue__ | `string`: predvolená hodnota textu. Default: `''`.
* __grammars__ | `array`: zoznam gramatiky reči (nepodporovaný). Default: `[]`.
* __legend__ | `(string|node)`: legenda zobrazená pred vstupným poľom. Default: `''`.
* __mode__ | `string`: nastaviť na `full` pre zobrazenie textového vstupného poľa spolu s mikrofónom, `status` pre zobrazenie iba stavového riadku s prepisovanými textami, `microphone` pre zobrazenie iba tlačidla na prepínanie nahrávania, alebo `none`, ak má byť hlasový vstup neviditeľný a ovládaný výlučne pomocou klávesových skratiek / hlasových príkazov. Default: `'full'`.
* __maxAlternatives__ | `number`: maximálny počet alternatív poskytnutých na výsledok rozpoznávania reči. Default: `1`.
* __onChange__ | `function`: funkcia spätného volania vyvolaná pri aktualizácii hodnoty textového vstupu. Default: `onChange() {}`.
* __onClick__ | `function`: spätná funkcia vyvolaná po kliknutí na tlačidlo mikrofónu. Default: `onClick() {}`.
* __onFinalText__ | `function`: spätná funkcia vyvolaná po prijatí konečného textu. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: spätná funkcia vyvolaná pri spustení nahrávania. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: spätná funkcia vyvolaná po zastavení nahrávania. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: spätné volanie vyvolané pomocou textových segmentov. Default: `onSegment() {}`.
* __onSubmit__ | `function`: funkcia spätného volania pri odoslaní hodnoty textového vstupu stlačením tlačidla "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: zástupný symbol textového vstupu. Default: `none`.
* __remote__ | `object`: objekt s klávesami `štart`, `stop` a `prepínač` a príslušnými klávesovými skratkami. Default: `none`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __timeout__ | `number`: počet milisekúnd, po ktorých sa má nahrávanie ukončiť. Default: `none`.
* __stopTooltip__ | `string`: nápovedná správa zobrazená počas nahrávania. Default: `none`.
* __startTooltip__ | `string`: zobrazenie nápovedy pri nenahrávaní. Default: `none`.
* __tooltipPlacement__ | `string`: smer nápovedy. Default: `'left'`.
* __width__ | `number`: šírka hlasového vstupu (v px). Default: `500`.
* __height__ | `number`: výška hlasového vstupu (v px). Default: `36`.


## Príklady

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



