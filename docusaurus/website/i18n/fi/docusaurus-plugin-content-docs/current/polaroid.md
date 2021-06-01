---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponentti, joka näyttää kuvan polaroidin tyyliin.

## Vaihtoehdot

* __image__ | `string`: polaroidikehyksessä näytettävän kuvan URL-osoite.. Default: `none`.
* __draggable__ | `boolean`: ohjaa, voiko polaroidia vetää näytön ympäri.. Default: `false`.
* __showPin__ | `boolean`: valvoo, näytetäänkö tappi. Default: `false`.
* __stain__ | `boolean`: säädetään, näytetäänkö kahvitahra. Default: `false`.
* __width__ | `number`: polaroidin leveys (px). Default: `350`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onClick__ | `function`: tapahtumankäsittelijä, joka käynnistyy, kun kuvaa napsautetaan (saa parametrina Polaroidin id:n).. Default: `none`.


## Esimerkkejä

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
