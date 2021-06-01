---
id: runner 
title: Runner
sidebar_label: Runner
---

Runner-komponenten udfører en medfølgende funktion enten én gang eller med et givet interval.

## Indstillinger

* __active__ | `boolean`: kontrollerer, om løberen skal være aktiv. Ved aktivering kaldes funktionen `onEvaluate` i det angivne interval (eller én gang). Default: `true`.
* __interval__ | `number`: antal millisekunder mellem kald af `onEvaluate`. Hvis der ikke er angivet noget interval, påkaldes funktionen kun én gang. Default: `none`.
* __onEvaluate__ | `function`: funktion, der skal påberåbes. Default: `onEvaluate() {}`.


## Eksempler

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



