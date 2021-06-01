---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Komponenta zobrazující obrázek ve stylu polaroidu.

## Možnosti

* __image__ | `string`: adresa URL obrázku, který se má zobrazit v polaroidovém rámečku.. Default: `none`.
* __draggable__ | `boolean`: určuje, zda lze polaroid přetáhnout po obrazovce.. Default: `false`.
* __showPin__ | `boolean`: řídí, zda se má zobrazit kolík. Default: `false`.
* __stain__ | `boolean`: kontroluje, zda se má zobrazit skvrna od kávy.. Default: `false`.
* __width__ | `number`: šířka polaroidu (v px). Default: `350`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onClick__ | `function`: obsluha události vyvolaná při kliknutí na obrázek (jako parametr obdrží id polaroidu). Default: `none`.


## Příklady

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
