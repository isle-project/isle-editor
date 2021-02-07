---
id: pages 
title: Pages
sidebar_label: Pages
---

Eine ISLE-Paginierungskomponente, die es dem Benutzer ermöglicht, durch eine Folge von Seiten zu blättern.

## Options

* __activePage__ | `number`: aktive Seite. Default: `1`.
* __disabled__ | `boolean`: steuert, ob die Navigationsleiste aktiv ist oder nicht. Default: `false`.
* __title__ | `string`: angezeigter Titel des Seitencontainers. Default: `''`.
* __pagination__ | `string`: ob die Paginierung entweder "oben", "unten" oder "beides" angezeigt werden soll. Default: `'top'`.
* __size__ | `string`: Größe der Paginierungsschaltflächen (entweder `default`, `lg`, `large`, `sm`, `small`, `xs`, oder `xsmall`). Default: `'default'`.
* __height__ | `(number|string)`: die maximale Höhe des Containers. Wenn eine eingebettete Seite höher ist, wird eine vertikale Bildlaufleiste hinzugefügt. Default: `none`.
* __voiceID__ | `string`: Kennung der Sprachsteuerung. Default: `none`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onSelect__ | `function`: Funktion, die aufgerufen wird, wenn der aktive Wechsel geändert wird. Erhält den neuen aktiven Seitenindex als einzigen Parameter. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



