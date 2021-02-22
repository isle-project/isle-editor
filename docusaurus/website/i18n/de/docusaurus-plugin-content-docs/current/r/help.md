---
id: r-help
title: R Help
sidebar_label: R Help
---

Bringen Sie Wörter dazu, die R-Dokumentation in einem modalen Fenster aufzurufen, wenn sie angeklickt werden.

## Optionen

* __func__ | `string`: Name der `R-Funktion`, für die die Dokumentation geöffnet werden soll. Falls nicht angegeben, wird angenommen, dass der Inhalt des `RHelp`-Tags gleich dem Namen der Funktion ist. Default: `''`.
* __library__ | `string`: Name des R-Pakets, in dem sich die Funktion befindet. Default: `'base'`.
* __visible__ | `boolean`: steuert, ob das modale Hilfefenster beim Starten geöffnet werden soll. Default: `false`.


## Beispiele

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

