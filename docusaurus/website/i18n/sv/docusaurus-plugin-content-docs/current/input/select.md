---
id: select-input
title: Select Input
sidebar_label: Select Input
---

En vald ingångskomponent. Kan användas som en del av en ISLE-instrumentpanel eller fristående. I det senare fallet vill du hantera ändringar via attributet `onChange` eller binda värdet till en global variabel via attributet `bind`.

## Alternativ

* __bind__ | `string`: namnet på den globala variabeln för det nummer som ska tilldelas.. Default: `''`.
* __clearable__ | `boolean`: Booleanskt värde som anger om man kan rensa de gjorda valen.. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: standardvärde för ingången vid start.. Default: `none`.
* __disabled__ | `boolean`: kontrollerar om ingången är aktiv eller inte. Default: `false`.
* __inline__ | `boolean`: anger om inmatningen ska visas inline. Default: `false`.
* __legend__ | `(string|node)`: text som visas bredvid inmatningen. Default: `''`.
* __menuPlacement__ | `string`: menyns placering i förhållande till kontrollen (antingen "automatiskt", "överst" eller "underst").. Default: `'auto'`.
* __multi__ | `boolean`: kontrollerar om man kan välja flera svar. Default: `false`.
* __onChange__ | `function`: callback-funktion som ska anropas när ett val har gjorts. Default: `onChange() {}`.
* __options__ | `array`: en matris som anger de valmöjligheter som användaren har.. Default: `[]`.
* __placeholder__ | `string`: Värde som ska visas innan ett första val görs.. Default: `none`.
* __tooltip__ | `string`: text som visas när man håller muspekaren över legenden. Default: `none`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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

