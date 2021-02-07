---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Eine Komponente, die ein Bild im Stil eines Polaroids anzeigt.

## Options

* __image__ | `string`: die URL des Bildes, das im Polaroidrahmen angezeigt werden soll. Default: `none`.
* __draggable__ | `boolean`: steuert, ob man das Polaroid auf dem Bildschirm ziehen kann. Default: `false`.
* __showPin__ | `boolean`: zeigt einen Stift. Default: `false`.
* __width__ | `number`: Polaroidbreite (in px). Default: `350`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onClick__ | `function`: Event-Handler, der aufgerufen wird, wenn auf das Bild geklickt wird (erhält die ID des Polaroid als Parameter). Default: `none`.


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
