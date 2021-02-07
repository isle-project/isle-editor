---
id: pages 
title: Pages
sidebar_label: Pages
---

Een ISLE-paginatiecomponent die de gebruiker in staat stelt om door een reeks pagina's te stappen.

## Options

* __activePage__ | `number`: actieve pagina. Default: `1`.
* __disabled__ | `boolean`: bepaalt of de navigatiebalk actief is of niet. Default: `false`.
* __title__ | `string`: weergegeven titel van de paginacontainer. Default: `''`.
* __pagination__ | `string`: om de paginering te laten zien op de `top`, `bodem` of `beide'.. Default: `'top'`.
* __size__ | `string`: grootte van de paginaknoppen (ofwel `default`, `lg`, `groot`, `sm`, `klein`, `xs`, of `klein`). Default: `'default'`.
* __height__ | `(number|string)`: de maximale hoogte van de container. Als een ingesloten pagina hoger is, wordt een verticale schuifbalk toegevoegd.. Default: `none`.
* __voiceID__ | `string`: stembesturingsidentificatie. Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSelect__ | `function`: Functie die wordt aangeroepen wanneer de actieve wijziging wordt gewijzigd. Ontvangt de nieuwe actieve pagina-index als enige parameter. Default: `onSelect() {}`.


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



