---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Komponenta pro zadávání textu. Lze ji použít jako součást ovládacího panelu ISLE nebo samostatně. V druhém případě chcete zpracovávat změny pomocí atributu `onChange` nebo vázat hodnotu na globální proměnnou pomocí atributu `bind`.

## Možnosti

* __bind__ | `string`: název globální proměnné, do které se číslo přiřadí.. Default: `none`.
* __defaultValue__ | `string`: hodnota udávající výchozí hodnotu vstupu na začátku.. Default: `''`.
* __value__ | `string`: textová hodnota (pro řízenou složku). Default: `none`.
* __legend__ | `(string|node)`: řetězec označující text zobrazený vedle zadaného čísla.. Default: `''`.
* __inline__ | `boolean`: Určuje, zda se vstup zobrazuje inline. Default: `false`.
* __onBlur__ | `function`: funkce zpětného volání vyvolaná při ztrátě fokusu textové oblasti. Default: `onBlur() {}`.
* __onChange__ | `function`: funkce, která se zavolá při změně hodnoty textu.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkce zpětného volání, která se vyvolá při stisknutí libovolné klávesy.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funkce zpětného volání, která se vyvolá při zadání libovolné klávesy.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funkce zpětného volání, která se vyvolá při uvolnění klávesy.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: řetězec označující hodnotu, která se má zobrazit před provedením počáteční volby.. Default: `none`.
* __width__ | `number`: číslo udávající šířku vstupu v pixelech.. Default: `80`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

