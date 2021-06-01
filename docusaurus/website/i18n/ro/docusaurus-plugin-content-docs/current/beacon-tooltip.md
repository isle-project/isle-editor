---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Componenta care plasează o baliză în lecție, fie independent, fie atașat la o `țintă`. La trecerea cu privirea sau la un clic pe baliză, se afișează un tooltip.

## Opțiuni

* __title__ | `(string|node)`: titlul care urmează să fie afișat în partea de sus a tooltip-ului. Default: `none`.
* __content__ | `(string|node)`: conținutul tooltip-ului. Default: `'`content` comes here...'`.
* __event__ | `string`: dacă este setat la `click`, tooltip-ul este activat atunci când se face clic pe baliză; dacă este setat la `hover`, tooltip-ul este activat prin trecerea pe lângă baliză. Default: `'click'`.
* __placement__ | `string`: plasarea tooltip-ului în raport cu `target` (fie `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, sau `center`). Default: `'left'`.
* __target__ | `string`: clasă sau selector ID pentru elementul la care se atașează tooltip-ul. Default: `''`.
* __offset__ | `number`: distanța dintre tooltip și `target` în pixeli. Default: `15`.
* __onChange__ | `function`: callback invocat la schimbarea stării tooltip-ului. Primește două argumente: `action` (`open` sau `close`) și `props` transmis.. Default: `onChange() {}`.


## Exemple

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



