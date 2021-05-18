---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Un componente de la ISLE que permite que dos rendericen dos caras.

## Opciones

* __button__ | `string`: etiqueta del botón. Default: `none`.
* __draggable__ | `boolean`: controla si la tarjeta puede ser arrastrada. Default: `false`.
* __flipSpeedBackToFront__ | `number`: la velocidad con la que la tarjeta pasa de fondo a primer plano, en segundos. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: La velocidad con la que la tarjeta pasa del primer plano al fondo, en segundos. Default: `1`.
* __oneTime__ | `boolean`: indica si el proceso de volteo puede ser ejecutado sólo una vez. Default: `false`.
* __perspective__ | `number`: Valor de la propiedad CSS para dar una perspectiva al elemento posicionado en 3D. Default: `1000`.
* __size__ | `number`: tamaño de la tarjeta (establece su "width" y "height"). Default: `250`.
* __disabled__ | `boolean`: Controla si la tarjeta desplegable está desactivada. Default: `false`.
* __value__ | `boolean`: estado de giro de la tarjeta (para el componente controlado). Default: `none`.
* __defaultValue__ | `boolean`: estado inicial de giro de la tarjeta. Default: `false`.
* __containerStyle__ | `object`: Estilo CSS del contenedor. Default: `{}`.
* __frontStyle__ | `object`: Estilo CSS de la tarjeta frontal. Default: `{}`.
* __backStyle__ | `object`: Estilo CSS de la tarjeta trasera. Default: `{}`.
* __onChange__ | `function`: llamada de retorno invocada una vez que la tarjeta es volteada; recibe el estado actual volteado como su único argumento. Default: `onChange() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{ float: 'none' }} size={200}>
  <img src="https://bit.ly/2YU5EbU" />
  <img src="https://bit.ly/3aGv9mp" />
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
