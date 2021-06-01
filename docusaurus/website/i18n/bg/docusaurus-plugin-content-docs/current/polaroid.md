---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Компонент, показващ изображение в стил полароид.

## Опции

* __image__ | `string`: URL адреса на изображението, което ще се показва в полароидната рамка. Default: `none`.
* __draggable__ | `boolean`: контролира дали може да се плъзга полароидът по екрана.. Default: `false`.
* __showPin__ | `boolean`: контролира дали да се показва щифт. Default: `false`.
* __stain__ | `boolean`: контролира дали да се показва петно от кафе. Default: `false`.
* __width__ | `number`: ширина на полароида (в px). Default: `350`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onClick__ | `function`: обработка на събитие, задействана при кликване върху изображението (получава id на Polaroid като параметър). Default: `none`.


## Примери

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
