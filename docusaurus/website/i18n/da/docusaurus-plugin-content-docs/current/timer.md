---
id: timer 
title: Timer
sidebar_label: Timer
---

Viser en timer, der udløser et foruddefineret callback, når tiden er gået. Et eksempel på et brugsscenarie er timingen af quizzer.

## Indstillinger

* __id__ | `string`: det unikke `string` ID for timeren. Hvis der er angivet et ID, er timer-komponenten vedvarende i forbindelse med opdateringer af siden. Default: `none`.
* __active__ | `boolean (required)`: flag, der kan skiftes til at starte eller sætte timeren på pause. Default: `none`.
* __belowZero__ | `boolean`: styrer, om timeren fortsætter med at tælle, når varigheden er udløbet. Default: `false`.
* __duration__ | `number (required)`: varighed i sekunder for timeren. Default: `none`.
* __invisible__ | `boolean`: styrer, om timeren skal være skjult. Default: `false`.
* __legend__ | `string`: tekst, der vises foran timeren. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onTimeUp__ | `function`: callback, der påkaldes, når timeren udløber. Default: `onTimeUp() {}`.


## Eksempler

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

