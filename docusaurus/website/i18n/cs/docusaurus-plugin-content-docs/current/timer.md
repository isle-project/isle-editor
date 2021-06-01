---
id: timer 
title: Timer
sidebar_label: Timer
---

Zobrazí časovač, který po uplynutí času spustí předdefinované zpětné volání. Příkladem použití je časování kvízů.

## Možnosti

* __id__ | `string`: jedinečné `řetězcové` ID časovače. Pokud je ID nastaveno, je komponenta časovače trvalá i při obnovení stránky.. Default: `none`.
* __active__ | `boolean (required)`: příznak, který lze přepnout pro spuštění nebo pozastavení časovače.. Default: `none`.
* __belowZero__ | `boolean`: řídí, zda časovač pokračuje vpočítávání po vyčerpání doby trvání.. Default: `false`.
* __duration__ | `number (required)`: doba trvání časovače v sekundách. Default: `none`.
* __invisible__ | `boolean`: určuje, zda má být časovač skrytý.. Default: `false`.
* __legend__ | `string`: text zobrazený před časovačem. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onTimeUp__ | `function`: zpětné volání vyvolané po vypršení časovače. Default: `onTimeUp() {}`.


## Příklady

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

