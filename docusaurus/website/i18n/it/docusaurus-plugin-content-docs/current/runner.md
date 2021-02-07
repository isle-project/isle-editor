---
id: runner 
title: Runner
sidebar_label: Runner
---

Il componente runner eseguirà una funzione fornita una volta o ad un determinato intervallo.

## Options

* __active__ | `boolean`: controlla se il corridore deve essere attivo. All'attivazione, la funzione `onEvaluate` viene chiamata nell'intervallo dato (o una volta). Default: `true`.
* __interval__ | `number`: numero di millisecondi tra le invocazioni di `onEvaluate`. Se non viene impostato alcun intervallo, la funzione viene invocata una sola volta. Default: `none`.
* __onEvaluate__ | `function`: funzione da invocare. Default: `onEvaluate() {}`.


## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



