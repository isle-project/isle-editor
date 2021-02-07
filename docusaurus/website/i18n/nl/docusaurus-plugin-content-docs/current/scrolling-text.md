---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Een dynamische achtergrondcomponent die met een bepaald interval door een lijst van teksten heenloopt.

## Options

* __list__ | `array<string>`: lijst van weer te geven teksten. Default: `[]`.
* __loop__ | `boolean`: geeft aan of het proces oneindig moet worden weergegeven. Default: `false`.
* __direction__ | `string`: de richting van de tekststroom (ofwel `left`, `right`, `up`, `down`, `tracking`, `focus`, of `swirl`). Default: `'right'`.
* __still__ | `number`: de tijd dat de tekst stilstaat (in seconden). Default: `3`.
* __interval__ | `number`: het interval tussen de gesprekken (in seconden). Default: `15`.
* __inTime__ | `number`: tijd van het ingangseffect (in seconden). Default: `0.6`.
* __outTime__ | `number`: tijd van het uitgangseffect (in seconden). Default: `1`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS-stijlen van de tekst. Default: `{}`.


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



