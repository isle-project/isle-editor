---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponent, mis kuvab pilti polaroidi stiilis.

## Valikud

* __image__ | `string`: Polaroidi raamis kuvatava pildi URL aadress. Default: `none`.
* __draggable__ | `boolean`: kontrollib, kas polaroidi saab ekraanil ringi lohistada.. Default: `false`.
* __showPin__ | `boolean`: kontrollib, kas näidata näppu. Default: `false`.
* __stain__ | `boolean`: kontrollib, kas näidata kohviplekki. Default: `false`.
* __width__ | `number`: polaroidi laius (px). Default: `350`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onClick__ | `function`: sündmuse käsitseja, mis kutsutakse esile, kui pildile vajutatakse (saab parameetrina Polaroidi id-i). Default: `none`.


## Näited

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
