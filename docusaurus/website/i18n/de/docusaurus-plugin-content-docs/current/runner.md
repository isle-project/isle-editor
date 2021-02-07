---
id: runner 
title: Runner
sidebar_label: Runner
---

Die Läuferkomponente führt eine bereitgestellte Funktion entweder einmalig oder in einem bestimmten Intervall aus.

## Options

* __active__ | `boolean`: steuert, ob der Läufer aktiv sein soll. Bei Aktivierung wird die Funktion `onEvaluate` im angegebenen Intervall (oder einmal) aufgerufen. Default: `true`.
* __interval__ | `number`: Anzahl der Millisekunden zwischen den Aufrufen von `onEvaluate`. Wenn kein Intervall eingestellt ist, wird die Funktion nur einmal aufgerufen. Default: `none`.
* __onEvaluate__ | `function`: aufzurufende Funktion. Default: `onEvaluate() {}`.


## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



