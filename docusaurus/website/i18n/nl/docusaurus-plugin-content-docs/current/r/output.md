---
id: r-output
title: R Output
sidebar_label: R Output
---

Component voor het weergeven van R-uitvoer binnen een ISLE-les.

## Opties

* __code__ | `string`: R-code gebruikt om te evalueren. Default: `''`.
* __libraries__ | `array`: R-bibliotheken die automatisch moeten worden geladen wanneer de invoer `code` wordt uitgevoerd. Default: `[]`.
* __prependCode__ | `(string|array)`: R-code (of `array` van codeblokken) die bij de evaluatie moet worden voorgeprogrammeerd op de code die is opgeslagen in `code`.. Default: `''`.
* __onPlots__ | `function`: callback ingeroepen met eventuele gegenereerde percelen. Default: `onPlots() {}`.
* __onResult__ | `function`: callback ingeroepen met `error` (`null` als de operatie succesvol was) en `resultaat` houden van R-uitgang. Default: `onResult() {}`.


## Voorbeelden

```jsx live
<ROutput code="runif(10)" />
```

