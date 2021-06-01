---
id: timer 
title: Timer
sidebar_label: Timer
---

Visar en timer som utlöser en fördefinierad callback när tiden är ute. Ett exempel på användningsfall är tidtagning av frågesporter.

## Alternativ

* __id__ | `string`: unikt sträng-ID för timern. Om ett ID anges är timerkomponenten beständig även när sidan uppdateras.. Default: `none`.
* __active__ | `boolean (required)`: flagga som kan växlas för att starta eller pausa timern. Default: `none`.
* __belowZero__ | `boolean`: kontrollerar om timern fortsätter att räkna när tiden är slut.. Default: `false`.
* __duration__ | `number (required)`: varaktighet i sekunder för timern. Default: `none`.
* __invisible__ | `boolean`: kontrollerar om timern ska döljas. Default: `false`.
* __legend__ | `string`: text som visas framför timern. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onTimeUp__ | `function`: callback som aktiveras när timern löper ut. Default: `onTimeUp() {}`.


## Exempel

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

