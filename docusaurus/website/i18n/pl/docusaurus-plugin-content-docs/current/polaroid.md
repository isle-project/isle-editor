---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Element wyświetlający obraz w stylu polaroida.

## Options

* __image__ | `string`: URL obrazu, który ma być wyświetlany w ramce polaroidowej. Default: `none`.
* __draggable__ | `boolean`: kontroluje, czy można przeciągnąć polaroid wokół ekranu. Default: `false`.
* __showPin__ | `boolean`: kontroluje czy pokazać pinezkę. Default: `false`.
* __stain__ | `boolean`: kontroluje, czy pokazać plamę po kawie. Default: `false`.
* __width__ | `number`: szerokość polaroida (w px). Default: `350`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onClick__ | `function`: Event Handler wywoływany po kliknięciu na obrazek (otrzymuje id Polaroida jako parametr). Default: `none`.


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
