---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponenta umisťující maják do lekce, buď samostatně, nebo připojená k `cíli`. Po najetí nebo kliknutí na maják se zobrazí nápověda.

## Možnosti

* __title__ | `(string|node)`: název, který se zobrazí v horní části nápovědy k nástroji.. Default: `none`.
* __content__ | `(string|node)`: obsah nápovědy. Default: `'`content` comes here...'`.
* __event__ | `string`: pokud je nastaveno na `click`, nápověda se přepne při kliknutí na maják; pokud je nastaveno na `hover`, nápověda se aktivuje při najetí na maják.. Default: `'click'`.
* __placement__ | `string`: umístění nápovědy vzhledem k `cíli` (buď `top`, `nahoře-začátek`, `nahoře-konec`, `bottom`, `dole-konec`, `left`, `vlevo-začátek`, `vlevo-konec`, `right`, `vpravo-začátek`, `vpravo-konec`, `auto` nebo `střed`).. Default: `'left'`.
* __target__ | `string`: třída nebo selektor ID prvku, ke kterému se má připojit nápověda.. Default: `''`.
* __offset__ | `number`: vzdálenost mezi tipem nástroje a `cílem` v pixelech.. Default: `15`.
* __onChange__ | `function`: zpětné volání vyvolané při změně stavu nápisu. Přijímá dva argumenty: `action` (`open` nebo `close`) a předané `props`.. Default: `onChange() {}`.


## Příklady

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



