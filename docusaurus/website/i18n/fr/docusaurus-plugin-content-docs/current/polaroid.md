---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Composant affichant une image dans le style d'un polaroid.

## Options

* __image__ | `string`: l'URL de l'image à afficher dans le cadre du polaroid. Default: `none`.
* __draggable__ | `boolean`: contrôle si l'on peut faire glisser le polaroid sur l'écran. Default: `false`.
* __showPin__ | `boolean`: contrôle de la présence ou non d'une broche. Default: `false`.
* __stain__ | `boolean`: contrôle si une tache de café doit apparaître. Default: `false`.
* __width__ | `number`: largeur du polaroid (en px). Default: `350`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onClick__ | `function`: gestionnaire d'événements invoqué lorsque l'image est cliquée (reçoit l'identifiant du Polaroïd comme paramètre). Default: `none`.


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
