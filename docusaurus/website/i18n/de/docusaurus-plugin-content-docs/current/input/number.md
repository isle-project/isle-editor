---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Eine Zahleneingabekomponente. Kann als Teil eines ISLE Dashboards oder eigenständig verwendet werden. Im letzteren Fall wollen Sie Änderungen über das Attribut `onChange` behandeln oder den Wert über das Attribut `bind` an eine globale Variable binden.

## Optionen

* __bind__ | `string`: Name der globalen Variablen, der die Nummer zugewiesen werden soll. Default: `''`.
* __defaultValue__ | `number`: Wert, der den Standardwert des Eingangs beim Starten angibt. Default: `0`.
* __disabled__ | `boolean`: boolescher Wert, der angibt, ob der Eingang aktiv ist oder nicht. Default: `false`.
* __inline__ | `boolean`: gibt an, ob die Eingabe inline angezeigt wird. Default: `false`.
* __legend__ | `(string|node)`: String, der den neben der Zahleneingabe angezeigten Text angibt. Default: `none`.
* __max__ | `number`: Zahl, die den maximalen Wert angibt, der eingefügt werden darf. Default: `null`.
* __min__ | `number`: Zahl, die den kleinstmöglichen Wert angibt, der eingefügt werden darf. Default: `null`.
* __numbersOnly__ | `boolean`: steuert, ob nur Zahlen akzeptiert werden. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: Callback-Funktion, die bei Verwendung einer Weichzeichnermethode aufgerufen werden soll. Default: `onBlur() {}`.
* __onChange__ | `function`: Callback-Funktion, die aufgerufen werden soll, wenn die Zahleneingabe geändert wird. Default: `onChange() {}`.
* __onKeyDown__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine beliebige Taste gedrückt wird. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine beliebige Taste eingegeben wird. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: Callback-Funktion, die aufgerufen wird, wenn die Taste losgelassen wird. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: Zahl, die die inkrementellen Änderungen anzeigt, wenn Sie die Inkrement-Pfeile verwenden. Default: `1`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __inputStyle__ | `object`: CSS-Inlinestile für Eingabeelement. Default: `{}`.
* __value__ | `number`: Zahlenwert (für gesteuerte Komponente). Default: `none`.
* __tooltip__ | `string`: tooltip string (wenn nicht gesetzt, wird der Tooltip automatisch generiert). Default: `none`.
* __tooltipPlacement__ | `string`: Richtung des Tooltips. Default: `'left'`.


## Beispiele

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

