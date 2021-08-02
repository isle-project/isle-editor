---
id: seal 
title: Seal
sidebar_label: Seal
---

Знак одобрения.

## Варианты

* __active__ | `boolean`: контролирует, является ли уплотнение активным или серым. Default: `true`.
* __onClick__ | `function`: функция обратного вызова при щелчке по записке. Default: `onClick() {}`.
* __scale__ | `number`: размер объекта (если не задан явно, печать не перемасштабируется). Default: `none`.
* __innerStyle__ | `object`: стиль для внутреннего круга. Default: `{}`.
* __lower__ | `string`: нижний текст. Default: `'The lower text'`.
* __lowerArc__ | `number`: дуга для нижнего текста. Default: `150`.
* __noOrnaments__ | `boolean`: препятствует рендерингу орнаментов. Default: `false`.
* __removable__ | `boolean`: управляет тем, удаляется ли записка при нажатии. Default: `false`.
* __style__ | `object`: стиль элемента. Default: `none`.
* __title__ | `(string|node)`: название печати. Default: `'Enter a title'`.
* __upper__ | `string`: верхний текст. Default: `'The upper text'`.
* __upperArc__ | `number`: дуга для верхнего текста. Default: `150`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Removable', value: 'removable' },
        { label: 'Scaled', value: 'scaled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />
```

</TabItem>


<TabItem value="withStyle">

```jsx live

<Seal 
  title="LESSON DONE" 
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="removable">

```jsx live
<Seal 
  title="LESSON DONE" 
  noOrnaments
  removable
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="scaled">

```jsx live
<Seal 
  title="BIG SEAL" 
  scale={1.15}
  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon" upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

</Tabs>
