---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Komponent textového vstupu. Môže sa používať ako súčasť ovládacieho panelu ISLE alebo samostatne. V druhom prípade chcete spracovávať zmeny pomocou atribútu `onChange` alebo viazať hodnotu na globálnu premennú pomocou atribútu `bind`.

## Možnosti

* __bind__ | `string`: názov globálnej premennej, do ktorej sa má priradiť číslo. Default: `none`.
* __defaultValue__ | `string`: hodnota udávajúca predvolenú hodnotu vstupu na začiatku. Default: `''`.
* __value__ | `string`: textová hodnota (pre riadený komponent). Default: `none`.
* __legend__ | `(string|node)`: reťazec označujúci text zobrazený vedľa vstupu čísla. Default: `''`.
* __inline__ | `boolean`: Označuje, či sa vstup zobrazuje v riadku. Default: `false`.
* __onBlur__ | `function`: spätné volanie vyvolané pri strate fokusu na textovú oblasť. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcia, ktorá sa zavolá pri zmene hodnoty textu. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkcia spätného volania, ktorá sa vyvolá po stlačení ľubovoľného klávesu. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funkcia spätného volania, ktorá sa vyvolá po zadaní ľubovoľného klávesu. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funkcia spätného volania, ktorá sa vyvolá po uvoľnení klávesu. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: reťazec označujúci hodnotu, ktorá sa má zobraziť pred vykonaním počiatočnej voľby. Default: `none`.
* __width__ | `number`: číslo udávajúce šírku vstupu v pixeloch. Default: `80`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

