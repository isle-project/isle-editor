---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Valige sisendkomponent. Saab kasutada ISLE armatuurlaua osana või iseseisvalt. Viimasel juhul soovite muudatusi käsitleda atribuudi `onChange` kaudu või siduda väärtus globaalse muutujaga atribuudi `bind` kaudu.

## Valikud

* __bind__ | `string`: globaalse muutuja nimi, millele tuleb määrata number. Default: `''`.
* __clearable__ | `boolean`: boolean väärtus, mis näitab, kas tehtud valik(ud) võib(vad) kustutada.. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: sisendi vaikeväärtus käivitamisel. Default: `none`.
* __disabled__ | `boolean`: kontrollib, kas sisend on aktiivne või mitte. Default: `false`.
* __inline__ | `boolean`: näitab, kas sisend kuvatakse rivis. Default: `false`.
* __legend__ | `(string|node)`: sisendi kõrval kuvatav tekst. Default: `''`.
* __menuPlacement__ | `string`: menüü paigutus juhtnupu suhtes (kas "automaatne", "ülemine" või "alumine").. Default: `'auto'`.
* __multi__ | `boolean`: kontrollib, kas võib valida mitu vastust. Default: `false`.
* __onChange__ | `function`: callback-funktsioon, mis kutsutakse esile, kui valik on tehtud. Default: `onChange() {}`.
* __options__ | `array`: massiivi, mis näitab kasutajale kättesaadavaid valikuid. Default: `[]`.
* __placeholder__ | `string`: väärtus, mis kuvatakse enne esialgse valiku tegemist. Default: `none`.
* __tooltip__ | `string`: tekst, mis kuvatakse, kui hõljuda legendi kohal. Default: `none`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

