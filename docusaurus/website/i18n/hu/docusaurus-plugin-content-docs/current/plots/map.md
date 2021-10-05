---
id: map
title: Map
sidebar_label: Map
---

Földrajzi térkép, amelyhez megadható helynevek vagy hosszúsági és szélességi értékek.

## Opciók

* __data__ | `object (required)`: az egyes változók értéktábláinak objektuma. Default: `none`.
* __scope__ | `string`: a megjelenítendő térkép hatóköre. Default: `'world'`.
* __locations__ | `string`: a helyneveket tartalmazó változó neve a "data"-ban. Default: `none`.
* __locationmode__ | `string`: vagy "ISO-3", "USA-államok", vagy "országnevek", amelyek a "helységek" értékeinek kódolását jelölik.. Default: `'country names'`.
* __longitude__ | `string`: a földrajzi hosszúság értékeit tartalmazó változó neve a "data"-ban. Default: `none`.
* __latitude__ | `string`: a szélességi értékeket tartalmazó változó neve a "data"-ban. Default: `none`.
* __showLand__ | `boolean`: a földrajzi jellemzők megjelenítése a térképen. Default: `false`.
* __aggregation__ | `string`: karakterlánc, amely jelzi, hogy az egyes helyekre vonatkozó értékeket hogyan kell összesíteni (vagy `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, vagy `last`).. Default: `'sum'`.


## Példák
