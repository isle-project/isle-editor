---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Eine dynamische Hintergrundkomponente, die in einem festgelegten Intervall eine Liste von Texten durchläuft.

## Options

* __list__ | `array<string>`: Liste der anzuzeigenden Texte. Default: `[]`.
* __loop__ | `boolean`: gibt an, ob der Prozess unendlich angezeigt werden soll. Default: `false`.
* __direction__ | `string`: die Richtung des Textflusses (entweder `left`, `right`, `oben`, `unten`, `verfolgen`, `fokussieren` oder `wirbeln`). Default: `'right'`.
* __still__ | `number`: die Zeit, die der Text stillsteht (in Sekunden). Default: `3`.
* __interval__ | `number`: das Intervall zwischen den Anrufen (in Sekunden). Default: `15`.
* __inTime__ | `number`: Zeit des Eintrittseffekts (in Sekunden). Default: `0.6`.
* __outTime__ | `number`: Zeit des Ausgangseffekts (in Sekunden). Default: `1`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Stile des Textes. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



