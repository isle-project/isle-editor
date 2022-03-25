---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Skaitļu ievades komponents. Var izmantot kā daļu no ISLE paneļa vai atsevišķi. Pēdējā minētajā gadījumā vēlaties apstrādāt izmaiņas, izmantojot atribūtu `onChange`, vai piesaistīt vērtību globālajam mainīgajam, izmantojot atribūtu `bind`.

## Iespējas

* __bind__ | `string`: tā globālā mainīgā nosaukums, kuram piešķirams numurs.. Default: `''`.
* __defaultValue__ | `number`: vērtība, kas norāda ievades noklusējuma vērtību palaišanas laikā.. Default: `0`.
* __disabled__ | `boolean`: boolean, kas norāda, vai ievade ir aktīva vai nav.. Default: `false`.
* __inline__ | `boolean`: norāda, vai ievade tiek rādīta rindkopā.. Default: `false`.
* __legend__ | `(string|node)`: virkne, kas norāda tekstu, kurš tiek rādīts blakus skaitļa ievades laukam.. Default: `none`.
* __max__ | `number`: skaitlis, kas norāda maksimālo vērtību, kuru drīkst ievietot.. Default: `null`.
* __min__ | `number`: skaitlis, kas norāda mazāko iespējamo vērtību, kuru var ievietot.. Default: `null`.
* __numbersOnly__ | `boolean`: kontrolē, vai tiek pieņemti tikai skaitļi.. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: atsauces funkcija, kas jāizsauc, izmantojot izplūšanas metodi.. Default: `onBlur() {}`.
* __onChange__ | `function`: atgriezeniskā zvana funkcija, kas jāizsauc, kad tiek mainīts ievadītais skaitlis.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: atsauces funkcija, kas jāizsauc, kad tiek nospiests jebkurš taustiņš.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: atsauces funkcija, kas jāizsauc, kad tiek ievadīta jebkura atslēga.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: atsauces funkcija, kas jāizsauc, kad taustiņš ir atbrīvots.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: skaitlis, kas norāda pieauguma izmaiņas, ja tiek izmantotas pieauguma bultas.. Default: `1`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __inputStyle__ | `object`: Ievades elementa CSS iebūvētie stili. Default: `{}`.
* __value__ | `number`: skaitliskā vērtība (kontrolējamam komponentam). Default: `none`.
* __tooltip__ | `string`: rīka uzraksta virkne (ja nav iestatīts, rīka uzraksts tiek ģenerēts automātiski).. Default: `none`.
* __tooltipPlacement__ | `string`: rīka uzraksta virziens. Default: `'left'`.


## Piemēri

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

