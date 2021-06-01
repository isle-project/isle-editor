---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Tekstisisestuskomponent. Saab kasutada ISLE armatuurlaua osana või iseseisvalt. Viimasel juhul soovite muudatusi käsitleda atribuudi `onChange` abil või siduda väärtus globaalse muutujaga atribuudi `bind` abil.

## Valikud

* __bind__ | `string`: globaalse muutuja nimi, millele tuleb määrata number. Default: `none`.
* __defaultValue__ | `string`: väärtus, mis näitab sisendi vaikeväärtust käivitamisel. Default: `''`.
* __value__ | `string`: tekstiväärtus (kontrollitava komponendi puhul). Default: `none`.
* __legend__ | `(string|node)`: string, mis näitab numbrisisendi kõrval kuvatavat teksti. Default: `''`.
* __inline__ | `boolean`: Näitab, kas sisend kuvatakse reas. Default: `false`.
* __onBlur__ | `function`: tagasipöördumisfunktsioon, mida kutsutakse esile, kui tekstiala kaotab fookuse. Default: `onBlur() {}`.
* __onChange__ | `function`: funktsioon, mida kutsutakse üles, kui teksti väärtust muudetakse. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback-funktsioon, mis kutsutakse esile, kui mõni klahv vajutatakse alla.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: tagasilöögifunktsioon, mis kutsutakse esile, kui sisestatakse mõni klahv. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: tagasilöögifunktsioon, mis kutsutakse üles, kui klahv vabastatakse.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: string, mis näitab enne esialgse valiku tegemist kuvatavat väärtust. Default: `none`.
* __width__ | `number`: number, mis näitab sisendi laiust pikslites. Default: `80`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

