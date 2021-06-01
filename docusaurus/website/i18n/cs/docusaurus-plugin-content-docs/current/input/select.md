---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Vybraná vstupní složka. Lze ji použít jako součást ovládacího panelu ISLE nebo samostatně. V druhém případě chcete zpracovávat změny pomocí atributu `onChange` nebo vázat hodnotu na globální proměnnou pomocí atributu `bind`.

## Možnosti

* __bind__ | `string`: název globální proměnné, do které se číslo přiřadí.. Default: `''`.
* __clearable__ | `boolean`: boolean hodnota udávající, zda lze vymazat provedené volby.. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: výchozí hodnota vstupu při spuštění. Default: `none`.
* __disabled__ | `boolean`: řídí, zda je vstup aktivní, nebo ne. Default: `false`.
* __inline__ | `boolean`: označuje, zda se vstup zobrazuje inline. Default: `false`.
* __legend__ | `(string|node)`: text zobrazený vedle vstupu. Default: `''`.
* __menuPlacement__ | `string`: umístění nabídky vzhledem k ovládacímu prvku (buď `automatické`, `horní`, nebo `spodní`).. Default: `'auto'`.
* __multi__ | `boolean`: kontroluje, zda lze vybrat více odpovědí.. Default: `false`.
* __onChange__ | `function`: funkce zpětného volání, která se vyvolá při volbě. Default: `onChange() {}`.
* __options__ | `array`: pole označující možnosti, které má uživatel k dispozici. Default: `[]`.
* __placeholder__ | `string`: hodnota, která se zobrazí před provedením počáteční volby.. Default: `none`.
* __tooltip__ | `string`: text zobrazený při najetí na legendu. Default: `none`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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

