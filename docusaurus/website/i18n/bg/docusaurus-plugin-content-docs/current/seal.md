---
id: seal 
title: Seal
sidebar_label: Seal
---

Печат за одобрение.

## Опции

* __active__ | `boolean`: контролира дали печатът е активен или сив.. Default: `true`.
* __onClick__ | `function`: функция за обратно извикване, задействана при щракване върху бележката. Default: `onClick() {}`.
* __scale__ | `number`: размер на обекта (ако не е изрично зададен, размерът на печата не се променя). Default: `none`.
* __innerStyle__ | `object`: стил за вътрешния кръг. Default: `{}`.
* __lower__ | `string`: долният текст. Default: `'The lower text'`.
* __lowerArc__ | `number`: дъгата за долния текст. Default: `150`.
* __noOrnaments__ | `boolean`: предотвратява изобразяването на орнаментите. Default: `false`.
* __removable__ | `boolean`: контролира дали бележката се премахва при щракване върху нея.. Default: `false`.
* __style__ | `object`: стилът на елемента. Default: `none`.
* __title__ | `(string|node)`: заглавие на печата. Default: `'Enter a title'`.
* __upper__ | `string`: горният текст. Default: `'The upper text'`.
* __upperArc__ | `number`: дъгата за горния текст. Default: `150`.


## Примери

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
