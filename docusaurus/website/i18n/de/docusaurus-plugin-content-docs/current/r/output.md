---
id: r-output
title: R Output
sidebar_label: R Output
---

Komponente zum Rendern der R-Ausgabe innerhalb einer ISLE-Lektion.

## Options

* __code__ | `string`: R-Code zur Auswertung. Default: `''`.
* __libraries__ | `array`: R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgeführt wird. Default: `[]`.
* __prependCode__ | `(string|array)`: R-Code (oder `Array` von Codeblöcken), der bei der Auswertung dem in `code` gespeicherten Code vorangestellt wird. Default: `''`.
* __onPlots__ | `function`: Callback, der mit allen erzeugten Plots aufgerufen wird. Default: `onPlots() {}`.
* __onResult__ | `function`: Callback, der mit `error` (`null`, wenn die Operation erfolgreich war) und `result` mit der R-Ausgabe aufgerufen wird. Default: `onResult() {}`.


## Examples

```jsx live
<ROutput code="runif(10)" />
```

