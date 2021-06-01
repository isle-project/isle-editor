---
id: runner 
title: Runner
sidebar_label: Runner
---

Runner-komponenten kommer att utföra en funktion som tillhandahålls antingen en gång eller med ett visst intervall.

## Alternativ

* __active__ | `boolean`: kontrollerar om löparen ska vara aktiv. Vid aktivering anropas funktionen "onEvaluate" med det angivna intervallet (eller en gång).. Default: `true`.
* __interval__ | `number`: antal millisekunder mellan anrop av `onEvaluate`. Om inget intervall anges anropas funktionen endast en gång.. Default: `none`.
* __onEvaluate__ | `function`: funktion som ska åberopas. Default: `onEvaluate() {}`.


## Exempel

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



