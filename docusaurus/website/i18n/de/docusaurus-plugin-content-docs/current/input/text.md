---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Eine Komponente zur Texteingabe. Kann als Teil eines ISLE Dashboards oder eigenständig verwendet werden. Im letzteren Fall wollen Sie Änderungen über das Attribut `onChange` behandeln oder den Wert über das Attribut `bind` an eine globale Variable binden.

## Optionen

* __bind__ | `string`: Name der globalen Variablen, der die Nummer zugewiesen werden soll. Default: `none`.
* __defaultValue__ | `string`: Ein Wert, der den Standardwert des Eingangs beim Start angibt. Default: `''`.
* __value__ | `string`: Textwert (für gesteuerte Komponente). Default: `none`.
* __legend__ | `(string|node)`: Eine Zeichenkette, die den Text angibt, der neben der Zahleneingabe angezeigt wird. Default: `''`.
* __inline__ | `boolean`: Gibt an, ob die Eingabe inline angezeigt wird. Default: `false`.
* __onBlur__ | `function`: Callback-Funktion, die aufgerufen wird, wenn der Textbereich den Fokus verliert. Default: `onBlur() {}`.
* __onChange__ | `function`: Eine Funktion, die aufgerufen wird, wenn ein Textwert geändert wird. Default: `onChange() {}`.
* __onKeyDown__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine beliebige Taste gedrückt wird. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine beliebige Taste eingegeben wird. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: Callback-Funktion, die aufgerufen wird, wenn die Taste losgelassen wird. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: Eine Zeichenkette, die den Wert angibt, der angezeigt werden soll, bevor eine erste Auswahl getroffen wird. Default: `none`.
* __width__ | `number`: Eine Zahl, die die Breite des Eingangs in Pixeln angibt. Default: `80`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

