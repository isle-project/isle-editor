---
id: r-table
title: R Table
sidebar_label: R Table
---

Componente para renderizar un marco o matriz de datos R en una pantalla tabular.

## Opciones

* __code__ | `string`: Código R que devuelve un marco de datos que contiene los datos que se mostrarán en la tabla. Default: `''`.
* __libraries__ | `array`: Bibliotecas R que deben ser cargadas automáticamente cuando se ejecuta el "código" de entrada. Default: `[]`.
* __prependCode__ | `(string|array)`: El código R "cadena" (o "matriz" de bloques de código R) se preparará para el código almacenado en "código" cuando se evalúe. Default: `''`.
* __style__ | `object`: Estilos CSS en línea. Default: `{}`.


## Ejemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
