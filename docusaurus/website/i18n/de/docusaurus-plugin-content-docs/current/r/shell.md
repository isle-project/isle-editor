---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Eine interaktive R-Shell, die zum Ausführen von R-Befehlen in der Cloud mit [OpenCPU](https://www.opencpu.org/) verwendet werden kann.

## Options

* __code__ | `string`: Zu bewertender R-Code. Default: `''`.
* __solution__ | `string`: für Programmierfragen, R-Code `string`, der die offizielle Lösung für das Problem darstellt. Default: `''`.
* __hints__ | `array<(string|node)>`: bei Programmierfragen eine Reihe von Hinweisen, die eine Hilfestellung bei der Herangehensweise an das Problem geben. Default: `[]`.
* __addPreceding__ | `boolean`: wenn auf true gesetzt, wertet die Shell den gesamten Code der aktuellen Komponente und aller vorhergehenden aus, die in der Lektion vorkommen. Default: `false`.
* __libraries__ | `array`: R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgeführt wird. Default: `[]`.
* __precompute__ | `boolean`: steuert, ob der Standardcode ausgeführt werden soll, wenn die Komponente montiert ist. Default: `false`.
* __prependCode__ | `(string|array)`: R-Code `string` (oder `array` von R-Codeblöcken), der bei der Auswertung dem in `code` gespeicherten Code vorangestellt wird. Default: `''`.
* __chat__ | `boolean`: steuert, ob die Gruppenchatfunktionalität aktiviert werden soll. Default: `false`.
* __disabled__ | `boolean`: steuert, ob alle Benutzereingaben deaktiviert und der Codeblock statisch werden soll. Default: `false`.
* __lines__ | `number`: Anzahl der anzuzeigenden Zeilen. Default: `5`.
* __resettable__ | `boolean`: steuert, ob eine Reset-Taste zum Wiederherstellen der Standard-Codeeingabe angezeigt werden soll. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der bei jeder Änderung der Textfeldeingabe aufgerufen wird. Default: `onChange() {}`.
* __onEvaluate__ | `function`: Callback, der immer dann aufgerufen wird, wenn die Schaltfläche `Evaluate` angeklickt wird. Default: `onEvaluate(){}`.
* __onResult__ | `function`: Callback, der immer dann aufgerufen wird, wenn das Ergebnis einer Code-Ausführung aus der Cloud bezogen wird. Das Ergebnis `String` wird als einziges Argument an die Callback-Funktion übergeben. Default: `onResult() {}`.


## Examples

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

