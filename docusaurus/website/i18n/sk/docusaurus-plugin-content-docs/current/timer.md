---
id: timer 
title: Timer
sidebar_label: Timer
---

Zobrazí časovač, ktorý po uplynutí času spustí preddefinované spätné volanie. Príkladom použitia je časovanie kvízov.

## Možnosti

* __id__ | `string`: jedinečný `reťazec` ID pre časovač. Ak je nastavené ID, komponent časovača je trvalý počas obnovenia stránky. Default: `none`.
* __active__ | `boolean (required)`: príznak, ktorý možno prepínať na spustenie alebo pozastavenie časovača. Default: `none`.
* __belowZero__ | `boolean`: kontroluje, či časovač pokračuje v počítaní po uplynutí doby trvania.. Default: `false`.
* __duration__ | `number (required)`: trvanie časovača v sekundách. Default: `none`.
* __invisible__ | `boolean`: kontroluje, či má byť časovač skrytý.. Default: `false`.
* __legend__ | `string`: text zobrazený pred časovačom. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onTimeUp__ | `function`: spätné volanie vyvolané po vypršaní časovača. Default: `onTimeUp() {}`.


## Príklady

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

