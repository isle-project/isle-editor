---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Eine Komponente zur Eingabe von Proportionen. Kann als Teil eines ISLE Dashboards oder eigenständig verwendet werden. Im letzteren Fall möchten Sie Änderungen über das Attribut `onChange` behandeln oder den Wert über das Attribut `bind` an eine globale Variable binden.

## Optionen

* __colors__ | `array<string>`: Array mit Farben für die Kreisdiagrammkomponenten. Wenn nicht definiert, wird eine benutzerdefinierte Farbskala verwendet. Default: `none`.
* __disabled__ | `boolean`: steuert, ob das Eingabefeld deaktiviert ist. Default: `false`.
* __height__ | `number`: Proportionen Eingangshöhe (in px). Default: `200`.
* __legends__ | `array`: Gruppenbeschriftungen. Default: `[]`.
* __onChange__ | `function`: Callback-Funktion, die aufgerufen wird, wenn eine Auswahl getroffen wird. Default: `onChange(){}`.
* __precision__ | `number`: Angezeigte Präzision der Anteilswerte. Default: `1`.
* __step__ | `number`: die Stufe der Pfeile, die zu sehen sind, wenn der Cursor über dem Eingabefeld schwebt. Default: `0.1`.


## Beispiele

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

