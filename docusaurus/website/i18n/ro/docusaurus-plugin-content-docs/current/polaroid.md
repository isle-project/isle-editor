---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

O componentă care afișează o imagine în stilul unui polaroid.

## Opțiuni

* __image__ | `string`: URL-ul imaginii care urmează să fie afișată în cadrul polaroidului. Default: `none`.
* __draggable__ | `boolean`: controlează dacă se poate trage polaroidul în jurul ecranului. Default: `false`.
* __showPin__ | `boolean`: controlează dacă se afișează sau nu un ac. Default: `false`.
* __stain__ | `boolean`: controlează dacă se afișează sau nu o pată de cafea. Default: `false`.
* __width__ | `number`: lățimea polaroidului (în px). Default: `350`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onClick__ | `function`: gestionarul de evenimente invocat atunci când se face clic pe imagine (primește id-ul Polaroidului ca parametru). Default: `none`.


## Exemple

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
