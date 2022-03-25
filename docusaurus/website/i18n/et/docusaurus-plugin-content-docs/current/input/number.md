---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Numbriline sisendkomponent. Saab kasutada ISLE armatuurlaua osana või iseseisvalt. Viimasel juhul soovite muudatusi käsitleda atribuudi `onChange` kaudu või siduda väärtus globaalse muutujaga atribuudi `bind` kaudu.

## Valikud

* __bind__ | `string`: globaalse muutuja nimi, millele tuleb määrata number. Default: `''`.
* __defaultValue__ | `number`: väärtus, mis näitab sisendi vaikeväärtust käivitamisel. Default: `0`.
* __disabled__ | `boolean`: boolean, mis näitab, kas sisend on aktiivne või mitte.. Default: `false`.
* __inline__ | `boolean`: näitab, kas sisend kuvatakse rivis. Default: `false`.
* __legend__ | `(string|node)`: string, mis näitab numbrisisendi kõrval kuvatavat teksti. Default: `none`.
* __max__ | `number`: number, mis näitab maksimaalset väärtust, mida võib sisestada. Default: `null`.
* __min__ | `number`: number, mis näitab väikseimat võimalikku väärtust, mida võib sisestada.. Default: `null`.
* __numbersOnly__ | `boolean`: kontrollib, kas aktsepteeritakse ainult numbreid. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: tagasilöögifunktsioon, mis kutsutakse esile, kui kasutatakse hägususmeetodit. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktsioon, mida kutsutakse esile, kui numbrisisend muutub. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback-funktsioon, mis kutsutakse esile, kui mõni klahv vajutatakse alla.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: tagasilöögifunktsioon, mis kutsutakse esile, kui sisestatakse mõni klahv. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: tagasilöögifunktsioon, mis kutsutakse üles, kui klahv vabastatakse.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: number, mis näitab juurdekasvu muutusi, kui kasutatakse juurdekasvu nooleid. Default: `1`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __inputStyle__ | `object`: Sisendelemendi CSS inline stiilid. Default: `{}`.
* __value__ | `number`: numbri väärtus (kontrollitava komponendi puhul). Default: `none`.
* __tooltip__ | `string`: tooltip string (kui seda ei ole määratud, genereeritakse tooltip automaatselt). Default: `none`.
* __tooltipPlacement__ | `string`: tööriistatähe suund. Default: `'left'`.


## Näited

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

