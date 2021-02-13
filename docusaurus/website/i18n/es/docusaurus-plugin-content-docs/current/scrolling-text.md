---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un componente de fondo dinámico que circula por una lista de textos en un intervalo determinado.

## Options

* __text__ | `array<string>`: texto o lista de textos a mostrar. Default: `[]`.
* __loop__ | `boolean`: indica si el proceso se mostrará infinitamente. Default: `false`.
* __direction__ | `string`: la dirección del flujo de texto (ya sea "izquierda", "derecha", "arriba", "abajo", "seguimiento", "enfoque", o "giro"). Default: `'right'`.
* __hold__ | `number`: el tiempo que el texto permanece inmóvil (en segundos). Default: `5`.
* __wait__ | `number`: el tiempo antes de que llegue un nuevo texto (en segundos). Default: `3`.
* __inTime__ | `number`: tiempo del efecto de entrada (en segundos). Default: `1`.
* __outTime__ | `number`: tiempo del efecto de salida (en segundos). Default: `1`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos CSS del texto. Default: `{}`.


## Examples

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



