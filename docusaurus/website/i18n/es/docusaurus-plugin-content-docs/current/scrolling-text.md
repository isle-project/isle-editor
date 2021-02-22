---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un componente de fondo dinámico que circula por una lista de textos en un intervalo determinado.

## Opciones

* __text__ | `array<string>`: texto o lista de textos a mostrar. Default: `[]`.
* __loop__ | `boolean`: indica si el proceso se mostrará infinitamente. Default: `false`.
* __direction__ | `string`: la dirección del flujo de texto (ya sea "izquierda", "derecha", "arriba", "abajo", "seguimiento", "enfoque", o "giro"). Default: `'right'`.
* __hold__ | `number`: el tiempo que el texto permanece inmóvil (en segundos). Default: `5`.
* __wait__ | `number`: el tiempo antes de que llegue un nuevo texto (en segundos). Default: `3`.
* __inTime__ | `number`: tiempo del efecto de entrada (en segundos). Default: `1`.
* __outTime__ | `number`: tiempo del efecto de salida (en segundos). Default: `1`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos CSS del texto. Default: `{}`.


## Ejemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text= "This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
