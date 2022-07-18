---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Komponenta za vnos številk. Uporablja se lahko kot del armaturne plošče ISLE ali samostojno. V slednjem primeru želite obdelati spremembe s pomočjo atributa `onChange` ali vezati vrednost na globalno spremenljivko s pomočjo atributa `bind`.

## Možnosti

* __bind__ | `string`: ime globalne spremenljivke, v katero se pripiše številka.. Default: `''`.
* __defaultValue__ | `number`: vrednost, ki označuje privzeto vrednost vnosa ob zagonu. Default: `0`.
* __disabled__ | `boolean`: boolean, ki označuje, ali je vhod aktiven ali ne.. Default: `false`.
* __inline__ | `boolean`: označuje, ali se vnos prikaže v vrstici.. Default: `false`.
* __legend__ | `(string|node)`: niz, ki označuje besedilo, prikazano ob vnosu števila.. Default: `none`.
* __max__ | `number`: število, ki označuje največjo vrednost, ki se lahko vstavi.. Default: `null`.
* __min__ | `number`: število, ki označuje najmanjšo možno vrednost, ki se lahko vstavi.. Default: `null`.
* __numbersOnly__ | `boolean`: nadzoruje, ali so sprejete samo številke.. Default: `true`.
* __placeholder__ | `string`: niz, ki označuje besedilo, ki se prikaže, ko je vnos prazen (zahteva, da je `defaultValue` nastavljen na `null` ali `undefined`). Default: `'0'`.
* __onBlur__ | `function`: povratna funkcija, ki se sproži ob uporabi metode zameglitve. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcija povratne zveze, ki se sproži ob spremembi vhodne številke.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkcija povratne zveze, ki se sproži, ko je pritisnjena katera koli tipka.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: povratna funkcija, ki se sproži ob vnosu katere koli tipke. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: povratna funkcija, ki se sproži, ko je tipka sproščena.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: število, ki označuje postopne spremembe, če uporabljate puščice za povečevanje.. Default: `1`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __inputStyle__ | `object`: Vnosni slogi CSS za vhodni element. Default: `{}`.
* __value__ | `number`: vrednost števila (za nadzorovano komponento). Default: `none`.
* __tooltip__ | `string`: string tooltip (če ni nastavljen, se tooltip ustvari samodejno). Default: `none`.
* __tooltipPlacement__ | `string`: smer vrstice z napisom.. Default: `'left'`.


## Primeri

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

