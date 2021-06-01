---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponenta, ki prikazuje sliko v slogu polaroida.

## Možnosti

* __image__ | `string`: URL slike, ki se prikaže v polaroidnem okvirju.. Default: `none`.
* __draggable__ | `boolean`: nadzoruje, ali lahko polaroid povlečete po zaslonu.. Default: `false`.
* __showPin__ | `boolean`: nadzoruje, ali naj se prikaže zatič.. Default: `false`.
* __stain__ | `boolean`: nadzoruje, ali naj se prikaže madež kave.. Default: `false`.
* __width__ | `number`: širina polaroida (v px). Default: `350`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onClick__ | `function`: izvajalec dogodka, ki se sproži ob kliku na sliko (kot parameter prejme id polaroida).. Default: `none`.


## Primeri

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
