---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Un componente que muestra una imagen al estilo de una polaroid.

## Options

* __image__ | `string`: el URL de la imagen que se mostrará en el marco de la polaroid. Default: `none`.
* __draggable__ | `boolean`: controla si se puede arrastrar la polaroid por la pantalla. Default: `false`.
* __showPin__ | `boolean`: muestra un alfiler. Default: `false`.
* __width__ | `number`: ancho de la polaroid (en px). Default: `350`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onClick__ | `function`: El manejador de eventos invocado cuando se hace clic en la imagen (recibe el id de la Polaroid como parámetro). Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Pin & Draggable', value: 'pinnedAndDraggable' },
        { label: 'Custom Width', value: 'customWidth' },
        { label: 'Handling Clicks', value: 'handlingClicks' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="pinnedAndDraggable">

```jsx live
<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="customWidth">

```jsx live
<Polaroid width={200}
 image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="handlingClicks">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" 
 onClick={() => {
     alert( 'The polaroid has been clicked...' );
 }} />
```

</TabItem>

</Tabs>
