---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Vybraná vstupná zložka. Môže sa používať ako súčasť prístrojovej dosky ISLE alebo samostatne. V druhom prípade chcete spracovávať zmeny pomocou atribútu `onChange` alebo viazať hodnotu na globálnu premennú pomocou atribútu `bind`.

## Možnosti

* __bind__ | `string`: názov globálnej premennej, do ktorej sa má priradiť číslo. Default: `''`.
* __clearable__ | `boolean`: logická hodnota, ktorá udáva, či je možné vymazať vykonanú voľbu (voľby). Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: predvolená hodnota vstupu pri spustení. Default: `none`.
* __disabled__ | `boolean`: kontroluje, či je vstup aktívny alebo nie. Default: `false`.
* __inline__ | `boolean`: označuje, či sa vstup zobrazuje v riadku. Default: `false`.
* __legend__ | `(string|node)`: text zobrazený vedľa vstupu. Default: `''`.
* __menuPlacement__ | `string`: umiestnenie ponuky vo vzťahu k ovládaciemu prvku (buď `automatické`, `horné` alebo `spodné`). Default: `'auto'`.
* __multi__ | `boolean`: kontroluje, či je možné vybrať viacero odpovedí.. Default: `false`.
* __onChange__ | `function`: funkcia spätného volania, ktorá sa vyvolá po vykonaní voľby. Default: `onChange() {}`.
* __options__ | `array`: pole označujúce možnosti, ktoré má používateľ k dispozícii. Default: `[]`.
* __placeholder__ | `string`: hodnota, ktorá sa má zobraziť pred vykonaním počiatočnej voľby. Default: `none`.
* __tooltip__ | `string`: text zobrazený pri prejdení nad legendou. Default: `none`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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

