---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Vstupná zložka čísla. Môže sa používať ako súčasť prístrojovej dosky ISLE alebo samostatne. V druhom prípade chcete spracovávať zmeny pomocou atribútu `onChange` alebo viazať hodnotu na globálnu premennú pomocou atribútu `bind`.

## Možnosti

* __bind__ | `string`: názov globálnej premennej, do ktorej sa má priradiť číslo. Default: `''`.
* __defaultValue__ | `number`: hodnota udávajúca predvolenú hodnotu vstupu pri spustení. Default: `0`.
* __disabled__ | `boolean`: boolean označujúci, či je vstup aktívny alebo nie. Default: `false`.
* __inline__ | `boolean`: označuje, či sa vstup zobrazuje v riadku. Default: `false`.
* __legend__ | `(string|node)`: reťazec označujúci text zobrazený vedľa vstupu čísla. Default: `none`.
* __max__ | `number`: číslo udávajúce maximálnu hodnotu, ktorú možno vložiť. Default: `null`.
* __min__ | `number`: číslo označujúce najmenšiu možnú hodnotu, ktorú možno vložiť. Default: `null`.
* __numbersOnly__ | `boolean`: kontroluje, či sú akceptované iba čísla.. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: spätná funkcia, ktorá sa má vyvolať pri použití metódy rozmazania. Default: `onBlur() {}`.
* __onChange__ | `function`: spätná funkcia, ktorá sa vyvolá pri zmene vstupného čísla. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkcia spätného volania, ktorá sa vyvolá po stlačení ľubovoľného klávesu. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funkcia spätného volania, ktorá sa vyvolá po zadaní ľubovoľného klávesu. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funkcia spätného volania, ktorá sa vyvolá po uvoľnení klávesu. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: číslo označujúce prírastkové zmeny pri použití prírastkových šípok. Default: `1`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __inputStyle__ | `object`: Riadkové štýly CSS pre vstupný prvok. Default: `{}`.
* __value__ | `number`: číselná hodnota (pre kontrolovaný komponent). Default: `none`.
* __tooltip__ | `string`: reťazec tooltip (ak nie je nastavený, tooltip sa generuje automaticky). Default: `none`.
* __tooltipPlacement__ | `string`: smer nápovedy. Default: `'left'`.


## Príklady

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

