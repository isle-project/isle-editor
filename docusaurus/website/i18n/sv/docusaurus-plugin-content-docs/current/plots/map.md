---
id: map
title: Map
sidebar_label: Map
---

En geografisk karta som antingen kan levereras med platsnamn eller värden för longitud/latitud.

## Alternativ

* __data__ | `object (required)`: objekt med värdematriser för varje variabel. Default: `none`.
* __scope__ | `string`: omfattningen av den karta som ska visas. Default: `'world'`.
* __locations__ | `string`: namnet på variabeln i `data` som innehåller platsnamn. Default: `none`.
* __locationmode__ | `string`: antingen `ISO-3`, `USA-states` eller `country names` som anger hur värden i `locations` kodas.. Default: `'country names'`.
* __longitude__ | `string`: Namnet på variabeln i `data` som innehåller longitudvärden.. Default: `none`.
* __latitude__ | `string`: namnet på den variabel i `data` som innehåller latitudvärden. Default: `none`.
* __showLand__ | `boolean`: om geografiska funktioner ska visas på kartan. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Exempel
