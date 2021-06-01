---
id: runner 
title: Runner
sidebar_label: Runner
---

A futó komponens egyszer vagy egy adott időközönként végrehajtja a megadott függvényt.

## Opciók

* __active__ | `boolean`: szabályozza, hogy a futó aktív legyen-e. Aktiváláskor a `onEvaluate` függvényt a megadott időközönként (vagy egyszer) hívja meg a futó.. Default: `true`.
* __interval__ | `number`: az "onEvaluate" meghívásai közötti milliszekundumok száma. Ha nincs megadva intervallum, a függvény csak egyszer hívódik meg.. Default: `none`.
* __onEvaluate__ | `function`: meghívandó funkció. Default: `onEvaluate() {}`.


## Példák

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



