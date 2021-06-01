---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponents, kas attēlo polaroīda stila attēlu.

## Iespējas

* __image__ | `string`: polaroīda rāmītī rādāmā attēla URL.. Default: `none`.
* __draggable__ | `boolean`: nosaka, vai polaroidu var vilkt pa ekrānu.. Default: `false`.
* __showPin__ | `boolean`: nosaka, vai attēlot tapu. Default: `false`.
* __stain__ | `boolean`: kontrolē, vai parādīt kafijas traipu.. Default: `false`.
* __width__ | `number`: polaroīda platums (px). Default: `350`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onClick__ | `function`: notikuma apstrādātājs, kas tiek izsaukts, kad ir noklikšķināts uz attēla (kā parametru saņem Polaroid id).. Default: `none`.


## Piemēri

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
