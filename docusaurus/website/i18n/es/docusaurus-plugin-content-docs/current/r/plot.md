---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Componente para renderizar una trama R dentro de una lección de ISLE.

## Opciones

* __code__ | `string`: El código R para generar la trama. Default: `''`.
* __width__ | `(number|string)`: ancho de la trama (en px). Default: `600`.
* __height__ | `(number|string)`: altura de la trama (en px). Default: `'auto'`.
* __draggable__ | `boolean`: controla si la trama debe ser arrastrable. Default: `false`.
* __fileType__ | `string`: tipo de archivo de la trama (`png` o `svg`). Default: `'svg'`.
* __libraries__ | `array`: Bibliotecas R que deben ser cargadas automáticamente cuando se ejecuta el "código" de entrada. Default: `[]`.
* __prependCode__ | `(string|array)`: o una "serie" de fragmentos de código R que se preparan para el código almacenado en el "código" cuando se evalúa.. Default: `''`.
* __meta__ | `object`: meta-información de la trama. Default: `none`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __onDone__ | `function`: llamada de retorno con argumentos "er", "img" y "body" una vez que se crea un complot.. Default: `onDone() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Draggable', value: 'draggable' },
        { label: 'Custom Dimensions', value: 'customDimensions' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="draggable" >

```jsx live
<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="customDimensions" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RPlot 
    libraries={[ 'ggplot2' ]}
    code="qplot(mpg, wt, data = mtcars)" 
/>
```

</TabItem>

</Tabs>
