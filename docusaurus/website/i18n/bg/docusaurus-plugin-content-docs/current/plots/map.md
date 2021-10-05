---
id: map
title: Map
sidebar_label: Map
---

Географска карта, за която могат да се предоставят имена на местоположение или стойности за географска дължина/ширина.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности за всяка променлива. Default: `none`.
* __scope__ | `string`: обхват на картата, която трябва да се покаже. Default: `'world'`.
* __locations__ | `string`: име на променливата в `data`, която съдържа имената на местоположението. Default: `none`.
* __locationmode__ | `string`: или `ISO-3`, `USA-states`, или `country names`, обозначаващи начина на кодиране на стойностите в `locations`.. Default: `'country names'`.
* __longitude__ | `string`: име на променливата в `data`, която съдържа стойности за географската дължина. Default: `none`.
* __latitude__ | `string`: име на променливата в `data`, която съдържа стойностите на географската ширина. Default: `none`.
* __showLand__ | `boolean`: дали да показвате географски характеристики на картата. Default: `false`.
* __aggregation__ | `string`: низ, указващ начина на обобщаване на стойностите за всяко местоположение (или `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, или `last`). Default: `'sum'`.


## Примери
