---
id: map
title: Map
sidebar_label: Map
---

Un mapa geográfico que puede ser suministrado con nombres de lugares o valores de longitud/latitud.

## Opciones

* __data__ | `object (required)`: objeto de matrices de valores para cada variable. Default: `none`.
* __scope__ | `string`: alcance del mapa que se mostrará. Default: `'world'`.
* __locations__ | `string`: nombre de la variable en "datos" que contiene los nombres de las ubicaciones. Default: `none`.
* __locationmode__ | `string`: ya sea "ISO-3", "Estados Unidos", o "nombres de países" que denotan cómo están codificados los valores en "lugares". Default: `'country names'`.
* __longitude__ | `string`: nombre de la variable en "datos" que contiene valores de longitud. Default: `none`.
* __latitude__ | `string`: nombre de la variable en "datos" que contiene valores de latitud. Default: `none`.
* __showLand__ | `boolean`: si mostrar los rasgos geográficos en el mapa. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Ejemplos
