---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponente, die eine Bake in der Lektion platziert, entweder unabhängig oder an ein "Ziel" angehängt. Wenn Sie den Mauszeiger über die Bake bewegen oder darauf klicken, wird eine QuickInfo angezeigt.

## Optionen

* __title__ | `(string|node)`: Titel, der oben in der QuickInfo angezeigt werden soll. Default: `none`.
* __content__ | `(string|node)`: Tooltip-Inhalt. Default: `'`content` comes here...'`.
* __event__ | `string`: wenn auf `click` gesetzt, wird der Tooltip beim Klicken auf die Bake umgeschaltet; wenn auf `hover` gesetzt, wird der Tooltip durch Schweben aktiviert. Default: `'click'`.
* __placement__ | `string`: Platzierung des Tooltips relativ zu `target` (entweder `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, oder `center`). Default: `'left'`.
* __target__ | `string`: Klasse oder ID-Selektor für Element, an das Tooltip angehängt werden soll. Default: `''`.
* __offset__ | `number`: Abstand zwischen Tooltip und `Target` in Pixel. Default: `15`.
* __onChange__ | `function`: Callback, der bei einer Zustandsänderung des Tooltips aufgerufen wird. Erhält zwei Argumente: die `Action` (`open` oder `close`) und die übergebenen `Pros`.. Default: `onChange() {}`.


## Beispiele

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



