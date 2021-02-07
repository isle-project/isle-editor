---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Component voor het weergeven van een R-plot binnen een ISLE-les.

## Options

* __code__ | `string`: R-code voor het genereren van de plot. Default: `''`.
* __width__ | `(number|string)`: breedte van het perceel (in px). Default: `600`.
* __height__ | `(number|string)`: hoogte van het perceel (in px). Default: `'auto'`.
* __draggable__ | `boolean`: controleert of het perceel versleepbaar moet zijn. Default: `false`.
* __fileType__ | `string`: bestandstype van het perceel (`png` of `svg`). Default: `'svg'`.
* __libraries__ | `array`: R-bibliotheken die automatisch moeten worden geladen wanneer de invoer `code` wordt uitgevoerd. Default: `[]`.
* __prependCode__ | `(string|array)`: Koord' of een 'raster' van R-code-fragmenten die bij de evaluatie van de code in 'code' moeten worden voorgeprogrammeerd.. Default: `''`.
* __meta__ | `object`: plotmeta-informatie. Default: `none`.
* __className__ | `string`: klassennaam. Default: `''`.
* __onDone__ | `function`: callback ingeroepen met `err`, `img` en `body` argumenten zodra een plot is gecreëerd. Default: `onDone() {}`.


## Examples

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

