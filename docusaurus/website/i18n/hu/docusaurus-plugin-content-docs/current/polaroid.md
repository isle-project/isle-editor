---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Egy polaroid stílusú képet megjelenítő komponens.

## Opciók

* __image__ | `string`: a polaroid keretben megjelenítendő kép URL-címe. Default: `none`.
* __draggable__ | `boolean`: szabályozza, hogy lehet-e a polaroidot a képernyőn körbehúzni.. Default: `false`.
* __showPin__ | `boolean`: szabályozza, hogy megjelenjen-e egy pin. Default: `false`.
* __stain__ | `boolean`: szabályozza, hogy megjelenjen-e a kávéfolt. Default: `false`.
* __width__ | `number`: polaroid szélesség (px-ben). Default: `350`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onClick__ | `function`: eseménykezelő, amely a képre kattintáskor hívódik elő (paraméterként megkapja a Polaroid azonosítóját). Default: `none`.


## Példák

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
