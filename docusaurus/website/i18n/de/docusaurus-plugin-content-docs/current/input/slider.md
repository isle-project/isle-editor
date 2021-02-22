---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Eine Schieberegler-Eingabekomponente. Kann als Teil eines ISLE Dashboards oder eigenständig verwendet werden. Im letzteren Fall wollen Sie Änderungen über das Attribut `onChange` behandeln oder den Wert über das Attribut `bind` an eine globale Variable binden.

## Optionen

* __defaultValue__ | `number`: Der Startwert des Schiebereglers. Default: `10`.
* __disabled__ | `boolean`: steuert, ob der Schieberegler-Eingang aktiv ist oder nicht. Wenn auf true gesetzt, ist der Schieberegler auf dem Bildschirm vorhanden, wenn auch ausgegraut. Default: `false`.
* __inline__ | `boolean`: steuert, ob der Schieberegler inline mit Text oder außerhalb platziert werden soll. Default: `false`.
* __legend__ | `(string|node)`: Beschriftung des Eingangs. Default: `none`.
* __max__ | `number`: Der maximale Wert des Schiebereglers. Default: `100`.
* __maxLabel__ | `string`: Beschriftung, die rechts vom Schieberegler anstelle des Maximalwerts angezeigt wird. Default: `none`.
* __min__ | `number`: Der minimale Wert des Schiebereglers. Default: `0`.
* __minLabel__ | `string`: Beschriftung, die links vom Schieberegler anstelle des Mindestwerts angezeigt wird. Default: `none`.
* __onChange__ | `function`: Callback, der mit dem neuen Wert aufgerufen wird, wenn sich der Schiebereglerwert ändert. Default: `onChange() {}`.
* __precision__ | `number`: Rundung der Eingabe. Der Wert wird so gerundet, dass er nicht mehr signifikante Stellen hat als die Genauigkeit. Wenn man z. B. nur ganze Zahlen verwenden möchte, würde man eine Genauigkeit von 10 verwenden, während man, wenn man auf die Hunderterstelle runden möchte, eine Genauigkeit von 0,001 verwenden würde. Default: `10`.
* __step__ | `(number|string)`: Schrittweite des Schiebereglers. Default: `1`.
* __hideTooltip__ | `boolean`: steuert, ob der Tooltip ausgeblendet werden soll. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __numberInputStyle__ | `object`: CSS-Inline-Stile für Zahleneingabekomponente. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS-Inlinestil für Bereichseingabekomponente. Default: `{}`.


## Beispiele

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```



