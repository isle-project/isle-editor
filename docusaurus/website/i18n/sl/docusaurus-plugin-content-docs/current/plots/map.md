---
id: map
title: Map
sidebar_label: Map
---

Geografski zemljevid, ki mu lahko posredujete imena lokacij ali vrednosti zemljepisne dolžine/širine.

## Možnosti

* __data__ | `object (required)`: predmet polja vrednosti za vsako spremenljivko. Default: `none`.
* __scope__ | `string`: obseg prikaza zemljevida. Default: `'world'`.
* __locations__ | `string`: ime spremenljivke v `data`, ki hrani imena lokacij. Default: `none`.
* __locationmode__ | `string`: `ISO-3`, `USA-states` ali `imena držav`, ki označujejo način kodiranja vrednosti v `lokacijah`.. Default: `'country names'`.
* __longitude__ | `string`: ime spremenljivke v datoteki `data`, ki vsebuje vrednosti zemljepisne dolžine. Default: `none`.
* __latitude__ | `string`: ime spremenljivke v `data`, ki vsebuje vrednosti zemljepisne širine. Default: `none`.
* __showLand__ | `boolean`: ali naj se na zemljevidu prikažejo geografske značilnosti.. Default: `false`.
* __aggregation__ | `string`: niz, ki označuje način združevanja vrednosti za vsako lokacijo (bodisi `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first` ali `last`). Default: `'sum'`.


## Primeri
