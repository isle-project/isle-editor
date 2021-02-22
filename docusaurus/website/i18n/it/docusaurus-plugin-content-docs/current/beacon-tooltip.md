---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Componente che posiziona un faro nella lezione, indipendentemente o collegato ad un `target`. Facendo hovering o cliccando sul beacon, viene visualizzato un tooltip.

## Opzioni

* __title__ | `(string|node)`: titolo da visualizzare nella parte superiore del tooltip. Default: `none`.
* __content__ | `(string|node)`: contenuto del tooltip. Default: `'`content` comes here...'`.
* __event__ | `string`: se impostato su `click`, il tooltip viene attivato quando si clicca sul beacon; se impostato su `hover`, il tooltip viene attivato tramite hovering. Default: `'click'`.
* __placement__ | `string`: posizionamento del tooltip relativo all'"obiettivo" (sia `top', `top-start', `top-end', `top-end', `bottom', `bottom-end', `left', `left-start', `left-end', `right', `right-start', `right-end', `auto', o `center'). Default: `'left'`.
* __target__ | `string`: selettore di classe o ID per l'elemento a cui collegare il tooltip. Default: `''`.
* __offset__ | `number`: distanza tra il tooltip e il `target` in pixel. Default: `15`.
* __onChange__ | `function`: richiamata al cambio di stato del tooltip. Riceve due argomenti: la `azione` (`aperta` o `chiusa`) e il `props` passato. Default: `onChange() {}`.


## Esempi

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



