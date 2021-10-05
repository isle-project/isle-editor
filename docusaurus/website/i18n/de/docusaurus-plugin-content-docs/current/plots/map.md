---
id: map
title: Map
sidebar_label: Map
---

Eine geografische Karte, die entweder mit Ortsnamen oder mit Längen-/Breitengraden versehen werden kann.

## Optionen

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __scope__ | `string`: Umfang der anzuzeigenden Karte. Default: `'world'`.
* __locations__ | `string`: Name der Variablen in `data`, die Ortsnamen enthält. Default: `none`.
* __locationmode__ | `string`: entweder `ISO-3`, `USA-Staaten` oder `Ländernamen`, die angeben, wie Werte in `Orte` kodiert werden. Default: `'country names'`.
* __longitude__ | `string`: Name der Variablen in `data`, die die Längengradwerte enthält. Default: `none`.
* __latitude__ | `string`: Name der Variablen in `data`, die die Breitengradwerte enthält. Default: `none`.
* __showLand__ | `boolean`: ob geografische Merkmale auf der Karte angezeigt werden sollen. Default: `false`.
* __aggregation__ | `string`: Zeichenkette, die angibt, wie die Werte für jeden Ort aggregiert werden sollen (entweder `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, oder `last`). Default: `'sum'`.


## Beispiele
