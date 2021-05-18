---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Onderdeel dat een baken in de les plaatst, zelfstandig of gekoppeld aan een `target`. Bij het zweven of klikken op het baken wordt een tooltip weergegeven.

## Opties

* __title__ | `(string|node)`: titel die bovenaan de tooltip moet worden weergegeven. Default: `none`.
* __content__ | `(string|node)`: tooltipgehalte. Default: `'`content` comes here...'`.
* __event__ | `string`: indien ingesteld op `klik`, wordt de tooltip bij het klikken op het baken omgeschakeld; indien ingesteld op `zweven`, wordt de tooltip geactiveerd via zweven. Default: `'click'`.
* __placement__ | `string`: plaatsing van de tooltip ten opzichte van `target` (ofwel `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left-start`, `left-start`, `left-end`, `right`, `right-start`, `right-start`, `auto`, of `center`). Default: `'left'`.
* __target__ | `string`: klasse- of ID-selector voor element om tooltip aan te bevestigen. Default: `''`.
* __offset__ | `number`: afstand tussen de tooltip en `target` in pixels. Default: `15`.
* __onChange__ | `function`: callback ingeroepen bij staatsverandering van de tooltip. Ontvangt twee argumenten: de `actie` (`openen` of `sluiten`) en de gepasseerde `props`. Default: `onChange() {}`.


## Voorbeelden

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



