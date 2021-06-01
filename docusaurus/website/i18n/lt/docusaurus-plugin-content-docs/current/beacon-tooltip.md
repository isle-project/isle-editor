---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponentas, į pamoką įdedantis švyturį, savarankišką arba prijungtą prie "taikinio". Užvedus pelės žymeklį arba spustelėjus ant jo, rodoma įrankių užuomina.

## Parinktys

* __title__ | `(string|node)`: pavadinimas, kuris bus rodomas įrankių užuominos viršuje.. Default: `none`.
* __content__ | `(string|node)`: įrankių užuominų turinys. Default: `'`content` comes here...'`.
* __event__ | `string`: jei nustatyta į `click`, įrankių užrašas perjungiamas paspaudus ant švyturio; jei nustatyta į `hover`, įrankių užrašas aktyvuojamas užvedus ant jo.. Default: `'click'`.
* __placement__ | `string`: įrankio užrašo vieta, palyginti su `tikslo` (arba `viršutinis`, `viršūnės pradžia`, `viršūnės pabaiga`, `apatinis`, `apatinio galo`, `kairės`, `kairės pradžios`, `kairės pabaigos`, `dešinės`, `dešinės pradžios`, `dešinės pabaigos`, `automatinis` arba `centrinis`).. Default: `'left'`.
* __target__ | `string`: elemento, prie kurio norima pritvirtinti įrankių užuominą, klasės arba ID selektorius. Default: `''`.
* __offset__ | `number`: atstumas tarp įrankio užrašo ir `tikslo` pikseliuose. Default: `15`.
* __onChange__ | `function`: atgalinis iškvietimas, inicijuojamas pasikeitus įrankio užrašo būsenai. Gauna du argumentus: `action` (`open` arba `close`) ir perduotą `props`.. Default: `onChange() {}`.


## Pavyzdžiai

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



