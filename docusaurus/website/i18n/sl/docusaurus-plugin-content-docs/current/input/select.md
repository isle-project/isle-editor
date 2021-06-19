---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Izberite vhodno komponento. Uporablja se lahko kot del armaturne plošče ISLE ali samostojno. V slednjem primeru želite obdelati spremembe s pomočjo atributa `onChange` ali vezati vrednost na globalno spremenljivko s pomočjo atributa `bind`.

## Možnosti

* __bind__ | `string`: ime globalne spremenljivke, v katero se pripiše številka.. Default: `''`.
* __clearable__ | `boolean`: logična vrednost, ki označuje, ali je mogoče izbrisati opravljene izbire.. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: privzeta vrednost vnosa ob zagonu. Default: `none`.
* __disabled__ | `boolean`: nadzoruje, ali je vhod aktiven ali ne.. Default: `false`.
* __inline__ | `boolean`: označuje, ali se vnos prikaže v vrstici.. Default: `false`.
* __legend__ | `(string|node)`: besedilo, ki se prikaže ob vnosu. Default: `''`.
* __menuPlacement__ | `string`: umestitev menija glede na upravljalnik (`avto`, `top` ali `bottom`).. Default: `'auto'`.
* __multi__ | `boolean`: nadzoruje, ali lahko izberete več odgovorov.. Default: `false`.
* __onChange__ | `function`: funkcija povratne zveze, ki se sproži ob izbiri.. Default: `onChange() {}`.
* __options__ | `array`: polje z navedbo možnosti, ki so na voljo uporabniku.. Default: `[]`.
* __placeholder__ | `string`: vrednost, ki se prikaže pred začetno izbiro.. Default: `none`.
* __tooltip__ | `string`: besedilo, ki se prikaže ob premikanju nad legendo. Default: `none`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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

