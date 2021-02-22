---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Компонент, отображающий изображение в стиле поляроида.

## Варианты

* __image__ | `string`: URL-адрес изображения для отображения в кадре поляроида. Default: `none`.
* __draggable__ | `boolean`: контролирует, можно ли перетаскивать поляроид по экрану.. Default: `false`.
* __showPin__ | `boolean`: контролирует, показывать ли булавку. Default: `false`.
* __stain__ | `boolean`: контролирует, показывать ли пятно от кофе. Default: `false`.
* __width__ | `number`: ширина поляроида (в px). Default: `350`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onClick__ | `function`: обработчик события, вызываемый при щелчке по изображению (в качестве параметра получает идентификатор поляроида). Default: `none`.


## Примеры

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
