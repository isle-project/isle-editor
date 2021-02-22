---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Een component die een beeld weergeeft in de stijl van een polaroid.

## Opties

* __image__ | `string`: de URL van de afbeelding die in het polaroidframe moet worden weergegeven. Default: `none`.
* __draggable__ | `boolean`: controleert of men de polaroid rond het scherm kan slepen. Default: `false`.
* __showPin__ | `boolean`: bepaalt of een pin wordt getoond. Default: `false`.
* __stain__ | `boolean`: bepaalt of een koffievlek wordt getoond. Default: `false`.
* __width__ | `number`: polaroidbreedte (in px). Default: `350`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onClick__ | `function`: event handler aangeroepen bij het aanklikken van de afbeelding (ontvangt de id van de Polaroid als parameter). Default: `none`.


## Voorbeelden

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
