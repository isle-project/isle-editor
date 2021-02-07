---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un componente de fondo dinámico que circula por una lista de textos en un intervalo determinado.

## Options

* __list__ | `array<string>`: lista de textos a mostrar. Default: `[]`.
* __loop__ | `boolean`: indica si el proceso se mostrará infinitamente. Default: `false`.
* __direction__ | `string`: la dirección del flujo de texto (ya sea "izquierda", "derecha", "arriba", "abajo", "seguimiento", "enfoque", o "giro"). Default: `'right'`.
* __still__ | `number`: el tiempo que el texto permanece quieto (en segundos). Default: `3`.
* __interval__ | `number`: el intervalo entre las llamadas (en segundos). Default: `15`.
* __inTime__ | `number`: tiempo del efecto de entrada (en segundos). Default: `0.6`.
* __outTime__ | `number`: tiempo del efecto de salida (en segundos). Default: `1`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos CSS del texto. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



