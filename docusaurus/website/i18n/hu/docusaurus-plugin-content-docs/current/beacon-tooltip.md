---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

A leckében elhelyezett komponens, amely önállóan vagy egy "célponthoz" csatolva elhelyez egy jelzőfényt. A jelzőfényre való lebegtetés vagy kattintás után egy tooltip jelenik meg.

## Opciók

* __title__ | `(string|node)`: a tooltip tetején megjelenítendő cím. Default: `none`.
* __content__ | `(string|node)`: tooltip tartalom. Default: `'`content` comes here...'`.
* __event__ | `string`: ha `click`-re van állítva, akkor a tooltip a jelzőfényre kattintva változik; ha `hover`-re van állítva, akkor a tooltip a lebegtetéssel aktiválódik.. Default: `'click'`.
* __placement__ | `string`: a tooltip elhelyezése a `célponthoz` képest (vagy `top`, `top-kezdet`, `top-vég`, `alul`, `alul-vég`, `bal`, `bal-kezdet`, `bal-vég`, `jobb`, `jobb-kezdet`, `jobb-vég`, `auto` vagy `center`). Default: `'left'`.
* __target__ | `string`: osztály vagy ID szelektor az elemhez, amelyhez a tooltip csatolandó. Default: `''`.
* __offset__ | `number`: a tooltip és a `célpont` közötti távolság pixelben. Default: `15`.
* __onChange__ | `function`: callback, amelyet az eszköztár állapotváltásakor hívnak meg. Két argumentumot kap: az "action"-t ("open" vagy "close") és az átadott "props"-t.. Default: `onChange() {}`.


## Példák

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



