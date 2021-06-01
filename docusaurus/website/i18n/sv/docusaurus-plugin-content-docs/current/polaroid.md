---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

En komponent som visar en bild i stil med en polaroid.

## Alternativ

* __image__ | `string`: URL för den bild som ska visas i polaroidramen.. Default: `none`.
* __draggable__ | `boolean`: kontrollerar om man kan dra polaroid runt på skärmen. Default: `false`.
* __showPin__ | `boolean`: kontrollerar om en nål ska visas. Default: `false`.
* __stain__ | `boolean`: kontrollerar om en kaffefläck ska visas. Default: `false`.
* __width__ | `number`: polaroidbredd (i px). Default: `350`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onClick__ | `function`: Händelsehanterare som aktiveras när bilden klickas (får polaroidens id som parameter).. Default: `none`.


## Exempel

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
