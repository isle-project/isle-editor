---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Un shell interactivo de Javascript que puede ser usado para ejecutar comandos de Javascript. El shell contiene una consola que muestra mensajes de error, advertencias, etc.

## Opciones

* __code__ | `string`: Código JavaScript a evaluar. Default: `''`.
* __solution__ | `string`: para cuestiones de programación, el código "cadena" representa la solución oficial del problema. Default: `''`.
* __hints__ | `array<(string|node)>`: para las cuestiones de programación, una serie de consejos que proporcionan orientación sobre cómo abordar el problema. Default: `[]`.
* __precompute__ | `boolean`: controla si el código por defecto debe ser ejecutado una vez que el componente ha sido montado. Default: `false`.
* __chat__ | `boolean`: controla si la funcionalidad de chat en grupo debe ser activada. Default: `false`.
* __check__ | `string`: añadió el código JavaScript para comprobar el "código" a evaluar. Default: `none`.
* __disabled__ | `boolean`: controla si se deshabilitan todas las entradas del usuario y se hace estático el bloque de código. Default: `false`.
* __lines__ | `number`: número de líneas a mostrar. Default: `5`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno invocada siempre que la entrada del campo de texto cambia. Default: `onChange() {}`.
* __onEvaluate__ | `function`: se invoca cuando se hace clic en el botón "Evaluar". Default: `onEvaluate() {}`.
* __vars__ | `object`: objeto de alcance con variables que deben estar disponibles para el "código" evaluado. Default: `none`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




