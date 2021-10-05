---
id: map
title: Map
sidebar_label: Map
---

Geograafiline kaart, millele saab esitada kas asukoha nimed või pikkus- ja laiuskraadide väärtused.

## Valikud

* __data__ | `object (required)`: iga muutuja väärtuste massiivi objekt. Default: `none`.
* __scope__ | `string`: kuvatava kaardi ulatus. Default: `'world'`.
* __locations__ | `string`: asukoha nimesid sisaldava muutuja nimi `data`-süsteemis. Default: `none`.
* __locationmode__ | `string`: kas "ISO-3", "USA riigid" või "riikide nimed", mis tähistavad, kuidas väärtused "asukohas" on kodeeritud.. Default: `'country names'`.
* __longitude__ | `string`: pikkuskraadide väärtusi sisaldava muutuja "data" nimi. Default: `none`.
* __latitude__ | `string`: muutuja "data" nimi, mis sisaldab laiuskraadide väärtusi.. Default: `none`.
* __showLand__ | `boolean`: kas näidata kaardil geograafilisi tunnuseid. Default: `false`.
* __aggregation__ | `string`: undefined. Default: `'sum'`.


## Näited
