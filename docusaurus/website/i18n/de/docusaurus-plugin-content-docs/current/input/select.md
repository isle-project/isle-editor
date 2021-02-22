---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Eine ausgewählte Eingabekomponente. Kann als Teil eines ISLE Dashboards oder standalone verwendet werden. Im letzteren Fall wollen Sie Änderungen über das Attribut `onChange` behandeln oder den Wert über das Attribut `bind` an eine globale Variable binden.

## Optionen

* __bind__ | `string`: Name der globalen Variablen, der die Nummer zugewiesen werden soll. Default: `''`.
* __clearable__ | `boolean`: boolescher Wert, der angibt, ob man die getroffene(n) Auswahl(en) löschen darf. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: Vorgabewert des Eingangs beim Starten. Default: `none`.
* __disabled__ | `boolean`: steuert, ob der Eingang aktiv ist oder nicht. Default: `false`.
* __inline__ | `boolean`: gibt an, ob die Eingabe inline angezeigt wird. Default: `false`.
* __legend__ | `(string|node)`: Text, der neben dem Eingang angezeigt wird. Default: `''`.
* __menuPlacement__ | `string`: Platzierung des Menüs in Bezug auf das Steuerelement (entweder `auto`, `top` oder `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: steuert, ob man mehrere Antworten auswählen darf. Default: `false`.
* __onChange__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine Auswahl getroffen wird. Default: `onChange() {}`.
* __options__ | `array`: Array, das die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten anzeigt. Default: `[]`.
* __placeholder__ | `string`: Wert, der angezeigt werden soll, bevor eine erste Auswahl getroffen wird. Default: `none`.
* __tooltip__ | `string`: Text, der angezeigt wird, wenn der Mauszeiger über die Legende bewegt wird. Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Beispiele

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

