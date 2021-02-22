---
id: runner 
title: Runner
sidebar_label: Runner
---

Het lopercomponent voert een geleverde functie eenmalig of met een bepaalde tussenpoos uit.

## Opties

* __active__ | `boolean`: controleert of de loper actief moet zijn. Bij activering wordt de `onEvaluate` functie aangeroepen in het gegeven interval (of eenmalig). Default: `true`.
* __interval__ | `number`: aantal milliseconden tussen aanroepingen van `onEvaluate`. Als er geen interval is ingesteld, wordt de functie slechts één keer aangeroepen. Default: `none`.
* __onEvaluate__ | `function`: in te roepen functie. Default: `onEvaluate() {}`.


## Voorbeelden

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



