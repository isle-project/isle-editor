---
id: runner 
title: Runner
sidebar_label: Runner
---

Runner-komponent täidab tarnitud funktsiooni kas üks kord või teatud ajavahemiku tagant.

## Valikud

* __active__ | `boolean`: kontrollib, kas jooksja peaks olema aktiivne. Aktiveerimisel kutsutakse funktsiooni `onEvaluate` antud intervalli jooksul (või üks kord).. Default: `true`.
* __interval__ | `number`: millisekundite arv "onEvaluate" käivitamiste vahel. Kui intervalli ei ole määratud, käivitatakse funktsioon ainult üks kord.. Default: `none`.
* __onEvaluate__ | `function`: kutsutav funktsioon. Default: `onEvaluate() {}`.


## Näited

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



