---
id: number-input
title: Number Input
sidebar_label: Number Input
---

En komponent för inmatning av nummer. Kan användas som en del av en ISLE-instrumentpanel eller fristående. I det senare fallet vill du hantera ändringar via attributet `onChange` eller binda värdet till en global variabel via attributet `bind`.

## Alternativ

* __bind__ | `string`: namnet på den globala variabeln för det nummer som ska tilldelas.. Default: `''`.
* __defaultValue__ | `number`: Värde som anger standardvärdet för ingången vid start.. Default: `0`.
* __disabled__ | `boolean`: Boolean som anger om ingången är aktiv eller inte.. Default: `false`.
* __inline__ | `boolean`: anger om inmatningen ska visas inline. Default: `false`.
* __legend__ | `(string|node)`: sträng som anger den text som visas bredvid sifferinmatningen. Default: `none`.
* __max__ | `number`: Tal som anger det högsta värde som får införas.. Default: `null`.
* __min__ | `number`: Tal som anger det minsta möjliga värdet som kan införas.. Default: `null`.
* __numbersOnly__ | `boolean`: kontrollerar om endast siffror accepteras. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: callback-funktion som ska åberopas när man använder en suddig metod.. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktion som ska anropas när nummerinmatningen ändras.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback-funktion som ska anropas när en tangent trycks ned.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: callback-funktion som ska aktiveras när en tangent skrivs in.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: callback-funktion som ska anropas när tangenten släpps.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: nummer som anger de inkrementella ändringarna när man använder pilarna för ökning av antalet ändringar.. Default: `1`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __inputStyle__ | `object`: CSS-stilar på rad för inmatningselement. Default: `{}`.
* __value__ | `number`: Nummervärde (för kontrollerad komponent).. Default: `none`.
* __tooltip__ | `string`: tooltip-sträng (om den inte är inställd genereras tooltipet automatiskt).. Default: `none`.
* __tooltipPlacement__ | `string`: riktningen för verktygstipsen. Default: `'left'`.


## Exempel

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

