---
id: r-table
title: R Table
sidebar_label: R Table
---

Componente para renderizar un marco o matriz de datos R en una pantalla tabular.

## Options

* __code__ | `string`: Código R que devuelve un marco de datos que contiene los datos que se mostrarán en la tabla. Default: `''`.
* __libraries__ | `array`: Bibliotecas R que deben ser cargadas automáticamente cuando se ejecuta el "código" de entrada. Default: `[]`.
* __prependCode__ | `(string|array)`: El código R "cadena" (o "matriz" de bloques de código R) se preparará para el código almacenado en "código" cuando se evalúe. Default: `''`.
* __width__ | `number`: ancho (entre 0 y 1). Default: `0.5`.


## Examples

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

