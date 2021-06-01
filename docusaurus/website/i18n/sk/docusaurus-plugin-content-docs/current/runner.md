---
id: runner 
title: Runner
sidebar_label: Runner
---

Komponent runner vykoná dodanú funkciu buď raz, alebo v danom intervale.

## Možnosti

* __active__ | `boolean`: kontroluje, či má byť bežec aktívny. Po aktivácii sa v danom intervale (alebo raz) zavolá funkcia `onEvaluate`.. Default: `true`.
* __interval__ | `number`: počet milisekúnd medzi vyvolaniami príkazu `onEvaluate`. Ak nie je nastavený žiadny interval, funkcia sa vyvolá iba raz. Default: `none`.
* __onEvaluate__ | `function`: funkcia, ktorá sa má vyvolať. Default: `onEvaluate() {}`.


## Príklady

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



