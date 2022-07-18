---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Komponenta pro zadávání čísel. Lze ji použít jako součást ovládacího panelu ISLE nebo samostatně. V druhém případě chcete zpracovávat změny pomocí atributu `onChange` nebo vázat hodnotu na globální proměnnou pomocí atributu `bind`.

## Možnosti

* __bind__ | `string`: název globální proměnné, do které se číslo přiřadí.. Default: `''`.
* __defaultValue__ | `number`: hodnota udávající výchozí hodnotu vstupu při spuštění.. Default: `0`.
* __disabled__ | `boolean`: boolean určující, zda je vstup aktivní, nebo ne.. Default: `false`.
* __inline__ | `boolean`: označuje, zda se vstup zobrazuje inline. Default: `false`.
* __legend__ | `(string|node)`: řetězec označující text zobrazený vedle zadaného čísla.. Default: `none`.
* __max__ | `number`: číslo udávající maximální hodnotu, kterou lze vložit.. Default: `null`.
* __min__ | `number`: číslo udávající nejmenší možnou hodnotu, kterou lze vložit.. Default: `null`.
* __numbersOnly__ | `boolean`: kontroluje, zda jsou přijímána pouze čísla. Default: `true`.
* __placeholder__ | `string`: řetězec označující text, který se zobrazí, když je vstup prázdný (vyžaduje, aby `defaultValue` bylo nastaveno na `null` nebo `undefined`).. Default: `'0'`.
* __onBlur__ | `function`: funkce zpětného volání, která má být vyvolána při použití metody rozmazání. Default: `onBlur() {}`.
* __onChange__ | `function`: funkce zpětného volání, která se vyvolá při změně zadaného čísla.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkce zpětného volání, která se vyvolá při stisknutí libovolné klávesy.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funkce zpětného volání, která se vyvolá při zadání libovolné klávesy.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funkce zpětného volání, která se vyvolá při uvolnění klávesy.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: číslo označující přírůstkové změny při použití přírůstkových šipek.. Default: `1`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __inputStyle__ | `object`: Řádkové styly CSS pro vstupní prvek. Default: `{}`.
* __value__ | `number`: číselná hodnota (pro řízenou složku). Default: `none`.
* __tooltip__ | `string`: tooltip string (pokud není nastaven, je tooltip generován automaticky). Default: `none`.
* __tooltipPlacement__ | `string`: směr nápovědy. Default: `'left'`.


## Příklady

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

