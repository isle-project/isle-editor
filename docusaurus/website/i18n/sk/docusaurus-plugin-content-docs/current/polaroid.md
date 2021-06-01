---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponent zobrazujúci obrázok v štýle polaroidu.

## Možnosti

* __image__ | `string`: adresa URL obrázka, ktorý sa má zobraziť v polaroidovom rámčeku. Default: `none`.
* __draggable__ | `boolean`: ovláda, či je možné ťahať polaroid po obrazovke.. Default: `false`.
* __showPin__ | `boolean`: kontroluje, či sa má zobrazovať kolík. Default: `false`.
* __stain__ | `boolean`: kontroluje, či sa má zobraziť škvrna od kávy.. Default: `false`.
* __width__ | `number`: šírka polaroidu (v px). Default: `350`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onClick__ | `function`: obsluha udalosti vyvolaná po kliknutí na obrázok (ako parameter dostane id polaroidu). Default: `none`.


## Príklady

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
