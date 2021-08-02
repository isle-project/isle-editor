---
id: seal 
title: Seal
sidebar_label: Seal
---

Jóváhagyási pecsét.

## Opciók

* __active__ | `boolean`: szabályozza, hogy a pecsét aktív vagy szürke legyen.. Default: `true`.
* __onClick__ | `function`: callback függvény, amely a jegyzetre kattintáskor hívódik elő.. Default: `onClick() {}`.
* __scale__ | `number`: objektum mérete (ha nincs kifejezetten beállítva, a pecsét nem méreteződik át). Default: `none`.
* __innerStyle__ | `object`: a stílus a belső kör számára. Default: `{}`.
* __lower__ | `string`: az alsó szöveg. Default: `'The lower text'`.
* __lowerArc__ | `number`: az alsó szöveg ívét. Default: `150`.
* __noOrnaments__ | `boolean`: megakadályozza a díszek megjelenítését. Default: `false`.
* __removable__ | `boolean`: szabályozza, hogy a megjegyzés eltávolításra kerüljön-e, ha rákattintanak. Default: `false`.
* __style__ | `object`: az elem stílusa. Default: `none`.
* __title__ | `(string|node)`: pecsét címe. Default: `'Enter a title'`.
* __upper__ | `string`: a felső szöveg. Default: `'The upper text'`.
* __upperArc__ | `number`: a felső szöveg ívét. Default: `150`.


## Példák

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
