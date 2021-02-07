---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Componente que coloca un faro en la lección, ya sea independientemente o unido a un "objetivo". Al colocar la baliza en el aire o al hacer clic en ella, se muestra un "tooltip".

## Options

* __title__ | `(string|node)`: El título se mostrará en la parte superior de la información de la herramienta. Default: `none`.
* __content__ | `(string|node)`: contenido de la información sobre herramientas. Default: `'`content` comes here...'`.
* __event__ | `string`: si está configurado como "clic", la punta de la herramienta se conmuta al hacer clic en la baliza; si está configurado como "salto", la punta de la herramienta se activa al pasar el cursor por encima de ella.. Default: `'click'`.
* __placement__ | `string`: la colocación de la punta de la herramienta relativa a "target" (ya sea "top", "top-start", "top-end", "bottom", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "right-end", "auto", o "center"). Default: `'left'`.
* __target__ | `string`: selector de clase o de ID del elemento al que se adjunta la punta de la herramienta. Default: `''`.
* __offset__ | `number`: la distancia entre la punta de la herramienta y el "objetivo" en píxeles. Default: `15`.
* __onChange__ | `function`: llamada de retorno invocada en el cambio de estado de la punta de la herramienta. Recibe dos argumentos: la "acción" ("abrir" o "cerrar") y las "utilidades" pasadas.. Default: `onChange() {}`.


## Examples

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



