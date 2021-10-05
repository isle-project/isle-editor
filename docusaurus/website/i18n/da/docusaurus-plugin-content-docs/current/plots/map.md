---
id: map
title: Map
sidebar_label: Map
---

Et geografisk kort, som enten kan leveres med stednavne eller længde-/breddegrader.

## Indstillinger

* __data__ | `object (required)`: objekt med værdiarrays for hver variabel. Default: `none`.
* __scope__ | `string`: omfanget af det kort, der skal vises. Default: `'world'`.
* __locations__ | `string`: navnet på den variabel i `data`, der indeholder stednavne. Default: `none`.
* __locationmode__ | `string`: enten `ISO-3`, `USA-states` eller `country names`, der angiver, hvordan værdierne i `locations` er kodet. Default: `'country names'`.
* __longitude__ | `string`: navnet på den variabel i `data`, der indeholder længdegradværdier. Default: `none`.
* __latitude__ | `string`: navnet på den variabel i `data`, der indeholder breddegradværdier. Default: `none`.
* __showLand__ | `boolean`: om der skal vises geografiske elementer på kortet. Default: `false`.
* __aggregation__ | `string`: streng, der angiver, hvordan værdierne skal aggregeres for hvert sted (enten `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, eller `last`). Default: `'sum'`.


## Eksempler
