---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponent som placerar en fyr i lektionen, antingen självständigt eller kopplad till ett "mål". När du svävar eller klickar på fyren visas ett verktygstips.

## Alternativ

* __title__ | `(string|node)`: titel som ska visas högst upp i verktygstipsen. Default: `none`.
* __content__ | `(string|node)`: innehåll i tooltip. Default: `'`content` comes here...'`.
* __event__ | `string`: om inställd på `click`, växlas tooltip när man klickar på fyren; om inställd på `hover`, aktiveras tooltip genom svävande. Default: `'click'`.
* __placement__ | `string`: placering av verktygstipsen i förhållande till `target` (antingen `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, eller `center`). Default: `'left'`.
* __target__ | `string`: klass eller ID-val för elementet som ska bifogas tooltip till. Default: `''`.
* __offset__ | `number`: Avstånd mellan tooltip och `target` i pixlar. Default: `15`.
* __onChange__ | `function`: callback som aktiveras vid ändring av verktygstipsens tillstånd. Tar emot två argument: `action` (`open` eller `close`) och de överlämnade `props`.. Default: `onChange() {}`.


## Exempel

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



