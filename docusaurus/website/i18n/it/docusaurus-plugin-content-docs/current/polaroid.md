---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Un componente che visualizza un'immagine nello stile di una polaroid.

## Opzioni

* __image__ | `string`: l'URL dell'immagine da visualizzare nella polaroid. Default: `none`.
* __draggable__ | `boolean`: controlla se si può trascinare la polaroid sullo schermo. Default: `false`.
* __showPin__ | `boolean`: controlla se mostrare un pin. Default: `false`.
* __stain__ | `boolean`: controlla se mostrare una macchia di caffè. Default: `false`.
* __width__ | `number`: larghezza della polaroid (in px). Default: `350`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onClick__ | `function`: event handler invocato quando l'immagine viene cliccata (riceve l'id della Polaroid come parametro). Default: `none`.


## Esempi

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
