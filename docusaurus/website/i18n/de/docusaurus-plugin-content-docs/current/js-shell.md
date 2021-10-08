---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Eine interaktive Javascript-Shell, die zum Ausführen von Javascript-Befehlen verwendet werden kann. Die Shell enthält eine Konsole, die Fehlermeldungen, Warnungen usw. anzeigt.

## Optionen

* __code__ | `string`: JavaScript-Code, der ausgewertet werden soll. Default: `''`.
* __solution__ | `string`: für Programmierfragen, Code `String`, der die offizielle Lösung für das Problem darstellt. Default: `''`.
* __hints__ | `array<(string|node)>`: bei Programmierfragen eine Reihe von Hinweisen, die eine Hilfestellung bei der Herangehensweise an das Problem geben. Default: `[]`.
* __precompute__ | `boolean`: steuert, ob der Standardcode ausgeführt werden soll, wenn die Komponente montiert ist. Default: `false`.
* __chat__ | `boolean`: steuert, ob die Gruppenchatfunktionalität aktiviert werden soll. Default: `false`.
* __check__ | `string`: angehängter JavaScript-Code zur Überprüfung des auszuwertenden `Codes`. Default: `none`.
* __disabled__ | `boolean`: steuert, ob alle Benutzereingaben deaktiviert und der Codeblock statisch werden soll. Default: `false`.
* __lines__ | `number`: Anzahl der anzuzeigenden Zeilen. Default: `5`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der bei jeder Änderung der Textfeldeingabe aufgerufen wird. Default: `onChange() {}`.
* __onEvaluate__ | `function`: Callback, der immer dann aufgerufen wird, wenn die Schaltfläche `Evaluate` angeklickt wird. Default: `onEvaluate() {}`.
* __vars__ | `object`: Scope-Objekt mit Variablen, die dem ausgewerteten `Code` zur Verfügung gestellt werden sollen. Default: `none`.


## Beispiele

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




