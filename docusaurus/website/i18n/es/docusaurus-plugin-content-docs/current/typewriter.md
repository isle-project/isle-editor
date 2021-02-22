---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Un componente de ISLE que permite crear un efecto de máquina de escribir.

## Opciones

* __delay__ | `number`: retraso inicial antes de que la máquina de escribir se ponga en marcha (en milisegundos). Default: `none`.
* __hold__ | `number`: si el texto es una matriz de cadenas, mantenga pulsada la duración especificada, se mostrará la duración completa antes de que pase al siguiente elemento de la matriz. Default: `2000`.
* __interval__ | `number`: el intervalo de la máquina de escribir (en milisegundos). Default: `100`.
* __random__ | `boolean`: si se establece el azar, las pulsaciones de teclas se realizarán con una cierta aleatoriedad "humana". Default: `false`.
* __sound__ | `boolean`: la pulsación del teclado también se escuchará. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: el texto completo que se mostrará. Default: `''`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>

