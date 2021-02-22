---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Un R Shell interactivo que puede ser usado para ejecutar comandos R en la nube usando [OpenCPU](https://www.opencpu.org/).

## Opciones

* __code__ | `string`: El código R será evaluado. Default: `''`.
* __solution__ | `string`: para las cuestiones de programación, el código R "cadena" representa la solución oficial del problema. Default: `''`.
* __hints__ | `array<(string|node)>`: para las cuestiones de programación, una serie de consejos que proporcionan orientación sobre cómo abordar el problema. Default: `[]`.
* __addPreceding__ | `boolean`: si se establece en true, el shell evaluará todo el código del componente actual y todos los anteriores que ocurran en la lección. Default: `false`.
* __libraries__ | `array`: Bibliotecas R que deben ser cargadas automáticamente cuando se ejecuta el "código" de entrada. Default: `[]`.
* __precompute__ | `boolean`: controla si el código por defecto debe ser ejecutado una vez que el componente ha sido montado. Default: `false`.
* __prependCode__ | `(string|array)`: El código R "cadena" (o "matriz" de bloques de código R) se preparará para el código almacenado en "código" cuando se evalúe. Default: `''`.
* __chat__ | `boolean`: controla si la funcionalidad de chat en grupo debe ser activada. Default: `false`.
* __disabled__ | `boolean`: controla si se deshabilitan todas las entradas del usuario y se hace estático el bloque de código. Default: `false`.
* __lines__ | `number`: número de líneas a mostrar. Default: `5`.
* __resettable__ | `boolean`: controla si se muestra un botón de restablecimiento para restaurar la entrada de código por defecto. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno invocada siempre que la entrada del campo de texto cambia. Default: `onChange() {}`.
* __onEvaluate__ | `function`: se invoca cuando se hace clic en el botón "Evaluar".. Default: `onEvaluate(){}`.
* __onResult__ | `function`: llamada de retorno invocada siempre que el resultado de la ejecución de un código se obtiene de la nube. El resultado "cadena" se pasa como único argumento a la función de devolución de llamada. Default: `onResult() {}`.


## Ejemplos

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

