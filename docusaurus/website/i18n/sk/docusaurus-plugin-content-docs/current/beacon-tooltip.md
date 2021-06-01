---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponent umiestňujúci maják do lekcie, buď samostatne, alebo pripojený k `cieľu`. Po nabehnutí alebo kliknutí na maják sa zobrazí nápoveda.

## Možnosti

* __title__ | `(string|node)`: názov, ktorý sa má zobraziť v hornej časti nápovedy. Default: `none`.
* __content__ | `(string|node)`: obsah tooltipu. Default: `'`content` comes here...'`.
* __event__ | `string`: ak je nastavené na `click`, tooltip sa prepne po kliknutí na maják; ak je nastavené na `hover`, tooltip sa aktivuje pri nabehnutí. Default: `'click'`.
* __placement__ | `string`: umiestnenie tooltipu vzhľadom na `cieľ` (buď `vrchol`, `začiatok-vrchol`, `koniec-vrchol`, `spodok`, `koniec-spodok`, `ľavý`, `začiatok-ľavý`, `koniec-ľavý`, `pravý`, `začiatok-pravý`, `pravý-koniec`, `automatický` alebo `stred`). Default: `'left'`.
* __target__ | `string`: trieda alebo ID selektor pre prvok, ku ktorému sa má pripojiť tooltip. Default: `''`.
* __offset__ | `number`: vzdialenosť medzi tipom nástroja a `cieľom` v pixeloch. Default: `15`.
* __onChange__ | `function`: spätné volanie vyvolané pri zmene stavu tooltipu. Prijíma dva argumenty: `action` (`open` alebo `close`) a odovzdané `props`. Default: `onChange() {}`.


## Príklady

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



