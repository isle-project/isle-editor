---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponentas, rodantis polaroido stiliaus vaizdą.

## Parinktys

* __image__ | `string`: polaroido rėmelyje rodytino vaizdo URL.. Default: `none`.
* __draggable__ | `boolean`: kontroliuoja, ar galima vilkti polaroidą ekrane.. Default: `false`.
* __showPin__ | `boolean`: kontroliuoja, ar rodyti kaištį. Default: `false`.
* __stain__ | `boolean`: kontroliuoja, ar rodyti kavos dėmę.. Default: `false`.
* __width__ | `number`: polaroido plotis (px). Default: `350`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onClick__ | `function`: įvykio tvarkyklė, iškviečiama, kai paspaudžiamas paveikslėlis (kaip parametrą gauna polaroido id).. Default: `none`.


## Pavyzdžiai

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
