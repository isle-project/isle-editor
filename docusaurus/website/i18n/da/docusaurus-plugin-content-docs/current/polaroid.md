---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

En komponent, der viser et billede i stil med et polaroid.

## Indstillinger

* __image__ | `string`: URL-adressen for det billede, der skal vises i polaroidrammen. Default: `none`.
* __draggable__ | `boolean`: styrer, om man kan trække polaroidet rundt på skærmen. Default: `false`.
* __showPin__ | `boolean`: kontrollerer, om der skal vises en pin. Default: `false`.
* __stain__ | `boolean`: kontrollerer, om der skal vises en kaffeplet. Default: `false`.
* __width__ | `number`: polaroidbredde (i px). Default: `350`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onClick__ | `function`: event handler, der påkaldes, når der klikkes på billedet (modtager polaroidens id som parameter). Default: `none`.


## Eksempler

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
