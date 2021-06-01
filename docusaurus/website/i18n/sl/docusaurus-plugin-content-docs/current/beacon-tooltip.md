---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponenta, ki postavi svetilnik v učno uro, bodisi samostojno ali povezano s `ciljom`. Ob podrsavanju ali kliku na svetilnik se prikaže namig.

## Možnosti

* __title__ | `(string|node)`: naslov, ki se prikaže na vrhu namiga.. Default: `none`.
* __content__ | `(string|node)`: vsebina namigov. Default: `'`content` comes here...'`.
* __event__ | `string`: če je nastavljeno na `click`, se namig orodja preklopi ob kliku na svetilnik; če je nastavljeno na `hover`, se namig orodja aktivira s premikanjem.. Default: `'click'`.
* __placement__ | `string`: postavitev vrstice glede na `cilj` (bodisi `zgoraj`, `zgoraj-začetek`, `zgoraj-konec`, `spodaj`, `spodaj-konec`, `levo`, `levo-začetek`, `levo-konec`, `desno`, `desno-začetek`, `desno-konec`, `avto` ali `središče`). Default: `'left'`.
* __target__ | `string`: izbirnik razreda ali ID za element, na katerega se pripne namig.. Default: `''`.
* __offset__ | `number`: razdalja med namigom in `ciljem` v pikslih. Default: `15`.
* __onChange__ | `function`: povratni klic, ki se sproži ob spremembi stanja vrstice z orodjem. Prejme dva argumenta: `dejavnost` (`odprtje` ali `zaprtje`) in posredovane `opreme`.. Default: `onChange() {}`.


## Primeri

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



