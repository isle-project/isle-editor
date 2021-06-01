---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Teksta ievades komponents. Var izmantot kā daļu no ISLE paneļa vai atsevišķi. Pēdējā minētajā gadījumā vēlaties apstrādāt izmaiņas, izmantojot atribūtu `onChange`, vai piesaistīt vērtību globālajam mainīgajam, izmantojot atribūtu `bind`.

## Iespējas

* __bind__ | `string`: tā globālā mainīgā nosaukums, kuram piešķirams numurs.. Default: `none`.
* __defaultValue__ | `string`: vērtība, kas norāda ievades noklusējuma vērtību sākumā.. Default: `''`.
* __value__ | `string`: teksta vērtība (kontrolējamam komponentam). Default: `none`.
* __legend__ | `(string|node)`: virkne, kas norāda tekstu, kurš tiek rādīts blakus skaitļa ievades laukam.. Default: `''`.
* __inline__ | `boolean`: Norāda, vai ievade tiek rādīta rindkopā. Default: `false`.
* __onBlur__ | `function`: atsauces funkcija, kas tiek izsaukta, kad teksta apgabals zaudē fokusu.. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcija, kas jāizsauc, kad tiek mainīta teksta vērtība.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: atsauces funkcija, kas jāizsauc, kad tiek nospiests jebkurš taustiņš.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: atsauces funkcija, kas jāizsauc, kad tiek ievadīta jebkura atslēga.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: atsauces funkcija, kas jāizsauc, kad taustiņš ir atbrīvots.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: virkne, kurā norādīta vērtība, kas tiks parādīta pirms sākotnējās izvēles izdarīšanas.. Default: `none`.
* __width__ | `number`: skaitlis, kas norāda ievades platumu pikseļos.. Default: `80`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

