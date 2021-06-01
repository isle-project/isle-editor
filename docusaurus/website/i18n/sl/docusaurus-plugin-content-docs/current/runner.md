---
id: runner 
title: Runner
sidebar_label: Runner
---

Komponenta Runner bo izvedla posredovano funkcijo enkrat ali v določenem časovnem intervalu.

## Možnosti

* __active__ | `boolean`: določa, ali naj bo tekač aktiven. Ob aktivaciji se v danem intervalu (ali enkrat) pokliče funkcija `onEvaluate`.. Default: `true`.
* __interval__ | `number`: število milisekund med klici funkcije `onEvaluate`. Če interval ni nastavljen, se funkcija prikliče samo enkrat.. Default: `none`.
* __onEvaluate__ | `function`: funkcija, ki jo je treba priklicati. Default: `onEvaluate() {}`.


## Primeri

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



