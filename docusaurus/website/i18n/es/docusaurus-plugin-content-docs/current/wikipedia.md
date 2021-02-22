---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

El componente **Wikipedia** escanea la **Wikipedia** y devuelve un artículo - si se encuentra algo válido bajo el término de búsqueda introducido.

## Opciones

* __defaultEntry__ | `string`: entrada por defecto para mostrar. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
