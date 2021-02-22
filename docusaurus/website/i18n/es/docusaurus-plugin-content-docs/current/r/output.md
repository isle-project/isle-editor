---
id: r-output
title: R Output
sidebar_label: R Output
---

Componente para renderizar la salida R dentro de una lección de ISLE.

## Opciones

* __code__ | `string`: El código R utilizado para evaluar. Default: `''`.
* __libraries__ | `array`: Bibliotecas R que deben ser cargadas automáticamente cuando se ejecuta el "código" de entrada. Default: `[]`.
* __prependCode__ | `(string|array)`: El código R (o "matriz" de bloques de código) se preparará para el código almacenado en el "código" cuando se evalúe. Default: `''`.
* __onPlots__ | `function`: llamada de retorno invocada con cualquier trama generada. Default: `onPlots() {}`.
* __onResult__ | `function`: llamada de regreso invocada con "error" ("nulo" si la operación fue exitosa) y "resultado" manteniendo la salida R.. Default: `onResult() {}`.


## Ejemplos

```jsx live
<ROutput code="runif(10)" />
```

