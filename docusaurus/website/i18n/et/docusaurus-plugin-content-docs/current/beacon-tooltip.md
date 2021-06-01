---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponent, mis paigutab majaka õppetöösse kas iseseisvalt või "sihtmärgi" külge kinnitatud. Majakale hõljudes või sellele klõpsates kuvatakse tööriistavihik.

## Valikud

* __title__ | `(string|node)`: pealkiri, mis kuvatakse tööriistavihje ülaosas. Default: `none`.
* __content__ | `(string|node)`: tööriistade sisu. Default: `'`content` comes here...'`.
* __event__ | `string`: kui on määratud `click`, siis lülitatakse tööriistade otsik sisse, kui klõpsatakse majakal; kui on määratud `hover`, siis aktiveeritakse tööriistade otsik hõljumise teel.. Default: `'click'`.
* __placement__ | `string`: Tooltipi paigutus suhteliselt "sihtmärgi" suhtes (kas "top", "top-start", "top-end", "bottom", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "auto" või "center").. Default: `'left'`.
* __target__ | `string`: klassi või ID valija elemendi jaoks, millele tööriistatippi lisada. Default: `''`.
* __offset__ | `number`: tööriistakriipsu ja "sihtmärgi" vaheline kaugus pikslites. Default: `15`.
* __onChange__ | `function`: tagasikutsumine, mis kutsutakse esile tööriistakriipsu oleku muutumisel. Saab kaks argumenti: "tegevus" ("avamine" või "sulgemine") ja üleantud "rekvisiidid".. Default: `onChange() {}`.


## Näited

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



