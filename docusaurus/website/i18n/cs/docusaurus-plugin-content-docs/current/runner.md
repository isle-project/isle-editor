---
id: runner 
title: Runner
sidebar_label: Runner
---

Komponenta runner provede zadanou funkci buď jednou, nebo v daném intervalu.

## Možnosti

* __active__ | `boolean`: řídí, zda má být běžec aktivní. Po aktivaci se v daném intervalu (nebo jednou) zavolá funkce `onEvaluate`.. Default: `true`.
* __interval__ | `number`: počet milisekund mezi jednotlivými voláními příkazu `onEvaluate`. Pokud není nastaven žádný interval, je funkce vyvolána pouze jednou.. Default: `none`.
* __onEvaluate__ | `function`: funkce, která má být vyvolána. Default: `onEvaluate() {}`.


## Příklady

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



