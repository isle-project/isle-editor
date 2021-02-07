---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

A component displaying an image in the style of a polaroid.

## Options

* __image__ | `string`: the URL of the image to be displayed in the polaroid frame. Default: `none`.
* __draggable__ | `boolean`: controls whether one can drag the polaroid around the screen. Default: `false`.
* __showPin__ | `boolean`: shows a pin. Default: `false`.
* __width__ | `number`: polaroid width (in px). Default: `350`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: event handler invoked when image is clicked (receives the id of the Polaroid as parameter). Default: `none`.


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
