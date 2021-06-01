---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Komponenta hlasového vstupu.

## Možnosti

* __autorecord__ | `boolean`: řídí, zda se má automaticky spustit nahrávání. Default: `false`.
* __defaultValue__ | `string`: výchozí textová hodnota. Default: `''`.
* __grammars__ | `array`: seznam gramatiky řeči (nepodporovaný). Default: `[]`.
* __legend__ | `(string|node)`: legenda zobrazená před vstupním polem. Default: `''`.
* __mode__ | `string`: nastavit na `full` pro zobrazení textového vstupního pole vedle mikrofonu, `status` pro zobrazení pouze stavového řádku s přepisovanými texty, `microphone` pro zobrazení pouze tlačítka pro přepínání nahrávání nebo `none`, pokud má být hlasový vstup neviditelný a ovládaný výhradně pomocí klávesových zkratek / hlasových příkazů.. Default: `'full'`.
* __maxAlternatives__ | `number`: maximální počet alternativ poskytnutých na výsledek rozpoznávání řeči.. Default: `1`.
* __onChange__ | `function`: funkce zpětného volání vyvolaná při aktualizaci hodnoty textového vstupu. Default: `onChange() {}`.
* __onClick__ | `function`: funkce zpětného volání vyvolaná po kliknutí na tlačítko mikrofonu. Default: `onClick() {}`.
* __onFinalText__ | `function`: funkce zpětného volání vyvolaná po přijetí konečného textu. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: funkce zpětného volání vyvolaná při spuštění nahrávání. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: funkce zpětného volání vyvolaná po ukončení nahrávání. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: funkce zpětného volání vyvolaná pomocí textových segmentů. Default: `onSegment() {}`.
* __onSubmit__ | `function`: funkce zpětného volání při odeslání hodnoty textového vstupu stisknutím tlačítka "Enter".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: zástupný symbol textového vstupu. Default: `none`.
* __remote__ | `object`: objekt s `start`, `stop` a `přepnout` a přidruženými klávesovými zkratkami.. Default: `none`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __timeout__ | `number`: počet milisekund, po kterých má být záznam přerušen.. Default: `none`.
* __stopTooltip__ | `string`: zobrazení nápovědy při nahrávání. Default: `none`.
* __startTooltip__ | `string`: zobrazení nápovědy při nezaznamenávání. Default: `none`.
* __tooltipPlacement__ | `string`: směr nápovědy. Default: `'left'`.
* __width__ | `number`: šířka hlasového vstupu (v px). Default: `500`.
* __height__ | `number`: výška hlasového vstupu (v px). Default: `36`.


## Příklady

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



