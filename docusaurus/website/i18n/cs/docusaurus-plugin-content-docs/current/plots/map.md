---
id: map
title: Map
sidebar_label: Map
---

Geografická mapa, do které lze zadat buď názvy míst, nebo hodnoty zeměpisné délky a šířky.

## Možnosti

* __data__ | `object (required)`: objekt pole hodnot pro každou proměnnou. Default: `none`.
* __scope__ | `string`: rozsah zobrazované mapy. Default: `'world'`.
* __locations__ | `string`: název proměnné v `data`, která obsahuje názvy umístění. Default: `none`.
* __locationmode__ | `string`: buď `ISO-3`, `USA-states`, nebo `názvy zemí` označující způsob kódování hodnot v `místech`.. Default: `'country names'`.
* __longitude__ | `string`: název proměnné v `data`, která obsahuje hodnoty zeměpisné délky. Default: `none`.
* __latitude__ | `string`: název proměnné v `data`, která obsahuje hodnoty zeměpisné šířky. Default: `none`.
* __showLand__ | `boolean`: zda zobrazovat geografické prvky na mapě. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Příklady
