---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponent, der placerer en beacon i undervisningen, enten uafhængigt eller knyttet til et `target`. Når der svæves eller klikkes på fyret, vises et tooltip.

## Indstillinger

* __title__ | `(string|node)`: titel, der skal vises øverst i tooltip'et. Default: `none`.
* __content__ | `(string|node)`: indhold af tooltip. Default: `'`content` comes here...'`.
* __event__ | `string`: hvis indstillet til `click`, skiftes tooltip til at være aktiv, når der klikkes på fyret; hvis indstillet til `hover`, aktiveres tooltip ved at svæve. Default: `'click'`.
* __placement__ | `string`: placering af værktøjstip i forhold til `target` (enten `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, eller `center`). Default: `'left'`.
* __target__ | `string`: klasse eller ID-selektor for det element, som tooltip skal knyttes til. Default: `''`.
* __offset__ | `number`: afstand mellem tooltip og `target` i pixel. Default: `15`.
* __onChange__ | `function`: callback, der påkaldes ved ændring af værktøjstipens tilstand. Modtager to argumenter: `action` (`open` eller `close`) og de overgivne `props`.. Default: `onChange() {}`.


## Eksempler

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



