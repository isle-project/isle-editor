---
id: map
title: Map
sidebar_label: Map
---

Geografická mapa, do ktorej možno zadať buď názvy lokalít, alebo hodnoty zemepisnej dĺžky/šírky.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt pre každú premennú. Default: `none`.
* __scope__ | `string`: rozsah zobrazovanej mapy. Default: `'world'`.
* __locations__ | `string`: názov premennej v `data`, ktorá obsahuje názvy umiestnenia. Default: `none`.
* __locationmode__ | `string`: buď `ISO-3`, `USA-states`, alebo `názvy krajín` označujúce spôsob kódovania hodnôt v `miestach`.. Default: `'country names'`.
* __longitude__ | `string`: názov premennej v `data`, ktorá obsahuje hodnoty zemepisnej dĺžky. Default: `none`.
* __latitude__ | `string`: názov premennej v `data`, ktorá obsahuje hodnoty zemepisnej šírky. Default: `none`.
* __showLand__ | `boolean`: či sa majú na mape zobrazovať geografické prvky. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Príklady
